import { Box, Center, useRadio } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  console.log(typeof props.children);
  return (
    <Box as="label">
      <input {...input} />
      <Center
        {...checkbox}
        cursor="pointer"
        borderRadius="0.5rem"
        h="45px"
        p="10px 20px"
        _checked={{
          bg: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,.05);",
          borderColor: "white",
          outline: "none",
        }}
        _focus={{
          borderColor: "white",
        }}
      >
        {props.children}
      </Center>
    </Box>
  );
}
export default RadioCard;
