import { Create, useForm } from "@refinedev/antd";
import { VesselForm } from "../../components/vessels/VesselForm";

export const VesselCreate = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "vessels",
    action: "create",
    redirect: "list"
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <VesselForm formProps={formProps} />
    </Create>
  );
};
