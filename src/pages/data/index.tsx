import { Button, Flex, Input } from "@mantine/core";
import { DataNew, coloumntable } from "./utils";
import Table from "../../component/molecules/Table";

const Data = () => {
  return (
    <div className="w-full ">
      <Flex gap={10} justify="end" className="w-full" mb={25}>
        <Input
          placeholder="Nama Tanaman atau Hama"
          w={400}
          className="rounded-lg"
        />
        <Button variant="filled" bg="blue">
          TAMBAHKAN DATA
        </Button>
      </Flex>
      <Table
        keyId="data"
        data={DataNew}
        columns={coloumntable}
        totalData={32}
      />
    </div>
  );
};

export default Data;
