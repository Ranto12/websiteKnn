import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Layout } from "./component/molecules";
import { Route, Routes } from "react-router-dom";
import { Data, Login, Rekomendasi } from "./pages";

export default function App() {
  return (
    <MantineProvider theme={theme} forceColorScheme="light">
      <Routes>
        <Route path="/login"  element={<Login />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </MantineProvider>
  );
}
