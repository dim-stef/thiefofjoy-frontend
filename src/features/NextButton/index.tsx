import { IconButton } from "@chakra-ui/react"
import { ArrowLeftIcon } from "@chakra-ui/icons";

function NextButton({onClick}: any){
  return(
    <IconButton
      onClick={onClick}
      colorScheme="teal"
      aria-label="Next"
      icon={<ArrowLeftIcon />}
    />
  )
}

export default NextButton;
