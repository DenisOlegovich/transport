import {
  Container,
  useMediaQuery,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import MainPic from "./Images/MainPic.svg";

function Main() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container bg='#F9F9F9'>
      Московский транспорт
      <Grid
        templateAreas={`"routes pay pay news"
                  "routes max record news"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'>
        <GridItem pl='2' bg='orange.300' area={"routes"}>
          Маршруты
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={"pay"}>
          Оплата проезда
        </GridItem>
        <GridItem pl='2' bg='green.300' area={"news"}>
          Новости
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={"max"}>
          Макс
        </GridItem>
        <GridItem pl='2' bg='orange.300' area={"record"}>
          Запись
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"scheme magistral"
                  "scheme traffic"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'>
        <GridItem pl='2' bg='orange.300' area={"scheme"}>
          Схема
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={"magistral"}>
          Магистраль
        </GridItem>
        <GridItem pl='2' bg='green.300' area={"traffic"}>
          Траффик
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"payParking troika troika schedule"
                  "payParking velo scooter schedule"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'>
        <GridItem pl='2' bg='orange.300' area={"payParking"}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={"troika"}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={"schedule"}>
          Main
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={"velo"}>
          Footer
        </GridItem>
        <GridItem pl='2' bg='orange.300' area={"scooter"}>
          Header
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"mapTruck river evacuated energy"
                  "mapTruck checkTruck checkTruck energy"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'>
        <GridItem pl='2' bg='orange.300' area={"mapTruck"}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={"river"}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={"evacuated"}>
          Main
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={"energy"}>
          Footer
        </GridItem>
        <GridItem pl='2' bg='orange.300' area={"checkTruck"}>
          Header
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"mobile fine text"
                  "mobile found text"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'>
        <GridItem pl='2' bg='orange.300' area={"mobile"}>
          Header
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={"fine"}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={"text"}>
          Main
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={"found"}>
          Footer
        </GridItem>
      </Grid>
    </Container>
  );
}
export default Main;
