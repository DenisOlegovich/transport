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
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  Stack,
  InputGroup,
  InputLeftAddon,
  useRadioGroup,
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
import RadioCard from "./RadioCard";
import Route from "./Images/Route.png";
function Main() {
  const [isSmallerThan992] = useMediaQuery("(max-width: 992px)");
  const options = ["Т", "А", "П", "В"];
  let a = 3;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "route",
    defaultValue: "Транспорт",
    onChange: console.log,
  });

  const group = getRootProps();

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
      fontWeight="600"
      h="100%"
      pb="24px"
    >
      <Box maxW="1630px" p={{ md: "0 40px", base: "0 10px" }} m="0 auto">
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
            pl="2"
            bg="white"
            area={"routes"}
            borderRadius="0.8rem"
            transition="box-shadow .15s linear 0s"
          >
            <Box p="1.8rem 2rem">
              <Link
                href="https://transport.mos.ru/mostrans/build_route"
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

              <Stack spacing={4} mb="10px">
                <InputGroup>
                  <InputLeftAddon
                    children="А"
                    bg="white"
                    borderRight="none"
                    w="25px"
                    fontSize="14px"
                    textAlign="center"
                    color="#d10f1a"
                    p="6px"
                    borderTopLeftRadius="0.5rem"
                  />
                  <Input
                    type="text"
                    placeholder="откуда"
                    pl="10px"
                    borderTopRightRadius="0.5rem"
                    borderLeft="none"
                  />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon
                    children="Б"
                    bg="white"
                    borderRight="none"
                    w="25px"
                    fontSize="14px"
                    textAlign="center"
                    color="#2f80ed"
                    p="6px"
                    borderBottomLeftRadius="0.5rem"
                  />
                  <Input
                    type="text"
                    placeholder="куда"
                    pl="10px"
                    borderBottomRightRadius="0.5rem"
                    borderLeft="none"
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
                p="5px 30px"
                borderRadius="0.8rem"
                color="white"
                fontSize="16px"
              >
                Построить маршрут
              </Button>
              <Image
                src={Route}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="center bottom"
              />
              {/* <FormControl as="fieldset">
                <FormLabel as="legend">Favorite Naruto Character</FormLabel>
                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="24px">
                    <Radio value="Sasuke">Sasuke</Radio>
                    <Radio value="Nagato">Nagato</Radio>
                    <Radio value="Itachi">Itachi</Radio>
                    <Radio value="Sage of the six Paths">
                      Sage of the six Paths
                    </Radio>
                  </HStack>
                </RadioGroup>
                <FormHelperText>Select only if you're a fan.</FormHelperText>
              </FormControl> */}
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Box bg="#a2a9b1" w="60%">
              <Text fontSize="17px">Оплата проезда</Text>
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
              <Link
                fontSize="20px"
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
              <Box mb="2.4rem">
                <Text>
                  <Text fontSize="12px" color="#666f78">
                    {item.date}
                  </Text>
                  <Box
                    display="-webkit-box"
                    fontSize="16px"
                    lineHeight="1.2em"
                    fontWeight="500"
                    maxH="60px"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    wordBreak="break-word"
                  >
                    <Link
                      borderBottom="1px solid rgba(0,0,0,.2);"
                      textOverflow="ellipsis"
                      wordBreak="break-word"
                      href=""
                      _hover={{
                        borderBottom: "1px solid rgba(0,0,0,.5);",
                      }}
                    >
                      {item.description}
                    </Link>
                  </Box>
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
            pl="2"
            position="relative"
            bg="#87addf"
            area={"max"}
            borderRadius="0.8rem"
            p="18px 20px 0px"
            color="white"
            fontSize="20px"
            minW="170px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
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
            minW="170px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            Запись для получения спецразрешения
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
            backgroundPosition="center -3rem"
            backgroundSize="90rem"
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            pl="2"
            bg="#5ba824"
            color="white"
            area={"payParking"}
            position="relative"
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text p="18px 20px">Оплата парковки</Text>

            <Image
              src={MobileParking}
              position="absolute"
              bottom="0px"
              right="-1rem"
              maxH="100%"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="#0da4bf"
            position="relative"
            backgroundImage={Troika}
            backgroundSize="17rem"
            backgroundRepeat="no-repeat"
            backgroundPosition="center bottom"
            area={"troika"}
            color="white"
            p="18px 20px"
            borderRadius="0.8rem"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            Пополнение карты «Тройка»
            <Image
              src={Troika}
              position="absolute"
              bottom="0px"
              right="1rem"
              maxH="100%"
            />
          </GridItem>
          <GridItem
            pl="2"
            bg="#007dbd"
            p="18px 20px"
            borderRadius="0.8rem"
            color="white"
            backgroundImage={Electrobus}
            backgroundSize="100%!important"
            backgroundPosition="center bottom"
            backgroundRepeat="no-repeat"
            area={"schedule"}
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            minW="200px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            minW="200px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
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
            pl="2"
            borderRadius="0.8rem"
            area={"mapTruck"}
            backgroundImage={CargoMap}
            backgroundPosition="50%"
            backgroundSize="70rem"
            cursor="pointer"
            objectFit="cover"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            Речной транспорт
            <Image
              src={River}
              w="50%"
              position="absolute"
              bottom="20px"
              right="10px"
              maxH="80%"
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            Найти эвакуированный автомобиль
            <Image
              src={EvacuatedAvto}
              w="50%"
              position="absolute"
              bottom="20px"
              right="10px"
              maxH="50%"
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Center
              fontSize="17px"
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
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
          h="407px"
          gap="24px"
          fontWeight="bold"
          pb="24px"
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
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
            minH="120px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
          >
            <Text>Штрафы в городском транспорте</Text>
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
            minH="120px"
            cursor="pointer"
            _hover={{
              boxShadow: "0 4px 10px rgba(0,0,0,.05)",
              transition: "box-shadow .15s linear 0s",
            }}
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
