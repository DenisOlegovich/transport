import { Box, Text, Image } from "@chakra-ui/react";

interface CardProps {
  text: string;
  description: string;
  bg: string;
  color: string;
  image: string;
  imageH: string;
  imageInset: string;
}
function Card(props: CardProps) {
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
        <Text fontWeight="700">{props.text}</Text>
        <Text fontSize="0.8rem">{props.description}</Text>
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
