import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Link,
} from "@chakra-ui/react";

const questions: { title: string; description: string }[] = [
  {
    title: "Как при вызове такси быть уверенным, что такси — легальное?",
    description:
      "Вы можете проверить, есть ли у вашего водителя разрешение на осуществление таксомоторной деятельности на нашем сайте. Согласно договорам Департамента транспорта, заключенным со всеми крупными агрегаторами такси, заказы передаются только водителям с разрешениями на работу. ",
  },
  {
    title: "Что такое каршеринг?",
    description:
      "Каршеринг — это вид краткосрочной аренды автомобиля с поминутной тарификацией. Обычно его используют для коротких внутригородских поездок. В систему московского каршеринга входят следующие операторы: «Делимобиль», Ситидрайв, BelkaCar, Яндекс.Драйв.",
  },
  {
    title: "Можно ли провозить велосипед в трамвае, автобусе?",
    description:
      "Один человек может бесплатно провезти только 1 велосипед на всех маршрутах и на всех видах наземного городского пассажирского транспорта — в автобусах, электробусах, троллейбусах и трамваях. Заносить велосипед внутрь нужно через вторую дверь после того, как из салона выйдут пассажиры, а размещать его следует на накопительной площадке. Провоз велосипеда в автобусе и других видах наземного транспорта не должен причинять дискомфорт другим пассажирам, поэтому придерживайте его на протяжении всей вашей поездки.",
  },
  {
    title: "Часы работы павильона?",
    description: "Наш павильон открыт с 09:00 до 21:00.",
  },
  {
    title: "Можно ли детям до 14 посетить павильон без сопровождения взрослых?",
    description:
      "Гости до 14 лет допускаются в павильон только в сопровождении взрослых.",
  },
  {
    title: "Можно ли фотографировать в павильоне?",
    description:
      "Фотографировать и снимать можно, но, если хотите делать это с профессиональной аппаратурой, обратитесь за аккредитацией по почте.",
  },
  {
    title: "Есть ли гардероб?",
    description: "В павильоне не предусмотрен гардероб.",
  },
  {
    title:
      "Если мне уже 15 лет нужен ли мне паспорт для подтверждения своего возраста?",
    description:
      "При входе в павильон у вас могут попросить показать документ, удостоверяющий личность.",
  },
  {
    title: "Могу ли я оставить ребенка под присмотром сотрудников павильона?",
    description:
      "Нахождение ребенка до 14 лет в павильоне разрешено только при сопровождении взрослого.",
  },
  {
    title: "Как записаться на мастер-класс?",
    description: "Записаться на мастер-класс можно на нашем сайте.",
  },
  {
    title: "Можно ли отменить или перенести экскурсию?",
    description:
      "Отменить или перенести экскурсию можно на нашем сайте по ссылке «обратная связь».",
  },
  {
    title: "Сколько человек может участвовать в программе?",
    description:
      "Количество участников на каждое мероприятие рассчитывается индивидуально, данную информацию можно узнать в описании мероприятия.",
  },
  {
    title: "Где находится музей и как до него добраться?",
    description:
      "Наш адрес: г. Москва, пл. Киевского Вокзала, д. 1 (между Киевским вокзалом и ТЦ «Европейский»).",
  },
  {
    title:
      "Нужно ли записывается за ранее для посещения симулятора управления поездом?",
    description:
      "Для посещения симулятора управления поездом запись за ранее не требуется.",
  },
  {
    title: "Есть ли у павильона своя парковка?",
    description:
      "Вы можете воспользоваться платной городской парковкой, либо парковками ТЦ киевский и ТЦ Европейский.",
  },
  {
    title: "Можно ли с животными?",
    description:
      "Мы рады приветствовать ваших питомцев: - Собак до 35-и см в холке, в наморднике и на поводке; - Кошек в сумках-переносках; - Других животных в клетках и контейнерах, которые не больше размера обычного рюкзака.",
  },
  {
    title: "Какие билеты можно купить через Сервис sudasuda.ru?",
    description:
      "На нашем Сервисе представлены речные прогулочные маршруты. Всего на Москва-реке курсируют теплоходы по 10 прогулочным маршрутам, а также на маршруте-переправе.",
  },
  {
    title: "Как выбрать маршрут?",
    description:
      "Для выбора прогулки пользователь может воспользоваться поиском или разделами на главной странице и картой причалов.",
  },
  {
    title: "Где посмотреть расписание?",
    description:
      "Расписание прогулок размещено на сайте, вы можете ознакомиться с расписанием отправлений в каждой прогулке.",
  },
  {
    title: "Где посмотреть наличие свободных мест?",
    description:
      "При наличии свободных мест у вас будет возможность купить билет при помощи кнопки «Оплатить» в карточке прогулки.",
  },
  {
    title: "Ребенку еще нет 5 лет, на него необходимо приобретать билет?",
    description:
      "На большинстве маршрутов на детей до 5 лет включительно не требуется приобретать билет, но посадочное место не предоставляется. Если пассажиру требуется посадочное место на ребенка, то необходимо приобрести дополнительный билет, выбрав билет по платному тарифу. Подробная информация о стоимости детского билета представлена в карточке каждой прогулки при выборе отправления.",
  },
  {
    title: "Как забронировать билет на маршрут?",
    description:
      "Для выбора прогулки пользователю необходимо совершить поиск по указанным параметрам или ознакомиться с разделами на главной странице. Когда пользователь совершает поиск, у него есть возможность выбрать дату и время отправления. Далее пользователь выбирает прогулку из списка по результатам поиска, кликая по ней, пользователь попадает в карточку прогулки. В карточке прогулки у пользователя есть возможность ознакомиться с маршрутом прогулки, дополнительными услугами, расписанием и тарифами.",
  },
  {
    title: "Зачем мне указывать свои личные данные в билете?",
    description:
      "Это необходимо для выписки билета и дальнейшей посадки на теплоход.",
  },
  {
    title: "Когда приходить на причал?",
    description:
      "На причал необходимо прибывать заблаговременно, посадка на борт производится за 7-15 минут до отправления рейса. За 5 минут до отправления теплохода посадка заканчивается.",
  },
  {
    title: "Как найти нужный причал?",
    description:
      "Причал отправления теплохода указан в вашем электронном билете.",
  },
  {
    title: "Как найти нужный теплоход?",
    description:
      "Наименование теплохода указано в вашем билете. Название теплохода также указано на борту теплохода.",
  },
  {
    title: "Где я могу посмотреть мои купленные билеты?",
    description:
      "Купленные билеты доступны по электронной почте, которую вы указали при покупке билета.",
  },
  {
    title: "Что делать, если я удалил билет с QR-кодом со смартфона?",
    description:
      "Купленные билеты доступны по электронной почте, которую вы указали при покупке билета.",
  },
  {
    title: "Какие удобства есть на борту теплохода?",
    description:
      "Ознакомиться с дополнительными услугами, предоставляемыми на борту теплохода, вы можете в карточке прогулки.",
  },
  {
    title:
      "Могу ли я пройти на теплоход с велосипедом, самокатом, на роликах или с детской коляской?",
    description:
      "Ознакомиться с дополнительными услугами, предоставляемыми на борту теплохода, вы можете в карточке прогулки.",
  },
  {
    title: "Могу ли я взять с собой на борт теплохода еду и напитки?",
    description:
      "Как правило, перевозчики не разрешают приносить на борт еду/питание. Но на некоторых теплоходах могут быть исключения. Ознакомиться с дополнительными услугами, предоставляемыми на борту теплохода, вы можете в карточке прогулки.",
  },
  {
    title: "Могу ли я пройти на борт теплохода с домашним животным?",
    description:
      "Ознакомиться с дополнительными услугами, предоставляемыми на борту теплохода, вы можете в карточке прогулки.",
  },
];

const Questions = () => {
  return (
    <Box>
      <Box mb="20px">
        <Link
          fontSize={{
            sm: "1.6rem",
            base: "1.3rem",
          }}
          borderBottom="1px solid rgba(0,0,0,.3)"
        >
          Частые вопросы
        </Link>
      </Box>

      {questions.map((question, index) => (
        <Accordion allowMultiple mb="1rem" key={index}>
          <AccordionItem>
            <AccordionButton>
              <Box
                as="a"
                fontSize={{
                  sm: "1.1rem",
                  base: "1rem",
                }}
                textAlign="left"
                fontWeight="700"
                textDecorationLine="underline"
                textDecorationStyle="dotted"
                textDecorationColor="rgba(0,0,0,.2)"
                textUnderlineOffset="0.2em"
                textDecorationThickness="1px"
              >
                {question.title}
              </Box>
            </AccordionButton>

            <AccordionPanel
              fontSize={{
                sm: "1rem",
                base: "0.9rem",
              }}
              mt="1rem"
              pb={1}
              lineHeight="1.2"
              fontWeight="500"
            >
              {question.description}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  );
};
export default Questions;
