import { Flex, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { StepWrapperProps } from "./interface";
import { nextStep, previousStep } from "../../features/Progress/progressSlice";

function StepWrapper({ children, final, noBack = false }: StepWrapperProps) {
  const { step } = useSelector((state: RootState) => state.progress);
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
      height="100%"
    >
      <Flex justifyContent="space-between" w="100%" mb={10}>
        {step != 0 && !noBack && (
          <IconButton
            onClick={handlePreviousClick}
            aria-label="Back"
            variant="transparent"
            icon={<ArrowBackIcon />}
          />
        )}
        <Box flex="1"></Box>

        {!noBack && <Button onClick={handleNextClick}>Skip</Button>}
      </Flex>
      {children}
      {!final && (
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
      )}
    </Flex>
  );
}

export default StepWrapper;
