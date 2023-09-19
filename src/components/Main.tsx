import {
  Container,
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
  FormControl,
  FormLabel,
  HStack,
  Stack,
  InputGroup,
  InputLeftAddon,
  useRadioGroup,
} from "@chakra-ui/react";
import Card from "./Card";
import RadioCard from "./RadioCard";
import Questions from "./Questions";

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
import Validator from "./Images/Validator.png";
import Route from "./Images/Route.png";

const news: { date: string; description: string }[] = [
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
function Main() {
  const options: string[] = ["Т", "А", "П", "В"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "route",
    defaultValue: "Транспорт",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Container bg="#f3f5f7" fontSize="1rem" fontWeight="600" h="100%">
      <Box maxW="1630px" p={{ md: "30px 40px", base: "30px 15px" }} m="0 auto">
        <Grid
          templateAreas={{
            lg: `"routes pay pay news"
                  "routes max record news"
                  `,
            md: `"routes pay pay "
            "routes max record "
            "news news news"
            `,
            sm: `"routes"
            "pay"
            "max"
            "record"
            "news"
            `,
            base: `"routes"
            "pay"
            "max"
            "record"
            "news"
            `,
          }}
          gridTemplateRows={{
            lg: "1fr 1fr",
            md: "200px 200px 1fr",
            sm: "1fr 148px 148px 148px 1fr",
            base: "1fr 148px 148px 148px 1fr",
          }}
          gridTemplateColumns={{
            lg: "1fr 1fr 1fr 1fr",
            md: "1fr 1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          minH="480px"
          gap="25px"
          fontWeight="bold"
          mb="24px"
        >
          <GridItem
            area={"routes"}
            borderRadius="0.8rem"
            transition="box-shadow .15s linear 0s"
            backgroundImage={Route}
            backgroundPosition="center bottom 20rem"
            backgroundSize="53rem"
          >
            <Box position="relative">
              <Box
                p="18px 20px"
                bg="white"
                borderBottomRadius="50%"
                roundedBottom="true"
              >
                <FormControl as="fieldset">
                  <FormLabel as="legend" mb="10px">
                    <Link
                      href="https://transport.mos.ru/mostrans/build_route"
                      borderBottom="1px solid rgba(0,0,0,.2);"
                      _before={{
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "100%",
                        height: "2px",
                      }}
                    >
                      Построить маршрут
                    </Link>
                  </FormLabel>
                  <Stack mb="10px">
                    <InputGroup>
                      <InputLeftAddon
                        children="А"
                        bg="white"
                        w="25px"
                        fontSize="14px"
                        textAlign="center"
                        color="#d10f1a"
                        p="11px 5px 11px 10px"
                        borderTopLeftRadius="0.5rem"
                        border="1px solid #ebebeb"
                        borderRight="none"
                      />
                      <Input
                        type="text"
                        placeholder="откуда"
                        fontSize="0.8rem"
                        pl="10px"
                        borderTopRightRadius="0.5rem"
                        border="1px solid #ebebeb"
                        borderLeft="none"
                        _placeholder={{ color: "gray" }}
                        _active={{ border: "transporent", outline: "none" }}
                        _hover={{ border: "transporent", outline: "none" }}
                        _focus={{ border: "transporent", outline: "none" }}
                        w="100%"
                      />
                    </InputGroup>

                    <InputGroup mt="-11px">
                      <InputLeftAddon
                        children="Б"
                        bg="white"
                        w="25px"
                        fontSize="14px"
                        textAlign="center"
                        color="#2f80ed"
                        p="11px 5px 11px 10px"
                        borderBottomLeftRadius="0.5rem"
                        border="1px solid #ebebeb"
                        borderRight="none"
                      />
                      <Input
                        type="text"
                        placeholder="куда"
                        fontSize="0.8rem"
                        pl="10px"
                        borderBottomRightRadius="0.5rem"
                        border="1px solid #ebebeb"
                        borderLeft="none"
                        _placeholder={{ color: "gray" }}
                        _active={{ border: "transporent", outline: "none" }}
                        _hover={{ border: "transporent", outline: "none" }}
                        _focus={{ border: "transporent", outline: "none" }}
                        w="100%"
                      />
                    </InputGroup>
                  </Stack>
                  <HStack
                    {...group}
                    bg="#dbdbdb"
                    mb="10px"
                    justifyContent="space-between"
                    minH="45px"
                    borderRadius="0.5rem"
                  >
                    {options.map((value) => {
                      const radio = getRadioProps({ value });
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      );
                    })}
                  </HStack>
                  <Button
                    bg="#da2032"
                    w="100%"
                    p="14px 30px 16px"
                    borderRadius="0.8rem"
                    color="white"
                    fontSize="0.8rem"
                    fontWeight="700"
                  >
                    Построить маршрут
                  </Button>
                  <Box
                    borderBottomLeftRadius="60% 100%"
                    borderBottomRightRadius="60% 100%"
                    position="absolute"
                    bg="white"
                    w="100%"
                    content=""
                    h="1rem"
                    bottom="-0.9rem"
                    left="0"
                  ></Box>
                </FormControl>
              </Box>
            </Box>
          </GridItem>
          <GridItem area={"pay"}>
            <Card
              text="Оплата проезда"
              description="Все что нужно знать о ценах и способах оплаты"
              bg="#a2a9b1"
              color="white"
              image={Validator}
              imageH="calc(100% + 12px)!important;"
              imageInset="auto 0px 0px auto"
            />
          </GridItem>
          <GridItem
            bg="white"
            p="18px 20px"
            borderRadius="0.8rem"
            area={"news"}
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Box mb="24px">
              <Link
                borderBottom="1px solid rgba(0,0,0,.2);"
                href=""
                _hover={{
                  borderBottom: "1px solid rgba(0,0,0,.5);",
                }}
              >
                Новости
              </Link>
            </Box>
            {news.map((item, index) => (
              <Box mb="2.4rem" key={index}>
                <Text>
                  <Text fontSize="12px" color="#666f78">
                    {item.date}
                  </Text>
                  <Text
                    fontSize="0.8rem"
                    lineHeight="1.2em"
                    fontWeight="550"
                    maxH="60px"
                    noOfLines={3}
                  >
                    <Link
                      borderBottom="1px solid rgba(0,0,0,.2);"
                      href=""
                      _hover={{
                        borderBottom: "1px solid rgba(0,0,0,.5);",
                      }}
                    >
                      {item.description}
                    </Link>
                  </Text>
                </Text>
              </Box>
            ))}

            <Link
              borderBottom="1px solid rgba(0,0,0,.2);"
              href=""
              _hover={{
                borderBottom: "1px solid rgba(0,0,0,.5);",
              }}
            >
              Все новости
            </Link>
          </GridItem>
          <GridItem
            position="relative"
            bg="#87addf"
            area={"max"}
            borderRadius="0.8rem"
            p="18px 20px 0px"
            color="white"
            minW="170px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Box
              h="100%"
              backgroundImage={MaxLiksutov}
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
              backgroundPosition="right bottom"
            >
              Колонка Максима <br /> Ликсутова
            </Box>

            {/* <Image
              src={MaxLiksutov}
              position='absolute'
              h='80%'
              bottom='0px'
              right='0px'
            /> */}
          </GridItem>
          <GridItem
            bg="#E4000D"
            p="18px 20px"
            color="white"
            area={"record"}
            borderRadius="0.8rem"
            minW="170px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            Запись для получения спецразрешения
            {/* <Card
              text="Запись для получения спецразрешения"
              description=""
              bg="#E4000D"
              color="white"
              image=""
              imageH=""
              imageInset=""
            /> */}
          </GridItem>
        </Grid>
        <Grid
          templateAreas={{
            md: `"scheme magistral"
                    "scheme traffic"
                    `,
            sm: `"scheme"
                    "magistral"
                    "traffic"
                    `,
            base: `"scheme"
                    "magistral"
                    "traffic"
                    `,
          }}
          gridTemplateRows={{
            md: "1fr 1fr",
            sm: "312px 148px 312px ",
            base: "312px 148px 312px ",
          }}
          gridTemplateColumns={{
            md: "2fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          minH="407px"
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
            backgroundPosition="center -2rem"
            backgroundSize="55rem"
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Flex justifyContent="space-between">
              <Text>Схема метро, МЦК и МЦД</Text>
              <Image src={MetroLogo} w="43px" h="32px" />
            </Flex>
          </GridItem>
          <GridItem
            bg="#007dbd"
            p="18px 20px"
            color="white"
            area={"magistral"}
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            Магистраль - новая сеть маршрутов города
          </GridItem>
          <GridItem
            area={"traffic"}
            backgroundImage={Probki}
            backgroundPosition="0 0"
            backgroundSize="40rem"
            backgroundRepeat="no-repeat"
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Box position="relative">
              <Center
                justifyContent="space-between"
                bg="white"
                minH="72px"
                p="15px 15px 15px"
              >
                <Text mb="4px">Пробки и перекрытия</Text>
                <Image src={CoddLogo} w="33px" h="54px" />
              </Center>
              <Box
                borderBottomLeftRadius="60% 100%"
                borderBottomRightRadius="60% 100%"
                position="absolute"
                bg="white"
                w="100%"
                content=""
                h="1rem"
                bottom="-0.7rem"
              ></Box>
            </Box>
          </GridItem>
        </Grid>
        <Grid
          templateAreas={{
            lg: `"payParking troika troika schedule"
                    "payParking velo scooter schedule"
                    `,
            md: `"payParking payParking schedule "
                    "troika troika schedule "
                    "velo scooter schedule"
                    `,
            sm: `"payParking"
                    "troika"
                    "velo"
                    "scooter"
                    "schedule"
                    `,
            base: `"payParking"
                    "troika"
                    "velo"
                    "scooter"
                    "schedule"
                    `,
          }}
          gridTemplateRows={{
            lg: "1fr 1fr",
            md: "1fr 1fr 1fr",
            sm: "148px 148px 148px 148px 312px",
            base: "148px 148px 148px 148px 312px",
          }}
          gridTemplateColumns={{
            lg: "1fr 0.5fr 0.5fr 2fr",
            md: "0.5fr 0.5fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          minH="407px"
          gap="24px"
          fontWeight="bold"
          mb="24px"
        >
          <GridItem
            bg="#5ba824"
            color="white"
            area={"payParking"}
            position="relative"
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text p="18px 20px">Оплата парковки</Text>

            <Image
              src={MobileParking}
              position="absolute"
              bottom="0px"
              right="-0.7rem"
              maxH="100%"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="#0da4bf"
            backgroundImage={Troika}
            backgroundSize={{
              xl: "13rem",
              lg: "15rem",
              md: "11rem",
              sm: "11rem",
              base: "11rem",
            }}
            backgroundRepeat="no-repeat"
            backgroundPosition={{
              lg: "center bottom",
              base: "right bottom",
            }}
            area={"troika"}
            color="white"
            p="18px 20px"
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            backgroundSize="contain"
            backgroundPosition={{
              xl: "center bottom -2rem",
              lg: "center",
              md: "center",
              sm: "center bottom",
              base: "center bottom -2rem",
            }}
            backgroundRepeat="no-repeat"
            area={"schedule"}
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            Расписание и схемы движения городского транспорта
          </GridItem>
          <GridItem
            bg="#ff6b00"
            p="18px 20px"
            borderRadius="0.8rem"
            position="relative"
            area={"velo"}
            minW="200px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text>Велотранспорт</Text>
            <Image
              src={Velo}
              w="100px"
              h="62px"
              position="absolute"
              bottom="15px"
              right="20px"
            />
          </GridItem>
          <GridItem
            bg="#ff6b00"
            p="18px 20px"
            borderRadius="0.8rem"
            position="relative"
            area={"scooter"}
            minW="200px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
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
          templateAreas={{
            lg: `"mapTruck river evacuated energy"
                    "mapTruck checkTruck checkTruck energy"
                    `,
            md: `"mapTruck river evacuated "
                    "mapTruck checkTruck energy"
                    `,
            sm: `"mapTruck"
                    "river"
                    "evacuated"
                    "checkTruck"
                    "energy"
                    `,
            base: `"mapTruck"
                    "river"
                    "evacuated"
                    "checkTruck"
                    "energy"
                    `,
          }}
          gridTemplateRows={{
            md: "1fr 1fr",
            sm: "310px 148px 148px 148px 312px",
            base: "310px 148px 148px 148px 312px",
          }}
          gridTemplateColumns={{
            lg: "2fr 1fr 1fr 2fr",
            md: "2fr 1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          minH="407px"
          gap="24px"
          fontWeight="bold"
          mb="24px"
        >
          <GridItem
            borderRadius="0.8rem"
            area={"mapTruck"}
            backgroundImage={CargoMap}
            backgroundPosition="50%"
            backgroundSize="55rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Box position="relative">
              <Center justifyContent="space-between" bg="white" p="18px 20px">
                <Text mb="4px">Карта грузового каркаса</Text>
              </Center>
              <Box
                borderBottomLeftRadius="60% 100%"
                borderBottomRightRadius="60% 100%"
                position="absolute"
                bg="white"
                w="100%"
                content=""
                h="1rem"
                bottom="-0.7rem"
              ></Box>
            </Box>
          </GridItem>
          <GridItem
            bg="#171f34"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            position="relative"
            minW="170px"
            fontSize={{
              xl: "1rem",
              lg: "15px",
              md: "15px",
              sm: "20px",
              base: "20px",
            }}
            area={"river"}
            cursor="pointer"
            boxSizing="border-box"
            display="block"
            overflow="visible"
            wordBreak="break-word"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text
              maxW={{
                sm: "80%",
                base: "55%",
              }}
            >
              Речной транспорт
            </Text>

            <Image
              src={River}
              maxW="50%"
              position="absolute"
              bottom="20px"
              right="10px"
              maxH="80%"
            />
          </GridItem>
          <GridItem
            bg="#e4000d"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            position="relative"
            minW="170px"
            fontSize={{
              xl: "0.85rem",
              lg: "15px",
              md: "15px",
              sm: "20px",
              base: "20px",
            }}
            area={"evacuated"}
            cursor="pointer"
            boxSizing="border-box"
            display="block"
            overflow="visible"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text>Найти эвакуированный автомобиль</Text>
            <Image
              src={EvacuatedAvto}
              maxW="70%"
              position="absolute"
              bottom="20px"
              right="10px"
              maxH="50%"
            />
          </GridItem>
          <GridItem
            bg="white"
            borderRadius="0.8rem"
            area={"energy"}
            backgroundImage={ElectroAvtoMap}
            backgroundPosition="50%"
            backgroundSize="30rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Box position="relative">
              <Center
                justifyContent="space-between"
                bg="white"
                minH="72px"
                p="18px 20px"
              >
                <Text mb="4px">Энергия Москвы</Text>
              </Center>
              <Box
                borderBottomLeftRadius="60% 100%"
                borderBottomRightRadius="60% 100%"
                position="absolute"
                bg="white"
                w="100%"
                content=""
                h="1rem"
                bottom="-0.7rem"
              ></Box>
            </Box>
          </GridItem>
          <GridItem
            p="18px 20px"
            borderRadius="0.8rem"
            area={"checkTruck"}
            backgroundImage={CargoPass}
            backgroundPosition="right bottom"
            backgroundSize="cover"
            wordBreak="break-word"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text>
              Проверить пропуск <br />
              для грузового транспорта
            </Text>
          </GridItem>
        </Grid>
        <Grid
          templateAreas={{
            lg: `"mobile fine text"
                    "mobile found text"
                    `,
            md: `"mobile fine"
                    "mobile found"
                    "text text"
                    `,
            sm: `"mobile"
                    "fine"
                    "found"
                    "text"
                    `,
            base: `"mobile"
                    "fine"
                    "found"
                    "text"
                    `,
          }}
          gridTemplateRows={{
            lg: "1fr 1fr",
            md: "1fr 1fr 1fr",
            sm: "312px 148px 148px 1fr",
            base: "312px 148px 148px 1fr",
          }}
          gridTemplateColumns={{
            lg: "40fr 35fr 25fr",
            md: "1fr 1fr",
            sm: "1fr",
            base: "1fr",
          }}
          minH="407px"
          gap="24px"
          fontWeight="bold"
          pb="24px"
        >
          <GridItem
            bg="#092360"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            area={"mobile"}
            backgroundImage={AppsIllustration}
            backgroundPosition="center bottom"
            backgroundSize={{
              lg: "30rem",
              md: "23rem",
              sm: "23rem",
              base: "20rem",
            }}
            backgroundRepeat="no-repeat"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Box>
              <Text fontWeight="700" mb="0.2rem">
                Мобильные приложения
              </Text>
            </Box>
            <Box>
              <Text fontSize="0.8rem" fontWeight="600">
                Расписания транспорта, оплата парковки, вызов такси на
                расстоянии одного клика
              </Text>
            </Box>
          </GridItem>
          <GridItem
            bg="#a2a9b1"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            area={"fine"}
            backgroundImage={Controller}
            backgroundPosition="right top -1rem"
            backgroundSize={{
              lg: "10rem",
              md: "7.5rem",
              sm: "7.5rem",
              base: "7.5rem",
            }}
            backgroundRepeat="no-repeat"
            position="relative"
            minH="120px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text w="60%">Штрафы в городском транспорте</Text>
            {/* <Image
              src={Controller}
              position="absolute"
              bgSize="50%"
              h=""
              right="0"
              bottom="0"
            /> */}
          </GridItem>
          <GridItem borderRadius="0.8rem" area={"text"}>
            <Box mb="0.8rem">
              <Link
                textDecorationLine="underline"
                textDecorationStyle="solid"
                textDecorationColor="rgba(0,0,0,.2)"
                textUnderlineOffset="0.2em"
                textDecorationThickness="1px"
              >
                Что такое парковочный абонемент и как его получить?
              </Link>
            </Box>
            <Box mb="0.8rem">
              <Link
                textDecorationLine="underline"
                textDecorationStyle="solid"
                textDecorationColor="rgba(0,0,0,.2)"
                textUnderlineOffset="0.2em"
                textDecorationThickness="1px"
              >
                Какие права имеют владельцы резидентных разрешений?
              </Link>
            </Box>
            <Box mb="0.8rem">
              <Link
                textDecorationLine="underline"
                textDecorationStyle="solid"
                textDecorationColor="rgba(0,0,0,.2)"
                textUnderlineOffset="0.2em"
                textDecorationThickness="1px"
              >
                Как часто можно менять номер автомобиля в реестре парковочных
                разрешений?
              </Link>
            </Box>
          </GridItem>
          <GridItem
            bg="#704330"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            area={"found"}
            position="relative"
            minH="120px"
            cursor="pointer"
            display="block"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.15)",
              transition: "box-shadow .15s linear 0s",
            }}
            overflow="revert"
          >
            <Image
              overflowX="hidden"
              src={Bear}
              position="absolute"
              h="calc(100% + 1rem)"
              bottom="0px"
              right="0rem"
            />
            <Box display="flex" position="relative" zIndex="1">
              <Box maxW="60%" mr="120px">
                <Box mb="0.2rem">
                  <Text>Бюро находок</Text>
                </Box>
                <Box>
                  <Text
                    fontSize={{
                      sm: "0.8rem",
                      base: "0.75rem",
                    }}
                  >
                    Что делать, если забыли вещи в транспорте
                  </Text>
                </Box>
              </Box>

              {/* <Box
                backgroundImage={Bear}
                backgroundPosition="cover"
                backgroundSize="30%"
                backgroundRepeat="no-repeat"
                position="absolute"
                h="calc(100% + 1rem)"
                bottom="0px"
                right="0px"
              ></Box> */}
            </Box>
          </GridItem>
        </Grid>
        <Questions />
      </Box>
    </Container>
  );
}
export default Main;
