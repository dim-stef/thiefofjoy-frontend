import { Flex, VStack, Text } from "@chakra-ui/layout";
import comparisonQuotes from "../../data/quotes/comparison.json";

function RandomQuoteList() {
  // Shuffle array
  const shuffled = comparisonQuotes.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 3);

  return (
    <VStack w="100%" spacing={4} align="stretch">
      {selected.map((quote, i: number) => (
        <Flex flexFlow="column" key={i} p={3} backgroundColor="#edf2f669">
          <Text as="q" fontStyle="italic" size="xl">{quote.body}</Text>
          <Flex mt={5}>
          {quote.source_title ? (
            <Text fontSize="sm" color="#171923">
              - {quote.person}, {quote.source_title}
            </Text>
          ) : (
            <Text fontSize="sm">- {quote.person}</Text>
          )}
          </Flex>
        </Flex>
      ))}
    </VStack>
  );
}

export default RandomQuoteList;
