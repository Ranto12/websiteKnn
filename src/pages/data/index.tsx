import { Button, Flex, Input } from "@mantine/core"

const Data = () => {
  return (
    <div className="w-full px-56 flex justify-between">
        <Flex gap={10} justify="end" className="w-full">
          <Input placeholder="Nama Tanaman atau Hama" w={400} className="rounded-lg" />
          <Button variant="filled" bg="blue">TAMBAHKAN DATA</Button>
        </Flex>
    </div>
  )
}

export default Data