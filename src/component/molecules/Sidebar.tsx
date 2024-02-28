import { useState } from "react";
import {
  IconBrandDatabricks,
  IconClipboardData,
  IconSpider,
} from "@tabler/icons-react";
import { Box, Flex, NavLink } from "@mantine/core";
import { IconTrees } from "@tabler/icons-react";
import { Link } from "react-router-dom";
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
  const [active, setActive] = useState(0);
  const items = data.map((item, index) => (
    <Link to={item.href} key={item.label} >
      <NavLink
        active={index === active}
        label={item.label}
        leftSection={<item.icon size="1rem" stroke={1.5} />}
        onClick={() => setActive(index)}
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
