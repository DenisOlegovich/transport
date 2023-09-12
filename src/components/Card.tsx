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
      lineHeight="1.2"
      _hover={{
        boxShadow: "0 4px 10px rgba(0,0,0,.15)",
        transition: "box-shadow .15s linear 0s",
      }}
    >
      <Box maxW="50%">
        <Text fontSize="17px" fontWeight="700">
          {props.text}
        </Text>
        <Text fontSize="16px">{props.description}</Text>
      </Box>
      <Image
        src={props.image}
        position="absolute"
        h={props.imageH}
        inset={props.imageInset}
      />
    </Box>
  );
}
export default Card;
