import { Button, Flex, Input, Pagination } from "@mantine/core"
import { DataNew, coloumntable } from "./utils";
import TableComponent from "../../component/molecules/Table";

const Data = () => {
  const jos = () => {
    console.log('jancok')
  }
  return (
    <div className="w-full px-56">
        <Flex gap={10} justify="end" className="w-full" mb={25}>
          <Input placeholder="Nama Tanaman atau Hama" w={400} className="rounded-lg" />
          <Button variant="filled" bg="blue">TAMBAHKAN DATA</Button>
        </Flex>
        <TableComponent rowClickHandler={jos} data={DataNew} columns={coloumntable} keyId="data"/> 
        <Pagination total={2} autoContrast color="lime.4" mt={20} />
    </div>
  )
}

export default Data