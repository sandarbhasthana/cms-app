// File: src/modules/crew/components/CrewOnboardingWizard.tsx
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Steps, Button, Form, Input, DatePicker, Select } from "antd";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useSelect } from "@refinedev/antd";
import {
  useDataProvider,
  useNavigation,
  useNotification
} from "@refinedev/core";
import { VesselRole } from "@cms-app/prisma";
import {
  humanizeEnum,
  DEPARTMENTS,
  STATUSES,
  filterRolesByDept
} from "../../pages/crew/utils";
import axios from "axios";

const { Step } = Steps;

// Get all vessel roles from the Prisma enum
const ALL_ROLES: VesselRole[] = Object.values(VesselRole);

// Define all form fields
interface OnboardingData {
  // Step 1: Basic crew creation fields
  userId?: string;
  firstName: string;
  lastName: string;
  primaryDepartment: "DECK" | "ENGINE" | "CATERING";
  rank: VesselRole;
  status?: "ACTIVE" | "INACTIVE" | "ON_LEAVE";

  // Step 2: Core Details
  fullName?: string;
  dateOfBirth?: string;
  gender?: string;
  nationality?: string;

  // Step 3: Contact & Emergency
  permanentAddress?: string;

  // ... add all other fields here
}

const steps = [
  { key: "basic", title: "Basic Information" },
  { key: "core", title: "Core Details" },
  { key: "contact", title: "Contact & Emergency" },
  { key: "employment", title: "Employment & Rank" },
  { key: "medical", title: "Medical & Certs" },
  { key: "training", title: "Training & Optional" }
];

