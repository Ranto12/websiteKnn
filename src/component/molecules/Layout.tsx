import { Flex, Tabs, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Flex justify="center">
        <Tabs defaultValue="gallery" onClick={(e) => nav}>
          <Tabs.List>
            <NavLink to={"/"}>
              <Tabs.Tab value="gallery">
                <Text size="xl" className="font-medium">
                  Rekomendasi
                </Text>
              </Tabs.Tab>
            </NavLink>
            <NavLink to={"/data"}>
              <Tabs.Tab value="messages">
                <Text size="xl" className="font-medium">
                  Data
                </Text>
              </Tabs.Tab>
            </NavLink>
          </Tabs.List>
        </Tabs>
      </Flex>
    </>
  );
};

export default Layout;
