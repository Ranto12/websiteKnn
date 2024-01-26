import { Flex, Tabs, Text } from "@mantine/core";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Data, Rekomendasi } from "../../pages";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Flex justify="center" mb={50}>
        <Tabs defaultValue={pathname}>
          <Tabs.List>
            <NavLink to={"/"}>
              <Tabs.Tab value="/">
                <Text size="xl" className="font-medium">
                  Rekomendasi
                </Text>
              </Tabs.Tab>
            </NavLink>
            <NavLink to={"/data"}>
              <Tabs.Tab value="/data">
                <Text size="xl" className="font-medium">
                  Data
                </Text>
              </Tabs.Tab>
            </NavLink>
          </Tabs.List>
        </Tabs>
      </Flex>
      <Routes>
        <Route path="/" element={<Rekomendasi />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
};

export default Layout;
