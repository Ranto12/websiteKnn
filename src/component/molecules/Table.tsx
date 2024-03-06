import React, { useState, useEffect } from 'react';
import { Flex, Text } from '@mantine/core';
import TablePagination from '../core/Pagination/Table';


interface ITableProps {
  /** Field of data for the key of the row */
  keyId: string;
  /**
   * The data array that you want to display on the table
   *  - id: string = required because it is the key for each row
   *  - disabled: boolean = to disable the row
   *  - ...you can enter any field you want
   * */
  data?: any[];
  /**
   * The core columns configuration object for the entire table
   *  - id: string = required because it is the key for each row
   *  - header: string = header for the column
   *  - accessor: string = as a pointer to the data. for example, if filled in "category_name" it will display the value of the key "category_name" in the data props.
   *  - justify: string = position of content in cell. for example center, flex-end, etc.
   *  - tdClassName: string = add class to td element
   *  - cell: functional component = if you need to return a component in a cell
   *  - headJustify: string = position of content in head cell. for example center, flex-end, etc.
   *  - headCell: functional component = if you need to return a component in a head cell
   * */
  columns: any[];
  /** Total of all data */
  totalData?: number,
  /** Amount of data per page */
  perPage?: number;
  /** Display loading status */
  isLoading?: boolean;
  /** Option to display pagination or not */
  showPagination?: boolean;
  /** Set the classname attribute on the container table */
  classNameContainer?: React.ComponentProps<'table'>['className'];
  /** Function handle when the row is clicked */
  rowClickHandler?: (row: any, index: number) => void;
  /** Function handle to fetch data when switching pages in pagination */
  onFetchData?: (currentPage: number) => void,
  /** Function to reset page number when user search data */
  searchData?: String,
  showHeadTable?: boolean,
}

const getValueByPath = (object: any, path: string) => {
  const keys = path.split('.');
  let value = object;
  keys.forEach((key) => {
    if (value && typeof value === 'object') {
      value = value[key];
    } else {
      value = undefined;
    }
  });
  return value;
};

const Table: React.FC<ITableProps> = ({
  keyId,
  data = [],
  columns,
  totalData = 0,
  perPage = 10,
  isLoading,
  showPagination = true,
  classNameContainer,
  rowClickHandler,
  onFetchData,
  searchData,
  showHeadTable = true,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const headRender = () => columns.map((column) => (
    <th key={column.id} className="p-4 border-b border-neutral-30 bg-slate-300">
      <Flex justify={column.headJustify || 'flex-start'}>
        {column.headCell ? (
          column.headCell()
        ) : (
          <Text className="text-[#0A0A0A]">{column?.header}</Text>
        )}
      </Flex>
    </th>
  ));

  const columnRender = (row: any, index: number) => columns.map((column) => (
    <td
      key={column?.id}
      className={`p-4 ${column.tdClassName || ''} ${data.length - 1 === index ? '' : 'border-b border-neutral-30'}`}
    >
      <Flex justify={column.justify || 'flex-start'}>
        {column.cell ? (
          column.cell(row, column)
        ) : (
          <Text >{(column.accessor as string).includes('.') ? getValueByPath(row, column.accessor) : row[column.accessor]}</Text>
        )}
      </Flex>
    </td>
  ));

  const bodyRender = () => data.map((row, index) => (
    <tr
      key={row[keyId]}
      className={`${rowClickHandler ? 'cursor-pointer' : ''} ${row.disabled
        ? 'bg-[#EDEDED] text-[#9E9E9E] !cursor-not-allowed'
        : 'text-[#404040] hover:bg-info-surface'}`}
      onClick={() => (rowClickHandler && !row.disabled ? rowClickHandler(row, index) : {})}
    >
      {columnRender(row, index)}
    </tr>
  ));

  const handleSetPage = (page: number) => {
    setCurrentPage(page);
    if (onFetchData) onFetchData(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchData]);

  return (
    <div className={`relative ${isLoading ? 'min-h-[100px]' : ''} ${classNameContainer}`}>
      {/* {isLoading && <LoadingData />} */}
      <table className="border border-neutral-30 border-separate overflow-hidden text-left border-spacing-0 bg-white w-full rounded-md">
        {showHeadTable && (
        <thead className="bg-neutral-20">
          <tr>
            {headRender()}
          </tr>
        </thead>
        )}
        <tbody>
          {bodyRender()}
        </tbody>
      </table>
      {showPagination && (
        <>
          <div className="bg-neutral-30 w-full h-px my-4" />
          <TablePagination
            currentPage={currentPage}
            perPage={perPage}
            totalData={totalData}
            lengthCurrentPage={data.length}
            isLoading={isLoading}
            handleSetPage={handleSetPage}
          />
        </>
      )}
    </div>
  );
};

export default Table;
