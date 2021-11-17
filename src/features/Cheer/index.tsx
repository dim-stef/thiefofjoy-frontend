import { Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import data from "./lottie/clap.json";

function Cheer() {
  return (
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
  );
}

export default Cheer;
