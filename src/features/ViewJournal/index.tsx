import { Box, Flex } from "@chakra-ui/layout";
import { Button, IconButton } from "@chakra-ui/button";
import { CalendarIcon } from "@chakra-ui/icons";
import Lottie from "react-lottie";
import data from "./lottie/journal.json";

function ViewJournal() {
  return (
    <Flex height="100%" flexFlow="column">
      <Lottie
        style={{height: 300}}
        options={{ loop: true, autoplay: true, animationData: data }}
      ></Lottie>
      <Button
        mt={20}
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
