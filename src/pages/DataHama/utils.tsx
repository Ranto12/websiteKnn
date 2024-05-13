import { Button } from "@mantine/core";

const coloumntable = [
  {
    id: "nama_hama",
    header: "Nama Hama",
    accessor: "nama_hama",
  },
  {
    id: "action",
    header: "action",
    cell: () => <Button variant="subtle" color="red">Delete</Button>
  },
];

export { coloumntable };
