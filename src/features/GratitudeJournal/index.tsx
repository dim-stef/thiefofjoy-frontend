import { Box, Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import GratitudeNoteCreator from "../GratitudeNoteCreator";

function GratitudeJournal() {
  const exampleGratitude = [
    {
      id: 0,
      placeholder: 'Early, quiet mornings before anyone is awake.',
      body: ''
    },
    {
      id: 1,
      placeholder: 'My health.',
      body: ''
    },
    {
      id: 2,
      placeholder: 'Coffee.',
      body: ''
    },
  ]

  return (
    <Flex flexFlow="column" justifyContent="center" alignItems="center">
      <Heading as="h1" fontSize="6xl">
        Gratitude journal
      </Heading>
      <Heading
        as="p"
        fontSize="3xl"
        maxW="550px"
        mb={10}
        textAlign="center"
        color="gray.700"
      >
        A gratitude journal is, quite simply, a tool to keep track of the good
        things in life. No matter how difficult and defeating life can sometimes
        feel, there is always something to feel grateful for.
      </Heading>
      <GratitudeNoteCreator exampleNotes={exampleGratitude}/>
    </Flex>
  );
}

export default GratitudeJournal;
