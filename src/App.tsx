import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Layout } from "./component/molecules";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages";
import { Toaster } from "react-hot-toast";
import { PrivateRoute, PrivateRoutelastLogin } from "./route/PrivateRoute";

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <Toaster  position="top-right"/>
      <Routes>
        <Route element={<PrivateRoutelastLogin/>}>
          <Route path="/login"  element={<Login />} />
        </Route>
        <Route element={<PrivateRoute/>}>
          <Route path="*" element={<Layout />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}
