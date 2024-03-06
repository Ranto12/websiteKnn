import { Input } from "@mantine/core";
import { useField } from "formik";

interface Props {
  name: string;
  leftSection?: any;
  placeholder?: string;
  className?: string;
  type?: string;
  required?: boolean;
}

const InputFormik = ({
  name,
  leftSection,
  placeholder,
  className,
  type,
  required = false,
  ...rest
}: Props) => {
  const [field] = useField(name);
  return (
    <Input
      type={type}
      placeholder={placeholder}
      leftSection={leftSection}
      className={className}
      required={required}
      {...field}
      {...rest}
    />
  );
};

export default InputFormik;
