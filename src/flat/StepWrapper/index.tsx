import { Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { StepWrapperProps } from "./interface";
import { nextStep, previousStep } from "../../features/Progress/progressSlice";

function StepWrapper({ children }: StepWrapperProps) {
  const dispatch = useDispatch();

  function handleNextClick() {
    dispatch(nextStep());
  }

  function handlePreviousClick() {
    dispatch(previousStep());
  }

  return (
    <Flex
      flexFlow="column"
      w="100%"
      minW="500px"
      maxW="500px"
      alignItems="center"
    >
      <Flex justifyContent="space-between" w="100%" mb={10}>
        <IconButton
          onClick={handlePreviousClick}
          aria-label="Back"
          variant="transparent"
          icon={<ArrowBackIcon />}
        />
        <Button onClick={handleNextClick}>Skip</Button>
      </Flex>
      {children}
      <Button
        colorScheme="teal"
        variant="solid"
        mt="50px"
        justifyContent="center"
        spacing="6"
        size="lg"
        w="100px"
        onClick={handleNextClick}
      >
        Done
      </Button>
    </Flex>
  );
}

export default StepWrapper;
