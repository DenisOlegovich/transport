import { Box, Center, useRadio } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Center
        {...checkbox}
        cursor="pointer"
        boxShadow="md"
        borderRadius="0.5rem"
        h="45px"
        p="10px 25px"
        _checked={{
          p: " 0 25px",
          bg: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,.05);",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      >
        {props.children}
      </Center>
    </Box>
  );
}
export default RadioCard;
