import { Flex, Text } from '@mantine/core';

const LoadingData = () => (
  <div className="w-full min-h-[100px] h-full bg-white bg-opacity-70 absolute z-10">
    <Flex align="center" justify="center" className="h-full">
      <Text fw={300}>Loading...</Text>
    </Flex>
  </div>
);

export default LoadingData;
