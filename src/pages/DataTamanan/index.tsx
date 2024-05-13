import { Button, Flex, Input } from "@mantine/core";
import Table from "../../component/molecules/Table";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { coloumntable } from "./utils";

const Data = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('');

  const fetchData = async (page: number, searchData: string = '') => {
    const url = `http://localhost:5000/getAllDataTanaman?limit=10&offset=${page}&search=${searchData}`
    setLoading(true)
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setData(response.data);
      setLoading(false)
    } catch (error: any) {
        setLoading(false)
      toast.error('Error fetching data:', error);
    }
  };
  useEffect(()  => {
    fetchData(0, search);
  },[search])
  return (
    <div className="w-full ">
      <Flex gap={10} justify="end" className="w-full" mb={25}>
        <Input
          placeholder="Nama Tanaman atau Hama"
          w={400}
          className="rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="filled" bg="blue">
          TAMBAHKAN DATA
        </Button>
      </Flex>
      <Table
        keyId="data"
        isLoading={loading}
        data={data?.data}
        columns={coloumntable}
        totalData={data?.totalData}
        onFetchData={(page) => fetchData((page-1) * 10, search) }
      />
    </div>
  );
};

export default Data;
