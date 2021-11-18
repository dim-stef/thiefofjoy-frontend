import { Text, Heading, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import data from "./lottie/clap.json";

function Cheer() {
  return (
    <Flex flexFlow="column" justifyContent="center" alignItems="center">
      <Heading as="h1" fontSize="6xl">
        Celebrate other people
      </Heading>
      <Heading
        as="p"
        fontSize="3xl"
        maxW="550px"
        mb={10}
        textAlign="center"
        color="gray.700"
      >
        Don’t feel like you’re losing just because someone else is winning.
        Their success has nothing to do with you, so celebrate their success
        sincerely while you keep working toward your own success.
      </Heading>
      <Text>Mash the button to simulate your own claps!</Text>
      <motion.button
        // whileHover={{
        //   scale: 1.2,
        //   transition: { duration: 0.1 },
        // }}
        whileTap={{ scale: 0.6 }}
      >
        <Lottie
          options={{ loop: true, autoplay: true, animationData: data }}
        ></Lottie>
      </motion.button>
    </Flex>
  );
}

export default Cheer;
