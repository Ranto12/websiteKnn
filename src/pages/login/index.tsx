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
  IconTrees,
  IconUser,
} from "@tabler/icons-react";
import { Form, FormikProvider, useFormik } from "formik";
import { InputFormik } from "../../component/core";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [value, setValue] = useState("login");
  const data = [
    { value: "login", label: "Login" },
    { value: "register", label: "Register" },
  ];

  const HandleLogin = async (data: any) => {
    const url = 'http://localhost:5000/login'
    try {
      const result = await axios.post(url, data);
      toast.success(result.data.message)
      localStorage.setItem('token', result.data.token);
    } catch (error: any) {
      if (error.response) {
        console.error('Gagal, respons data:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        console.error('Gagal, tidak ada respon dari server:', error.request);
      } else {
        console.error('Gagal:', error.message);
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {
      HandleLogin(value);
    },
  });
  const DataForm = [
    {
      value: "login",
      data: [
        {
          name: "username",
          icons: <IconUser />,
          placholder: "userName",
          type: "text",
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
          <Flex direction="column" justify="center" align="center">
            <IconTrees />
            <Text size="xl" fw={600}>
              {value === 'login'  ? 'Masuk' : 'Daftar'}
            </Text>
          </Flex>
          <SegmentedControl
          size="md"
            data={data}
            value={value}
            onChange={setValue}
          />
          <Box maw={500} mx="auto" w={500} px={10}>
            <Flex direction="column" gap="xl">
              {DataForm[value === 'login'? 0 : 1].data.map((_menu) => (
                <InputFormik
                  leftSection={_menu.icons}
                  placeholder={_menu.placholder}
                  name={_menu.name}
                  type={_menu.type}
                  required
                />
              ))}
              <Group justify="center" mt="xl">
                  <Button type="submit" variant="outline">
                    {value === 'login'  ? 'Masuk' : 'Daftar'}
                  </Button>
                </Group>
                <Text className="cursor-pointer" hidden={value === 'register'} variant="text" onClick={() => setValue('register')} fw={400}>
                  Belum Punya Akun?
                  {"  "}
                  <span className="text-green-500">Daftar sekarang</span>
                </Text>
            </Flex>
          </Box>
        </Flex>
      </Form>
    </FormikProvider>
  );
};

export default Login;
