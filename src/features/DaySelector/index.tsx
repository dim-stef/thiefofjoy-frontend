import { Box, Flex, Text } from "@chakra-ui/layout";

function DaySelector() {
  return (
    <Box position="absolute" left="0">
      <Flex>
        <Text>Day 1</Text>
        <Text>Day 2</Text>
        <Text>Day 3</Text>
      </Flex>
    </Box>
  );
}

export default DaySelector;
