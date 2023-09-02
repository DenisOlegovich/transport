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
  Center,
} from "@chakra-ui/react";
import MainPic from "./Images/MainPic.svg";
import MaxLiksutov from "./Images/MaxLiksutov.jpg";
import MobileParking from "./Images/MobileParking.png";
import Troika from "./Images/Troika.png";
import MetroLogo from "./Images/MetroLogo.svg";
import MetroMap from "./Images/MetroMap.jpg";
import CoddLogo from "./Images/CoddLogo.svg";
import Probki from "./Images/Probki.jpg";
import Electrobus from "./Images/Electrobus.jpg";
import Velo from "./Images/Velo.svg";
import Scooter from "./Images/Scooter.svg";
import CargoMap from "./Images/CargoMap.jpg";
import River from "./Images/River.svg";
import EvacuatedAvto from "./Images/EvacuatedAvto.svg";
import ElectroAvtoMap from "./Images/ElectroAvtoMap.png";
import CargoPass from "./Images/CargoPass.svg";
import AppsIllustration from "./Images/AppsIllustration.png";
import Controller from "./Images/Controller.png";
import Bear from "./Images/Bear.png";
import Validaor from "./Images/Validator.png";
function Main() {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  let news = [
    {
      date: "1 сентября",
      description:
        "Мы переведем с автобусов на электробусы маршрут 2, который связывает районы Тушино и Митино",
    },
    {
      date: "1 сентября",
      description:
        "С 20:00 8 сентября до 14:00 11 сентября участок Большого Черкасского переулка будет закрыт для проезда",
    },
    {
      date: "1 сентября",
      description:
        "Перекрытия в связи с проведением киносъемок в районе Овчинниковской набережной",
    },
  ];
  return (
    <Container
      bg="#f3f5f7"
      fontFamily="Moscow Sans,Arial,sans-serif"
      fontSize="17px"
      fontWeight="700"
      h="100vh"
    >
      <Box maxW="1610px" m="0 auto">
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
          <GridItem pl="2" bg="white" area={"routes"} borderRadius="0.8rem">
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
            position="relative"
          >
            <Box bg="#a2a9b1" w="50%">
              <Text fontSize="20px">Оплата проезда</Text>
              <Text fontSize="16px">
                Все что нужно знать о ценах и способах оплаты
              </Text>
            </Box>
            <Image
              src={Validaor}
              position="absolute"
              h="calc(100% + 12px)!important;"
              bottom="0px"
              right="0px"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="white"
            p="18px 20px"
            borderRadius="0.8rem"
            area={"news"}
          >
            <Box mb="24px">
              <Link fontSize="20px">Новости</Link>
            </Box>
            {news.map((item, index) => (
              <Box mb="2.4rem">
                <Text>
                  <Text fontSize="12px" color="#666f78">
                    {item.date}
                  </Text>
                  <Text fontSize="16px" lineHeight="1.2">
                    {item.description}
                  </Text>
                </Text>
              </Box>
            ))}

            <Text>Все новости</Text>
          </GridItem>
          <GridItem
            pl="2"
            position="relative"
            bg="#87addf"
            area={"max"}
            borderRadius="0.8rem"
            p="18px 20px 0px"
            color="white"
            fontSize="20px"
          >
            <Box
              h="100%"
              backgroundImage={MaxLiksutov}
              backgroundSize="60%"
              backgroundRepeat="no-repeat"
              backgroundPosition="right bottom"
            >
              Колонка Максима Ликсутова
            </Box>
            {/* <Image
              src={MaxLiksutov}
              position="absolute"
              h="80%"
              bottom="0px"
              right="0px"
            /> */}
          </GridItem>
          <GridItem
            pl="2"
            bg="#E4000D"
            p="18px 20px"
            color="white"
            area={"record"}
            borderRadius="0.8rem"
            fontSize="20px"
          >
            Запись для получения спецразрешения
          </GridItem>
        </Grid>
        <Grid
          templateAreas={`"scheme magistral"
                  "scheme traffic"
                  `}
          gridTemplateRows={"1fr 1fr"}
          gridTemplateColumns={"2fr 1fr"}
          minH="407px"
          color="blackAlpha.700"
          fontWeight="bold"
          gap="25px"
          mb="24px"
        >
          <GridItem
            pl="2"
            bg="white"
            p="18px 20px"
            area={"scheme"}
            backgroundImage={MetroMap}
            backgroundPosition="center -3rem"
            backgroundSize="90rem"
            borderRadius="0.8rem"
          >
            <Flex justifyContent="space-between">
              <Text>Схема метро, МЦК и МЦД</Text>
              <Image src={MetroLogo} w="43px" h="32px" />
            </Flex>
          </GridItem>
          <GridItem
            pl="2"
            bg="#007dbd"
            p="18px 20px"
            color="white"
            area={"magistral"}
            borderRadius="0.8rem"
          >
            Магистраль - новая сеть маршрутов города
          </GridItem>
          <GridItem
            pl="2"
            area={"traffic"}
            backgroundImage={Probki}
            backgroundPosition="0 0"
            backgroundSize="66rem"
            borderRadius="0.8rem"
          >
            <Center
              fontSize="20px"
              justifyContent="space-between"
              bg="white"
              borderRadius="0.8rem"
              borderBottomRadius="30%"
              minH="72px"
              p="20px 20px 20px"
            >
              <Text mb="4px">Пробки и перекрытия</Text>
              <Image src={CoddLogo} w="33px" h="54px" />
            </Center>
          </GridItem>
        </Grid>
        <Grid
          templateAreas={`"payParking troika troika schedule"
                  "payParking velo scooter schedule"
                  `}
          gridTemplateRows={"1fr 1fr"}
          gridTemplateColumns={"1fr 0.5fr 0.5fr 2fr"}
          minH="407px"
          gap="24px"
          color="blackAlpha.700"
          fontWeight="bold"
          mb="24px"
        >
          <GridItem
            pl="2"
            bg="#5ba824"
            color="white"
            area={"payParking"}
            position="relative"
            borderRadius="0.8rem"
          >
            <Text p="18px 20px">Оплата парковки</Text>

            <Image
              src={MobileParking}
              position="absolute"
              bottom="0px"
              right="-1rem"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="#0da4bf"
            backgroundImage={Troika}
            backgroundSize="17rem"
            backgroundRepeat="no-repeat"
            backgroundPosition="center bottom"
            area={"troika"}
            color="white"
            p="18px 20px"
            borderRadius="0.8rem"
          >
            Пополнение карты «Тройка»
          </GridItem>
          <GridItem
            pl="2"
            bg="#007dbd"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            backgroundImage={Electrobus}
            backgroundSize="100%!important"
            backgroundPosition="center"
            area={"schedule"}
          >
            Расписание и схемы движения городского транспорта
          </GridItem>
          <GridItem
            pl="2"
            bg="#ff6b00"
            p="18px 20px"
            borderRadius="0.8rem"
            position="relative"
            area={"velo"}
          >
            Велотранспорт
            <Image
              src={Velo}
              w="100px"
              h="62px"
              position="absolute"
              bottom="20px"
              right="20px"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="#ff6b00"
            p="18px 20px"
            borderRadius="0.8rem"
            position="relative"
            area={"scooter"}
          >
            Самокаты
            <Image
              src={Scooter}
              w="100px"
              h="62px"
              position="absolute"
              bottom="20px"
              right="20px"
            />
          </GridItem>
        </Grid>
        <Grid
          templateAreas={`"mapTruck river evacuated energy"
                  "mapTruck checkTruck checkTruck energy"
                  `}
          gridTemplateRows={"1fr 1 fr"}
          gridTemplateColumns={"2fr 1fr 1fr 2fr"}
          minH="407px"
          gap="24px"
          color="blackAlpha.700"
          fontWeight="bold"
          mb="24px"
        >
          <GridItem
            pl="2"
            borderRadius="0.8rem"
            area={"mapTruck"}
            backgroundImage={CargoMap}
            backgroundPosition="50%"
            backgroundSize="70rem"
          >
            <Center
              fontSize="20px"
              justifyContent="space-between"
              bg="white"
              borderRadius="0.8rem"
              borderBottomRadius="30%"
              minH="72px"
              p="20px 20px 20px"
            >
              <Text mb="4px">Карта грузового каркаса</Text>
            </Center>
          </GridItem>
          <GridItem
            pl="2"
            bg="#171f34"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            position="relative"
            fontSize="20px"
            area={"river"}
          >
            Речной транспорт
            <Image
              src={River}
              w="50%"
              position="absolute"
              bottom="20px"
              right="10px"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="#e4000d"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            position="relative"
            fontSize="20px"
            area={"evacuated"}
          >
            Найти эвакуированный автомобиль
            <Image
              src={EvacuatedAvto}
              w="70%"
              position="absolute"
              bottom="20px"
              right="10px"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="white"
            borderRadius="0.8rem"
            area={"energy"}
            backgroundImage={ElectroAvtoMap}
            backgroundPosition="50%"
            backgroundSize="80rem"
          >
            <Center
              fontSize="20px"
              justifyContent="space-between"
              bg="white"
              borderRadius="0.8rem"
              borderBottomRadius="30%"
              minH="72px"
              p="20px 20px 20px"
            >
              <Text mb="4px">Энергия Москвы</Text>
            </Center>
          </GridItem>
          <GridItem
            pl="2"
            p="18px 20px"
            borderRadius="0.8rem"
            area={"checkTruck"}
            backgroundImage={CargoPass}
            backgroundPosition="center bottom"
            backgroundSize="cover"
            fontSize="20px"
            wordBreak="break-word"
          >
            <Text>
              Проверить пропуск <br />
              для грузового транспорта
            </Text>
          </GridItem>
        </Grid>
        <Grid
          templateAreas={`"mobile fine text"
                  "mobile found text"
                  `}
          gridTemplateRows={"1fr 1fr"}
          gridTemplateColumns={"45fr 35fr 20fr"}
          h="407px"
          gap="24px"
          color="blackAlpha.700"
          fontWeight="bold"
          mb="24px"
        >
          <GridItem
            pl="2"
            bg="#092360"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            area={"mobile"}
            backgroundImage={AppsIllustration}
            backgroundPosition="center bottom"
            backgroundSize="80%"
            backgroundRepeat="no-repeat"
          >
            <Text fontSize="20px">Мобильные приложения</Text>
            <Text fontSize="16px">
              Расписания транспорта, оплата парковки, вызов такси на расстоянии
              одного клика
            </Text>
          </GridItem>
          <GridItem
            pl="2"
            bg="#a2a9b1"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            area={"fine"}
            backgroundImage={Controller}
            backgroundPosition="right top"
            backgroundSize="30%"
            backgroundRepeat="no-repeat"
            position="relative"
          >
            <Text>Штравы в городском транспорте</Text>
            {/* <Image
              src={Controller}
              position="absolute"
              bgSize="50%"
              h=""
              right="0"
              bottom="0"
            /> */}
          </GridItem>
          <GridItem pl="2" p="18px 20px" borderRadius="0.8rem" area={"text"}>
            <Box mb="0.8rem">
              <Link>Что такое парковочный абонемент и как его получить?</Link>
            </Box>
            <Box mb="0.8rem">
              <Link>Какие права имеют владельцы резидентных разрешений?</Link>
            </Box>
            <Box mb="0.8rem">
              <Link>
                Как часто можно менять номер автомобиля в реестре парковочных
                разрешений?
              </Link>
            </Box>
          </GridItem>
          <GridItem
            pl="2"
            bg="#704330"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            area={"found"}
            position="relative"
          >
            <Box w="60%">
              <Text fontSize="20px">Бюро находок</Text>
              <Text fontSize="16px">
                Что делать, если забыли вещи в транспорте
              </Text>
            </Box>

            <Image
              src={Bear}
              position="absolute"
              h="calc(100% + 1rem)"
              bottom="0px"
              right="0rem"
            />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
}
export default Main;
