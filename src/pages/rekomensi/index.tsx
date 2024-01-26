import { Flex, Input, Pagination, Table } from "@mantine/core";
const elements = [
  {
    name: "padi",
    hama: "ulat, wereng, walang sangit",
  },
  {
    name: "jagung",
    hama: "kutu daun, penggerek tongkol, tikus",
  },
  {
    name: "kacang hijau",
    hama: "kumbang, ulat grayak, kutu putih",
  },
  {
    name: "tomat",
    hama: "belalang, kutu putih, trips",
  },
  {
    name: "terong",
    hama: "kumbang, ulat grayak, kutu putih",
  },
  {
    name: "wortel",
    hama: "lalat buah, ulat grayak, tikus",
  },
  {
    name: "bayam",
    hama: "kutu putih, ulat daun, trips",
  },
  {
    name: "sawi",
    hama: "kutu putih, ulat daun, trips",
  },
  {
    name: "mentimun",
    hama: "belalang, ulat grayak, kutu putih",
  },
  {
    name: "cabai",
    hama: "thrips, ulat daun, tikus",
  },
];
const Rekomendasi = () => {
  const rows = elements.map((element, i) => (
    <Table.Tr className="font-medium " key={element.name}>
      <Table.Td>{i + 1}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.hama}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="w-full px-56 flex justify-between">
      <Flex direction="column" flex={1} pr={20} gap={20}>
        <Input.Wrapper label="Nitrogen (N)">
          <Input placeholder="10" />
        </Input.Wrapper>
        <Input.Wrapper label="Fosfor (P)">
          <Input placeholder="10" />
        </Input.Wrapper>
        <Input.Wrapper label="Kalium (K)">
          <Input placeholder="10" />
        </Input.Wrapper>
        <Input.Wrapper label="Temperature">
          <Input placeholder="10" />
        </Input.Wrapper>
        <Input.Wrapper label="Humidity">
          <Input placeholder="10" />
        </Input.Wrapper>
        <Input.Wrapper label="pH">
          <Input placeholder="10" />
        </Input.Wrapper>
        <Input.Wrapper label="Rainfall">
          <Input placeholder="10" />
        </Input.Wrapper>
      </Flex>
      <Flex direction="column" flex={1} pr={20} gap={20}>
        <Input.Wrapper label="Nilai Hasil">
          <Input placeholder="10" disabled />
        </Input.Wrapper>
        <Input.Wrapper label="Rekomendasi" />
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>No</Table.Th>
              <Table.Th>Tanaman</Table.Th>
              <Table.Th>hama</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <Pagination total={10} autoContrast color="lime.4"  />
      </Flex>
    </div>
  );
};

export default Rekomendasi;
