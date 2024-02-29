import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Group,
  SegmentedControl,
  Text,
} from "@mantine/core";
import {
  IconDeviceMobile,
  IconLock,
  IconMail,
  IconUser,
} from "@tabler/icons-react";
import { Form, FormikProvider, useFormik } from "formik";
import { InputFormik } from "../../component/core";

const Login = () => {
  const [value, setValue] = useState("login");
  const data = [
    { value: "login", label: "Login" },
    { value: "register", label: "Register" },
  ];
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const DataForm = [
    {
      value: "login",
      data: [
        {
          name: "email",
          icons: <IconUser />,
          placholder: "Email",
          type: "email",
        },
        {
          name: "password",
          icons: <IconLock />,
          placholder: "Password",
          type: "password",
        },
      ],
    },
    {
      value: "register",
      data: [
        {
          name: "name",
          icons: <IconUser />,
          placholder: "Nama Lengkap",
          type: "text",
        },
        {
          name: "hp",
          icons: <IconDeviceMobile />,
          placholder: "Nomor Handphone",
          type: "number",
        },
        {
          name: "email",
          icons: <IconMail />,
          placholder: "Email",
          type: "email",
        },
        {
          name: "password",
          icons: <IconLock />,
          placholder: "Password",
          type: "password",
        },
        {
          name: "confPassword",
          icons: <IconLock />,
          placholder: "Ulangi Password",
          type: "password",
        },
      ],
    },
  ];
  return (
    <FormikProvider value={formik}>
      <Form>
        <Flex
          className="h-screen"
          direction="column"
          gap={30}
          justify="center"
          align="center"
        >
          <SegmentedControl
            data={data}
            value={value}
            onChange={setValue}
            // onClick={(e: any) => navigate(e.target.value) }
          />
          <Box maw={500} mx="auto" w={500} px={10}>
            <Flex direction="column" gap="xl">
              {DataForm[value === 'login'? 0 : 1].data.map((_menu) => (
                <InputFormik
                  leftSection={_menu.icons}
                  placeholder={_menu.placholder}
                  name={_menu.name}
                  type={_menu.type}
                />
              ))}
              <Group justify="center" mt="xl">
                  <Button type="submit" variant="outline">
                    {value === 'login'  ? 'Masuk' : 'Daftar'}
                  </Button>
                </Group>
                <Text variant="text" fw={500}>
                  Belum Punya Akun?
                  {"  "}
                  <span>Daftar sekarang</span>
                </Text>
            </Flex>
          </Box>
        </Flex>
      </Form>
    </FormikProvider>
  );
};

export default Login;
