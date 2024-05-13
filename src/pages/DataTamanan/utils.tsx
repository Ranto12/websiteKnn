import { Button } from "@mantine/core";

const coloumntable = [
  {
    id: "nama_tanaman",
    header: "nama tanaman",
    accessor: "nama_tanaman",
  },
  {
    id: "action",
    header: "action",
    cell: () => <Button variant="subtle" color="red">Delete</Button>
  },
];

export { coloumntable };
