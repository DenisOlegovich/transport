import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Link,
  GridItem,
  Image,
} from "@chakra-ui/react";
import Validaor from "./Images/Validator.png";
function Card(props: any) {
  return (
    <Box
      p="18px 20px"
      borderRadius="0.8rem"
      position="relative"
      cursor="pointer"
      color={props.color}
      bg={props.bg}
      h="100%"
      _hover={{
        boxShadow: "0 4px 10px rgba(0,0,0,.05)",
        transition: "box-shadow .15s linear 0s",
      }}
    >
      <Box>
        <Text fontSize="17px">{props.text}</Text>
        <Text fontSize="16px">{props.description}</Text>
      </Box>
    </Box>
  );
}
export default Card;
