import { Edit, useForm } from "@refinedev/antd";
import { VesselForm } from "../../components/vessels/VesselForm";
import dayjs from "dayjs";

export const VesselEdit = () => {
  const { formProps, saveButtonProps, formLoading } = useForm({
    resource: "vessels",
    action: "edit",
    redirect: "list",
    queryOptions: {
      select: (data) => {
        // Transform date strings to dayjs objects for the form
        const transformedData = { ...data };
        if (transformedData.data) {
          const vessel = { ...transformedData.data };

          // Transform date fields
          if (
            vessel.inspectionDueDate &&
            typeof vessel.inspectionDueDate === "string"
          ) {
            vessel.inspectionDueDate = dayjs(vessel.inspectionDueDate);
          }

          if (
            vessel.lastInspectionDate &&
            typeof vessel.lastInspectionDate === "string"
          ) {
            vessel.lastInspectionDate = dayjs(vessel.lastInspectionDate);
          }

          transformedData.data = vessel;
        }
        return transformedData;
      }
    }
  });

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <VesselForm formProps={formProps} />
    </Edit>
  );
};
