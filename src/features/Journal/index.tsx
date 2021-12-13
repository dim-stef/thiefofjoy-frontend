import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/layout";
import journal_data from "./data/journal_data.json";
import { JournalItemProps } from "./interface";
import useGetGratitudeNotes from "./api/useGetGratitudeNotes";

function Journal() {
  const gratitudeNotes = useGetGratitudeNotes();
  
  return (
    <VStack w="100%" spacing={10} align="stretch">
      <Flex flexFlow="column">
        {journal_data.map((data) => {
          const date = new Date(data.date);
          return (
            <Flex flexFlow="column" key={data.date} mb={10}>
              <Heading as="h1" size="3xl">
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Heading>
              <Heading as="h2" mt={5} color="#585858">🙏 Gratitudes</Heading>
              <List>
                {gratitudeNotes.data?.map((gratitude, i) => (
                  <JournalItem key={i} body={gratitude.body}/>
                  ))}
              </List>
              <Heading as="h2" mt={5} color="#585858">💪 Strengths</Heading>
              <List>
                {data.strengths.map((strength, i) => (
                  <JournalItem key={i} body={strength.body}/>
                ))}
              </List>
            </Flex>
          );
        })}
      </Flex>
    </VStack>
  );
}

function JournalItem({body, key}: JournalItemProps){
  return(
    <Box backgroundColor="#edf2f669" p={3} mt={1} key={key}>
      <ListItem>{body}</ListItem>
    </Box>
  )
}

export default Journal;
