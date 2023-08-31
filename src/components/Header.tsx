import { Container, Flex, useMediaQuery, Box } from "@chakra-ui/react";
// import LogoMT from "./Images/LogoMT";

function Header() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container fontFamily="heading" maxW="1280px" m="0 auto">
       
      <Flex
        m="0px 20px"
        align-items="center"
        justifyContent={isSmallerThan800 ? "center" : "space-between"}
        align="center"
        h="70px"
      >
        <Flex align="center">
          {/* <LogoMT /> */}
          <Box paddingLeft="10px">Департамент транспорта г. Москвы</Box>
        </Flex>
        <Box>Карта Тройка № 456 876 778 | Выход</Box>
      </Flex>
    </Container>
  );
}
export default Header;