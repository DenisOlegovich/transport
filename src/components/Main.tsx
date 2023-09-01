import {
  Container,
  useMediaQuery,
  Image,
  Grid,
  GridItem,
  Box,
  Text,
  Link,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import MainPic from "./Images/MainPic.svg";
import MaxLiksutov from "./Images/MaxLiksutov.jpg";
import MobileParking from "./Images/MobileParking.png";
import Troika from "./Images/Troika.png";
function Main() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container
      bg="#f3f5f7"
      maxW="1610px"
      m="0 auto"
      fontFamily="Moscow Sans,Arial,sans-serif"
      fontSize="17px"
      fontWeight="700"
    >
      Московский транспорт
      <Grid
        templateAreas={`"routes pay pay news"
                  "routes max record news"
                  `}
        gridTemplateRows={"1fr 1fr "}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        minH="480px"
        gap="25px"
        color="blackAlpha.700"
        fontWeight="bold"
        mb="24px"
      >
        <GridItem pl="2" bg="white" area={"routes"}>
          <Box p="1.8rem 2rem">
            <Link href="https://transport.mos.ru/mostrans/build_route">
              Построить маршрут
            </Link>
            <Input placeholder="А откуда" />
            <Input placeholder="Б куда" />
            <Button bg="#da2032" w="100%">
              Построить маршрут
            </Button>
          </Box>
        </GridItem>
        <GridItem
          pl="2"
          bg="#a2a9b1"
          p="18px 20px"
          borderRadius="0.8rem"
          color="white"
          area={"pay"}
        >
          <Box bg="#a2a9b1" w="50%">
            <Text>Оплата проезда</Text>
            <Text>Все что нужно знать о ценах и способах оплаты</Text>
          </Box>
        </GridItem>
        <GridItem
          pl="2"
          bg="white"
          p="18px 20px"
          borderRadius="0.8rem"
          area={"news"}
        >
          <Link fontSize="20px">Новости</Link>
          <Text>
            <Text>1 сентября</Text>
            <Text>
              Мы переведем с автобусов на электробусы маршрут 2, который
              связывает районы Тушино и Митино
            </Text>
          </Text>
          <Text>
            <Text>1 сентября</Text>
            <Text>
              С 20:00 8 сентября до 14:00 11 сентября участок Большого
              Черкасского переулка будет закрыт для проез
            </Text>
          </Text>
          <Text>
            <Text>1 сентября</Text>
            <Text>
              Перекрытия в связи с проведением киносъемок в районе
              Овчинниковской набережной
            </Text>
          </Text>
          <Text>Все новости</Text>
        </GridItem>
        <GridItem pl="2" position="relative" boxSize="border-box" area={"max"}>
          <Box
            bgImage={MaxLiksutov}
            backgroundSize="90%"
            backgroundRepeat="no-repeat"
            h="calc(100% + 3.5rem)"
            position="absolute"
            right="0"
            top="-3.5rem"
            width="23rem"
            display="block"
          >
            <Text>Колонка Максима Ликсутова</Text>
          </Box>
        </GridItem>
        <GridItem
          pl="2"
          bg="#E4000D"
          p="18px 20px"
          color="white"
          area={"record"}
        >
          Запись для получения спецразрешения
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"scheme magistral"
                  "scheme traffic"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="white" p="18px 20px" area={"scheme"}>
          <Flex justifyContent="space-between">
            <Text>Схема метро, МЦК и МЦД</Text>
          </Flex>
        </GridItem>
        <GridItem pl="2" bg="#007dbd" area={"magistral"}>
          Магистраль - новая сеть маршрутов города
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"traffic"}>
          Пробки и перекрытия
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"payParking troika troika schedule"
                  "payParking velo scooter schedule"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="#5ba824" color="white" area={"payParking"}>
          Оплата парковки
          <Image src={MobileParking} />
        </GridItem>
        <GridItem
          pl="2"
          bg="#0da4bf"
          backgroundImage={Troika}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          area={"troika"}
        >
          Пополнение карты Тройка
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"schedule"}>
          Расписание и схемы движения городского транспорта
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"velo"}>
          Велотранспорт
        </GridItem>
        <GridItem pl="2" bg="orange.300" area={"scooter"}>
          Самокаты
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"mapTruck river evacuated energy"
                  "mapTruck checkTruck checkTruck energy"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"mapTruck"}>
          Карта грузового каркаса
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"river"}>
          Речной транспорт
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"evacuated"}>
          Найти эвакуированный автомобиль
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"energy"}>
          Энергия Москвы
        </GridItem>
        <GridItem pl="2" bg="orange.300" area={"checkTruck"}>
          Проверить пропуск для грузового транспорта
        </GridItem>
      </Grid>
      <Grid
        templateAreas={`"mobile fine text"
                  "mobile found text"
                  `}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={"mobile"}>
          Мобильные приложения Расписания транспорта, оплата парковки, вызов
          такси на расстоянии одного клика
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"fine"}>
          Штравы в городском транспорте
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"text"}>
          <Link>Что такое парковочный абонемент и как его получить?</Link>
          <Link>Какие права имеют владельцы резидентных разрешений?</Link>
          <Link>
            Как часто можно менять номер автомобиля в реестре парковочных
            разрешений?
          </Link>
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"found"}>
          Бюро находок Что делать, если забыли вещи в транспорте
        </GridItem>
      </Grid>
    </Container>
  );
}
export default Main;
