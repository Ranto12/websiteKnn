import { Table } from "@mantine/core";

interface ITableProps {
    keyId: string;
    data?: any[];
    columns: any[];
    totalData?: number,
    perPage?: number;
    isLoading?: boolean;
    showPagination?: boolean;
    classNameContainer?: React.ComponentProps<'table'>['className'];
    rowClickHandler?: (row: any, index: number) => void;
    onFetchData?: (currentPage: number) => void,
    searchData?: String,
    showHeadTable?: boolean,
  }

const TableComponent = ({columns, data}:  ITableProps) => {      
      const rows = data?.map((element, i) => (
        <Table.Tr className="font-medium" key={i}>
          {columns.map((_item) => (
            <Table.Td key={_item.id}>
              {element[_item.accesor]}
            </Table.Td>
          ))}
        </Table.Tr>
      ));
      const TheadTable = columns.map((_content) => (
        <Table.Th key={_content.id} align={'left'}>{_content.label}</Table.Th>
      ))
  return (
    <>
      <Table withTableBorder highlightOnHover verticalSpacing="md">
        <Table.Thead className="bg-[#ccbfbf]">
          <Table.Tr>
           {TheadTable}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default TableComponent;
