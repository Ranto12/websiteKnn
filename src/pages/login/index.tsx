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
  IconAddressBook,
  IconLock,
  IconMail,
  IconTrees,
  IconUser,
} from "@tabler/icons-react";
import { Form, FormikProvider, useFormik } from "formik";
import { InputFormik } from "../../component/core";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState("login");
  const navigate = useNavigate();
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
      navigate('/')
    } catch (error: any) {
     toast.error(error.message)
    }
  }
  const HandleRegistration = async (data: any) => {
    const url = 'http://localhost:5000/register'
    try {
      const result = await axios.post(url, data);
      toast.success(result.data.message)
      navigate('/login')
      setValue('login')
    } catch (error: any) {
     toast.error(error.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      username:'', password:'', confPassword:'', email:'', full_name:'', address:'',
    },
    onSubmit: () => {
      if (value === 'login') {
        HandleLogin(formik.values);
      } else {
        HandleRegistration(formik.values)
      }
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
          name: "full_name",
          icons: <IconUser />,
          placholder: "Nama Lengkap",
          type: "text",
        },
        {
          name: "username",
          icons: <IconUser />,
          placholder: "Username",
          type: "text",
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
        {
          name: "address",
          icons: <IconAddressBook />,
          placholder: "Alamat",
          type: "text",
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
