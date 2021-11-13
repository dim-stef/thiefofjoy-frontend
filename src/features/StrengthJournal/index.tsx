import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import StrengthNoteCreator from "../StrengthNoteCreator";

function StrengthJournal() {
  return (
    <Flex flexFlow="column" justifyContent="center" alignItems="center">
      <Heading as="h1" fontSize="6xl">
        Your strengths
      </Heading>
      <Heading
        as="p"
        fontSize="3xl"
        maxW="550px"
        mb={10}
        textAlign="center"
        color="gray.700"
      >
        Try writing down three things you really like about yourself—things you
        can identify as strengths. Don’t just write “good people skills” like
        you’d put on a boring resume. Make them personal!
      </Heading>
      <StrengthNoteCreator />
    </Flex>
  );
}

export default StrengthJournal;
