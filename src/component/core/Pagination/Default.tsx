import { Pagination as MantinePagination, PaginationProps } from '@mantine/core';

interface IPaginationProps extends PaginationProps {
  /** Total of all data */
  total: number;
  /** Current page */
  value?: number;
  /** Function to change the page */
  onChange?: (page: number) => void;
}

const DefaultPagination = ({
  total,
  value = 1,
  onChange,
  ...rest
} : IPaginationProps) => (
  <MantinePagination
  className='text-blue-700'
    total={total}
    value={value}
    onChange={onChange}
    classNames={{
      control: 'border-none text-sm font-semibold text-neutral-40 rounded-[5px]',
    }}
    {...rest}
  />
);

export default DefaultPagination;
