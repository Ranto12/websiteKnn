import {
  IconBrandDatabricks,
  IconClipboardData,
  IconSpider,
} from "@tabler/icons-react";
import { Box, Flex, NavLink } from "@mantine/core";
import { IconTrees } from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
const data = [
  { icon: IconClipboardData, label: "Rekomendasi", href: "/" },
  {
    icon: IconBrandDatabricks,
    label: "Data Rekomendasi",
    href: "/dataRekomendasi",
  },
  { icon: IconSpider, label: "Data Hama", href: "/dataHama" },
  { icon: IconTrees, label: "Data Tanaman", href: "/dataTanamn" },
];

const Sidebar = () => {
  let { pathname }: any = useLocation();
  console.log(pathname.split("/"), "ce");
  const items = data.map((item) => (
    <Link to={item.href} key={item.label}>
      <NavLink
        active={`/${pathname.split("/")[1]}` === item.href}
        label={item.label}
        leftSection={<item.icon size="1rem" stroke={1.5} />}
      />
    </Link>
  ));

  return (
    <Box w={220}>
      <Flex direction="column" gap={10}>
        {items}
      </Flex>
    </Box>
  );
};

export default Sidebar;
