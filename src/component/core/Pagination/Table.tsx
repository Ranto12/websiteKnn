import { Flex, Text } from '@mantine/core';

import DefaultPagination from './Default';

type TablePaginationProps = {
  /** Amount of data per page */
  perPage?: number;
  /** Current page */
  currentPage?: number;
  /** Total of all data */
  totalData: number;
  /** Length of data in current page */
  lengthCurrentPage?: number;
  /** If loading then can't click pagination */
  isLoading?: boolean;
  /** Function to change the page */
  handleSetPage?: (page: number) => void;
};

const TablePagination = ({
  perPage = 10,
  currentPage = 1,
  totalData,
  lengthCurrentPage = 0,
  isLoading,
  handleSetPage,
}: TablePaginationProps) => {
  const totalPage = Math.ceil(totalData / perPage);

  return (
    <Flex align="center" justify="space-between" className='bg-gray-300 px-3'>
      <Text
        className="text-neutral-40"
      >
        Showing
        {' '}
        <span className="text-blue-900">{lengthCurrentPage}</span>
        {' '}
        from
        {' '}
        <span className="text-blue-900">{totalData}</span>
        {' '}
        data
      </Text>
      <DefaultPagination
        total={totalPage}
        value={currentPage}
        disabled={isLoading}
        onChange={handleSetPage}
      />
    </Flex>
  );
};

export default TablePagination;
