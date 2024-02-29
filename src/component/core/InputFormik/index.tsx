import { Input } from "@mantine/core";
import { useField } from "formik";

interface Props {
  name: string;
  leftSection?: any;
  placeholder?: string;
  className?: string;
  type?: string;
}

const InputFormik = ({
  name,
  leftSection,
  placeholder,
  className,
  type,
  ...rest
}: Props) => {
  const [field] = useField(name);
  return (
    <Input
      type={type}
      placeholder={placeholder}
      leftSection={leftSection}
      className={className}
      {...field}
      {...rest}
    />
  );
};

export default InputFormik;
