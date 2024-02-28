// import { Flex, Tabs, Text } from "@mantine/core";
// import { NavLink, Route, Routes, useLocation } from "react-router-dom";
// import { Data, Rekomendasi } from "../../pages";
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import Sidebar from './Sidebar';

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
  // const { pathname } = useLocation();
  // return (
  //   <>
  //     <Flex justify="center" mb={50}>
  //       <Tabs defaultValue={pathname}>
  //         <Tabs.List>
  //           <NavLink to={"/"}>
  //             <Tabs.Tab value="/">
  //               <Text size="xl" className="font-medium">
  //                 Rekomendasi
  //               </Text>
  //             </Tabs.Tab>
  //           </NavLink>
  //           <NavLink to={"/data"}>
  //             <Tabs.Tab value="/data">
  //               <Text size="xl" className="font-medium">
  //                 Data
  //               </Text>
  //             </Tabs.Tab>
  //           </NavLink>
  //         </Tabs.List>
  //       </Tabs>
  //     </Flex>
  //     <Routes>
  //       <Route path="/" element={<Rekomendasi />} />
  //       <Route path="/data" element={<Data />} />
  //     </Routes>
  //   </>
  // );
};

export default Layout;
