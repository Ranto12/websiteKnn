import { AppShell, Burger, Button, Flex, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "./Sidebar";
import { IconTrees, IconUserEdit } from "@tabler/icons-react";
import RoutePage from "../../route";
import { useNavigate } from "react-router-dom";
import Token from "../../utils/token";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate()
  const {dataDecode}: any = Token();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Flex justify="space-between" align="center" className="w-full">
            <div>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />
              <div className="hidden md:block">
              <IconTrees size={30} />
              <Text fw="bolder">Rekomendasi</Text>
              </div>
            </div>
            <div>
              <Flex justify="center" align="center" gap={10} >
              <div className="bg-slate-300 px-2 pt-3 rounded-full">
                <IconUserEdit size={30} />
              </div>
              <Flex justify="center" align="center" direction={{ base: 'row', md: 'column' }}>
                <Text fw="bolder" size="sm" className="hidden md:block">{dataDecode?.username}</Text>
                <Button onClick={() => {localStorage.removeItem('token'), navigate('/login')}} variant="light" color="red">Logout</Button>
              </Flex>
              </Flex>
            </div>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Main>
        <RoutePage />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
