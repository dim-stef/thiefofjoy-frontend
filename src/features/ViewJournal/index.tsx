import { Box, Flex } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { CalendarIcon } from "@chakra-ui/icons";

function ViewJournal() {
  return (
    <Flex height="100%" alignItems="center">
      <Button
        leftIcon={<CalendarIcon />}
        size="lg"
        colorScheme="teal"
        variant="solid"
      >
        View Journal
      </Button>
    </Flex>
  );
}

export default ViewJournal;