export const CrewOnboardingWizard: React.FC<{
  crewId: string | null;
  isNewCrew: boolean;
  userId?: string | null;
}> = ({ crewId, isNewCrew, userId }) => {
  const methods = useForm<OnboardingData>({
    mode: "onBlur"
  });
  const { handleSubmit, watch, reset } = methods;
  const [current, setCurrent] = useState(0);
  const [createdCrewId, setCreatedCrewId] = useState<string | null>(crewId);
  const [detectedExistingCrew, setDetectedExistingCrew] =
    useState<boolean>(false);
  const [isCheckingExistingCrew, setIsCheckingExistingCrew] =
    useState<boolean>(false);
  const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const dataProvider = useDataProvider();
  const { list } = useNavigation();
  const { open } = useNotification();

  // Users select — only show CREW-role users ideally.
  const { selectProps: userSelectProps } = useSelect({
    resource: "users",
    optionLabel: "email",
    optionValue: "id",
    filters: [{ field: "role", operator: "eq", value: "CREW" }],
    searchField: "search"
  });

  // Auto-select user if userId is provided (from crew list onboarding buttons)
  useEffect(() => {
    if (userId && isNewCrew) {
      methods.setValue("userId", userId);
      handleUserSelect(userId);
    }
  }, [userId, isNewCrew]);

  // Load draft on mount (only for existing crew with real crew ID)
  useEffect(() => {
    if (!isNewCrew && crewId && !userId) {
      // Only load draft if we have a real crew ID (not starting from userId)
      axios
        .get<{ data: Partial<OnboardingData> }>(`/crew/${crewId}/draft`)
        .then(({ data }) => {
          reset(data.data || {});
        })
        .catch(() => {
          open?.({
            type: "error",
            message: "Failed to load draft"
          });
        });
    }
  }, [crewId, reset, isNewCrew, userId]);

  // Auto-save on value change (debounced) - only for existing crew
  useEffect(() => {
    if (!isNewCrew && createdCrewId) {
      const subscription = watch((value) => {
        if (autoSaveTimerRef.current) {
          clearTimeout(autoSaveTimerRef.current);
        }
        autoSaveTimerRef.current = setTimeout(() => {
          axios
            .patch(`/crew/${createdCrewId}/draft`, { data: value })
            .catch(() => {
              open?.({
                type: "error",
                message: "Auto-save failed"
              });
            });
        }, 1000);
      });
      return () => {
        subscription.unsubscribe();
        if (autoSaveTimerRef.current) {
          clearTimeout(autoSaveTimerRef.current);
        }
      };
    }
  }, [createdCrewId, watch, isNewCrew]);

  // Function to split name into first and last name (fallback for users without crew data)
  const splitName = (name: string): { firstName: string; lastName: string } => {
    const parts = (name ?? "").trim().split(/\s+/);
    if (parts.length === 0) return { firstName: "", lastName: "" };
    if (parts.length === 1) return { firstName: parts[0], lastName: "" };
    return {
      firstName: parts.slice(0, -1).join(" "),
      lastName: parts.slice(-1)[0]
    };
  };

  // Handle user selection - populate name and crew-specific fields if available
  const handleUserSelect = async (userId: string) => {
    if (!userId) return;

    setIsCheckingExistingCrew(true);
    try {
      // Fetch user details including crew data
      const { data: user } = await dataProvider().getOne({
        resource: "users",
        id: userId
      });

      // Always populate first/last name from user's name
      const { firstName, lastName } = splitName(user.name);
      methods.setValue("firstName", firstName);
      methods.setValue("lastName", lastName);

      // Check if user already has crew data
      if (user.crew) {
        const crew = user.crew;
        setDetectedExistingCrew(true);
        setCreatedCrewId(crew.id);

        // Populate all available crew fields
        methods.setValue("primaryDepartment", crew.primaryDepartment);
        methods.setValue("rank", crew.rank);
        methods.setValue("status", crew.status);

        // Show informative message about existing crew record
        open?.({
          type: "success",
          message: "Existing Crew Record Found",
          description:
            "This user already has a crew record. You can update their information or continue with onboarding."
        });
      } else {
        setDetectedExistingCrew(false);
        setCreatedCrewId(null);
        open?.({
          type: "success",
          message: "User Selected",
          description: "Ready to create new crew record."
        });
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      open?.({
        type: "error",
        message: "Failed to fetch user details"
      });
    } finally {
      setIsCheckingExistingCrew(false);
    }
  };

  // Handle basic crew creation/update from step 0
  const handleBasicCrewSubmit = async (data: OnboardingData) => {
    try {
      const shouldCreateNew = isNewCrew && !detectedExistingCrew;
      const shouldUpdate = detectedExistingCrew && createdCrewId;

      if (shouldCreateNew) {
        // Create new crew member
        const response = await dataProvider().create({
          resource: "crew",
          variables: {
            userId: data.userId,
            firstName: data.firstName,
            lastName: data.lastName,
            primaryDepartment: data.primaryDepartment,
            rank: data.rank,
            status: data.status || "ACTIVE"
          }
        });

        setCreatedCrewId(response.data.id as string);
        open?.({
          type: "success",
          message: "Crew member created successfully!"
        });

        // Move to next step for continued onboarding
        setCurrent(1);
      } else if (shouldUpdate) {
        // Update existing crew basic information
        await dataProvider().update({
          resource: "crew",
          id: createdCrewId,
          variables: {
            firstName: data.firstName,
            lastName: data.lastName,
            primaryDepartment: data.primaryDepartment,
            rank: data.rank,
            status: data.status || "ACTIVE"
          }
        });
        open?.({
          type: "success",
          message: "Basic crew information updated!"
        });

        // Move to next step for continued onboarding
        setCurrent(1);
      } else {
        throw new Error(
          "Invalid state: Unable to determine whether to create or update crew record"
        );
      }
    } catch (error) {
      const isCreating = isNewCrew && !detectedExistingCrew;
      open?.({
        type: "error",
        message: isCreating
          ? "Failed to create crew member"
          : "Failed to update crew information"
      });
      console.error("Submit error:", error);
    }
  };

  // Handle final onboarding completion
  const onSubmit: SubmitHandler<OnboardingData> = async (data) => {
    try {
      if (current === 0) {
        // If submitting from step 0, handle basic crew creation/update
        await handleBasicCrewSubmit(data);
      } else {
        // Final submission - complete onboarding
        if (createdCrewId) {
          await axios.patch(`/crew/${createdCrewId}`, data);
          open?.({
            type: "success",
            message: "Onboarding completed successfully!"
          });
          list("crew");
        } else {
          throw new Error("No crew ID available for final submission");
        }
      }
    } catch (error) {
      open?.({
        type: "error",
        message: "Failed to complete onboarding"
      });
      console.error("Submit error:", error);
    }
  };

  // Role options based on department
  const dept = watch("primaryDepartment");
  const roleOptions = useMemo(
    () =>
      filterRolesByDept(ALL_ROLES, dept).map((r) => ({
        label: humanizeEnum(r),
        value: r
      })),
    [dept]
  );

  const next = () => setCurrent((c) => Math.min(c + 1, steps.length - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <FormProvider {...methods}>
      <Steps
        current={current}
        onChange={setCurrent}
        style={{ marginBottom: 24 }}
      >
        {steps.map((s) => (
          <Step key={s.key} title={s.title} />
        ))}
      </Steps>

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        {current === 0 && (
          <>
            <Form.Item
              label="User"
              required={isNewCrew}
              help={
                isNewCrew
                  ? detectedExistingCrew
                    ? "✅ User has existing crew record - will update instead of create"
                    : "Select a user to create crew record for"
                  : "Skip if updating existing crew"
              }
            >
              <Select
                showSearch
                placeholder="Search user by email"
                style={{ width: "100%" }}
                value={watch("userId") || undefined}
                options={userSelectProps.options}
                loading={userSelectProps.loading || isCheckingExistingCrew}
                onSearch={userSelectProps.onSearch}
                filterOption={userSelectProps.filterOption}
                onChange={(value) => {
                  const userId = value as string;
                  methods.setValue("userId", userId);
                  if (userId) {
                    handleUserSelect(userId);
                  }
                }}
                disabled={!isNewCrew}
              />
            </Form.Item>

            <Form.Item label="First name" required>
              <Input
                value={watch("firstName") || ""}
                onChange={(e) => methods.setValue("firstName", e.target.value)}
                placeholder="First name"
              />
            </Form.Item>

            <Form.Item label="Last name" required>
              <Input
                value={watch("lastName") || ""}
                onChange={(e) => methods.setValue("lastName", e.target.value)}
                placeholder="Last name"
              />
            </Form.Item>

            <Form.Item label="Department" required>
              <Select
                options={DEPARTMENTS}
                value={watch("primaryDepartment")}
                onChange={(value) =>
                  methods.setValue("primaryDepartment", value)
                }
                placeholder="Select department"
              />
            </Form.Item>

            <Form.Item label="Rank" required>
              <Select
                showSearch
                optionFilterProp="label"
                options={roleOptions}
                placeholder="Select rank"
                value={watch("rank")}
                onChange={(value) => methods.setValue("rank", value)}
              />
            </Form.Item>

            <Form.Item label="Status">
              <Select
                options={STATUSES}
                value={watch("status")}
                onChange={(value) => methods.setValue("status", value)}
                placeholder="Select status"
              />
            </Form.Item>
          </>
        )}

        {current === 1 && (
          <>
            <Form.Item label="Full Name" required>
              <Input {...methods.register("fullName", { required: true })} />
            </Form.Item>
            <Form.Item label="Date of Birth" required>
              <DatePicker
                onChange={(_, dateString) =>
                  methods.setValue(
                    "dateOfBirth",
                    Array.isArray(dateString) ? dateString[0] : dateString
                  )
                }
              />
            </Form.Item>
            {/* …other core fields */}
          </>
        )}

        {current === 2 && (
          <>
            <Form.Item label="Permanent Address">
              <Input.TextArea
                {...methods.register("permanentAddress")}
                rows={2}
              />
            </Form.Item>
            {/* …other contact fields */}
          </>
        )}

        {current === 3 && <>{/* Employment & Rank fields */}</>}

        {current === 4 && <>{/* Medical & Certification fields */}</>}

        {current === 5 && <>{/* Training & Optional fields */}</>}

        <Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {current > 0 && <Button onClick={prev}>Previous</Button>}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                {isNewCrew
                  ? detectedExistingCrew
                    ? "Update Crew Information"
                    : "Create Crew Member"
                  : "Complete Onboarding"}
              </Button>
            )}
            {/* For new crew, allow creating after first step */}
            {isNewCrew && current === 0 && (
              <Button type="primary" htmlType="submit">
                {detectedExistingCrew
                  ? "Update & Continue"
                  : "Create & Continue"}
              </Button>
            )}
          </div>
        </Form.Item>
      </Form>
    </FormProvider>
  );
};
