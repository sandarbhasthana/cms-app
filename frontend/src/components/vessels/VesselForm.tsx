import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Row,
  Col,
  Button,
  Modal,
  message,
  FormProps,
  theme,
  DatePicker
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useCustomMutation } from "@refinedev/core";
import dayjs from "dayjs";
import {
  vesselTypeOptions,
  engineMakeOptions,
  tonnageUnitOptions
} from "../../constants/vesselDropdowns";

interface VesselFormProps {
  formProps: FormProps; // Make it required since both Create and Edit pages provide it
}

const { useToken } = theme;

export const VesselForm: React.FC<VesselFormProps> = ({ formProps }) => {
  const { token } = useToken();
  const { id } = useParams();
  const isEditMode = !!id; // If there's an ID in params, we're in edit mode

  // Create enhanced formProps with date transformation
  const enhancedFormProps = {
    ...formProps,
    onFinish: (values: Record<string, unknown>) => {
      // Transform dayjs objects to ISO strings for backend
      const transformedValues = { ...values };

      if (
        transformedValues.inspectionDueDate &&
        dayjs.isDayjs(transformedValues.inspectionDueDate)
      ) {
        transformedValues.inspectionDueDate =
          transformedValues.inspectionDueDate.toISOString();
      }

      if (
        transformedValues.lastInspectionDate &&
        dayjs.isDayjs(transformedValues.lastInspectionDate)
      ) {
        transformedValues.lastInspectionDate =
          transformedValues.lastInspectionDate.toISOString();
      }

      // Call the original onFinish with transformed values
      return formProps.onFinish?.(transformedValues);
    }
  };

  // Debug: Log initial values to see what we're getting
  useEffect(() => {
    if (formProps?.initialValues && isEditMode) {
      console.log(
        "VesselForm received initial values:",
        formProps.initialValues
      );
    }
  }, [formProps?.initialValues, isEditMode]);

  // Modal state for changing IMO Number
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalForm] = Form.useForm();

  // Custom mutation for changing vessel identifiers
  const { mutate: changeIdentifiers, mutation: changeIdentifiersMutation } =
    useCustomMutation();

  // Handle modal form submission
  const handleModalSubmit = async () => {
    try {
      const values = await modalForm.validateFields();
      changeIdentifiers(
        {
          url: `vessels/${id}/identifiers`,
          method: "patch",
          values: {
            imoNumber: values.imoNumber,
            reason: values.reason
          }
        },
        {
          onSuccess: () => {
            message.success("IMO Number updated successfully");
            setIsModalVisible(false);
            modalForm.resetFields();
            // Refresh the form data
            window.location.reload();
          },
          onError: (error) => {
            message.error("Failed to update IMO Number");
            console.error("Error updating IMO:", error);
          }
        }
      );
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Form {...enhancedFormProps} layout="vertical">
      <Row gutter={24}>
        {/* Left Column */}
        <Col xs={24} md={12}>
          <Form.Item
            label="Ship Name"
            name="name"
            rules={[{ required: true, message: "Ship name is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="IMO Number"
            name="imoNumber"
            rules={[{ required: true, message: "IMO Number is required" }]}
          >
            <Input
              suffix={
                isEditMode ? (
                  <Button
                    type="text"
                    size="small"
                    icon={<EditOutlined />}
                    onClick={() => setIsModalVisible(true)}
                    title="Change IMO Number"
                    style={{
                      padding: "0 6px",
                      backgroundColor: token.colorPrimaryBg,
                      border: `1px solid ${token.colorPrimaryBorder}`,
                      borderRadius: token.borderRadius,
                      color: token.colorPrimary,
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        token.colorPrimaryBgHover;
                      e.currentTarget.style.borderColor =
                        token.colorPrimaryBorderHover;
                      e.currentTarget.style.color = token.colorPrimaryHover;
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        token.colorPrimaryBg;
                      e.currentTarget.style.borderColor =
                        token.colorPrimaryBorder;
                      e.currentTarget.style.color = token.colorPrimary;
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                ) : null
              }
            />
          </Form.Item>

          <Form.Item label="Company Name" name="companyName">
            <Input />
          </Form.Item>

          <Form.Item label="Home Port" name="homePort">
            <Input />
          </Form.Item>

          <Form.Item
            label="Vessel Type"
            name="vesselType"
            rules={[{ required: true, message: "Vessel type is required" }]}
          >
            <Select
              showSearch
              placeholder="Select vessel type"
              options={vesselTypeOptions}
            />
          </Form.Item>

          <Form.Item label="Engine Make" name="engineMake">
            <Select
              showSearch
              placeholder="Select engine make"
              options={engineMakeOptions}
            />
          </Form.Item>

          <Form.Item label="Tonnage Unit" name="tonnageUnit">
            <Select
              showSearch
              placeholder="Select tonnage unit"
              options={tonnageUnitOptions}
            />
          </Form.Item>

          <Form.Item label="Flag" name="flag">
            <Input />
          </Form.Item>
        </Col>

        {/* Right Column */}
        <Col xs={24} md={12}>
          <Form.Item label="Tonnage Value" name="tonnageValue">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Year Built"
            name="yearBuilt"
            tooltip="Year the vessel was built (e.g., 2015)"
          >
            <InputNumber
              style={{ width: "100%" }}
              min={1800}
              max={new Date().getFullYear() + 2}
              placeholder="e.g., 2015"
              formatter={(value) => (value ? `${value}` : "")}
              parser={(value) =>
                value ? parseInt(value.replace(/\D/g, ""), 10) : 0
              }
            />
          </Form.Item>

          <Form.Item label="Capacity" name="capacity">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="GRT" name="grt">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="DWT" name="dwt">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="BHP / KW" name="bhpKw">
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="UMS" name="ums" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item
            label="Last Inspection Date"
            name="lastInspectionDate"
            tooltip="When the vessel was last inspected"
          >
            <DatePicker
              style={{ width: "100%" }}
              placeholder="Select last inspection date"
              format="YYYY-MM-DD"
            />
          </Form.Item>

          <Form.Item
            label="Inspection Due Date"
            name="inspectionDueDate"
            tooltip="When the next vessel inspection is due"
          >
            <DatePicker
              style={{ width: "100%" }}
              placeholder="Select inspection due date"
              format="YYYY-MM-DD"
            />
          </Form.Item>
        </Col>
      </Row>

      {/* Modal for changing IMO Number */}
      <Modal
        title="Change IMO Number"
        open={isModalVisible}
        onOk={handleModalSubmit}
        onCancel={() => {
          setIsModalVisible(false);
          modalForm.resetFields();
        }}
        confirmLoading={changeIdentifiersMutation.isPending}
        okText="Update IMO Number"
        cancelText="Cancel"
      >
        <Form form={modalForm} layout="vertical">
          <Form.Item
            label="New IMO Number"
            name="imoNumber"
            rules={[
              { required: true, message: "IMO Number is required" },
              {
                pattern: /^IMO\d{7}$/,
                message: "IMO Number must be in format IMO1234567"
              }
            ]}
          >
            <Input placeholder="IMO1234567" />
          </Form.Item>

          <Form.Item
            label="Reason for Change"
            name="reason"
            rules={[
              { required: true, message: "Reason is required for audit trail" },
              { min: 10, message: "Reason must be at least 10 characters" }
            ]}
          >
            <Input.TextArea
              rows={3}
              placeholder="Please provide a detailed reason for changing the IMO Number..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </Form>
  );
};
