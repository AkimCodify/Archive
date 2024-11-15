import { createContext, useReducer } from "react";
import React from "react";

export const AutoContext = createContext(null);

const INITIAL_STATE = {
  questions: [
    {
      ticket: "Билет 1",
      question: "1. По какой траектории вам разрешено выполнить разворот?",
      image:
        "https://s3-alpha-sig.figma.com/img/2fcb/1529/8645bc2255844988c18e2cff05d08e82?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFO4yGsF8HqJnu0SoKiUQyq7Wz7peoEtOPB5m38NiTAtb20G7lUZTssQp7Y2QK0BCuL7eFR~WUx0YEM00DF2fKJyhYkkCZkKulsGW5f6OyfW3Kp8q0o7JlNVDP5OUxF7UGDAeed7zRpxc8qvMsd5wp~ORbgoMrQmhGs0oXsbyR2Z1c8eGea5T4SKmjJ66YyV4XRx9gP5mBdee9BJCav5thDV~ci0xxPF2~b~Map3duTHEYO-iB8WhOFx3UgcIK~QPTpEBb2BuSXgeMGWdyRNuLxUG6G7UjtY-IJlwTIcBpi3BveXHmXW4eTMc1WPGGodZvghrvB05UPXgD9kIo-VOQ__",
      answer1: "Только по А",
      answer2: "Только по Б",
      answer3: "По любой из указанных.",
      correctAnswer: 2,
      desc: "Выезд с пересечения проезжих частей должен быть выполнен на «свою» сторону, т.е. исходя из пространственного движения без выезда на сторону встреного движения. Двигаясь по траектории «Б», Вы совершаете встречное движение по пересекаемой дороге, что крайне опасно, так как может произвести лобовое столкновение с автомобилем, приближающимся слева. Развернуться следует по траектории «А». (Пункт 8.6 ПДД)",
    },
    {
      ticket: "Билет 1",
      question:
        "2. С какой скоростью вы можете продолжить движение вне населенного пункта по левой полосе на легковом автомобиле?",
      image:
        "https://s3-alpha-sig.figma.com/img/9db5/616d/f1a1cc2249945be1dbc15e4380646732?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ntFPmulaIcVkd31KOX4UzTgkkutBQka3RcZMGdAdEvFjugcBxQfNp2QyUyB9jS82sfLdximbmMpG8C3h3VIMy~y4Lkr7RmpGWzqBbNtKF27yblWKhYf9-FQffsOOnYQSfRCo6HA8sR5stJGL2y9fH8aM1o1kirMgDCWLW7XY49deBmGE6Jnf~T2mdkIwFJifKXK4BnVEGvU4JAS3r1HFo~8Olm9EXRvsjiUQ1tRgBdDZTaXPlaClZHMs3TbyQHus9rAo53WbzoUEaKw1XxqQLWTU1OWalixhMJ2KsejR5r72TzYyLX99Q-pf0BehTkoLUcy3DeF~205G5LxNZsyudw__",
      answer1: "Не более 50км/ч ",
      answer2: "Не менее 50км/ч и не более 70км/ч",
      answer3: "Не менее 50км/ч и не более 90км/ч",
      correctAnswer: 3,
      desc: "Над левой полосой висит знак 4.6 «Ограничение минимальной скорости» с табличкой 8.14 «Полоса движения», указывающей полосу движения, на которую распростроняется действие знака. Скорость движения по левой полосе не должна быть менее 50км/ч и не должна превышать допустимой для дорог вне населенных пунктов, т.е. не более 90км/ч. («Дорожные знаки», пункт 10.3 ПДД)",
    },
    {
      ticket: "Билет 1",
      question:
        "3. Можно ли водителю легкового автомобиля выполнить обгон грузовых автомобилей вне населенного пункта по такой траектории?",
      image:
        "https://s3-alpha-sig.figma.com/img/588d/8033/d2440ab3788422026c1858c753835f94?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QdxmlvIAQrqe1G9i17y7v6eTMhtDbmcYJERkNlwnuLaOUQvHaV4CdheqZIZHM5WuPvsK1HL~TC-o0LG7q8fMEiVUn4duF~XxpG4jxPD2u9iczaEccwz6GJXFVJf~tsDrTYinN5r-hW-Q8NtWcwRp4gUM6U3tnizGV~KFY7b4SC5EghMqK-pFxy~vaH4ksjLLRUCGFYxlDjEFi9VGlVcadvNp4Honzr4RYYffIi68SkY3q5xNNuDjn1PNl6NZdVLkq2s1jiJtDQKe6cfrypngKC-2oHbX4H6lIixKLnpPyIPK-2AoG~iAyyJmS148HE01m2tVYwVM3WDDVTxaZo0x1g__",
      answer1: "Можно.",
      answer2: "Можно, если скорость грузовых автомобилей менее 30 км/ч.",
      answer3: "Нельзя",
      correctAnswer: 1,
      desc: "На дорогах с двусторонним движением, имеющих четыре и более полос для движения обгон запрещён. В таких ситуациях можно совершать только опережение. Соблюдая правила маневрирования водитель легкового автомобиля на данном участке дороги может совершать опережение любых транспортных средств по различным траекториям включая и указанную. (Пункт 9.2 ПДД)",
    },
    {
      ticket: "Билет 1",
      question:
        "4. В каком случае водителю разрешается поставить автомобиль на стоянку в указанном месте?",
      image:
        "https://s3-alpha-sig.figma.com/img/4c1d/be4e/07602d5df1e8f7078a5d7af02eb1d696?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edDiyjTyIn2tb6v5VlyDetHy9FC8z6O5Xk1B-LImWEus8AillfcwG3k3EBoRe2u-Y5bkXcpAFoDiWayIKqVIBlSQbPDbHxPYgBqrQjFUIJ~~9VEQo0KHSkQQJDtQiWk3~~2acB0XogLo1yYciXO~dkZdLLJTYOXeYH8OHcKcvUSw5uXacM~cwdASLDmnS24fHw1AICcuIPstr8HeHuJxoiKHyw5jRc8cI76VC7wyLgTaCtnMaOehj2CPtNvOZE3Wu4DyOLXUQyu7kPgAqng1oWYE871rKEnoE6I5ssp7WLYLWGKIv~XscH~s7JoCac-bMPr0BY4y7N~3ejfG97pScg__",
      answer1:
        "Только если расстояние до сплошной линии разметки не менее 3 м.",
      answer2:
        "Только если расстояние до края пересекаемой проезжей части не менее 5 м.",
      answer3: "При соблюдении обоих перечисленных условий.",
      correctAnswer: 3,
      desc: "Водитель не нарушает правила остановки и стоянки. Расстояние до края проезжей части, до сплошной линии разметки соблюдается – не менее допустимых. Остановка и стоянка за пешеходным переходом также допустима. Правильный ответ – при соблюдении обоих перечисленных условий. (Пункт 12.4 ПДД)",
    },
    {
      ticket: "Билет 1",
      question: "5. Кому Вы обязаны уступить дорогу при повороте налево?",
      image:
        "https://s3-alpha-sig.figma.com/img/b562/07af/dc81ceb73ae3ccc92277382ef72e2025?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Blc3lOoNZaEL3nlfEvOvvxCi9vZ4b5mRJ~JD7pEwC3YZzQibQusm5C8h1OWx~XwQaTTf-zADm2ojiWaBgg3oNynMOPdnbzwf-mchkarZQHRlQfNeGMrWF~gA5SCkXFFhOcQJiXWu3HHhALrA~pl1l0s4yDIIdp2H251x4aKe~Y7t7yh3zANFwsJ5B1F~KFvKlfb9Djhp-~rH6x2z41LiPvkQ13IgVH1t4GYalwybjKKkenmCwiEj1lp9rLyqAKO0tv~v9scaplujFasI2XSbmBT~q13DPMWAGNbMXIPZ2i9xJ4aoXVYrbyOGg2cXt9LAC74jUX-cFh7U4DV4VOpQFg__",
      answer1: "Только автобусу.",
      answer2: "Только легковому автомобилю.",
      answer3: "Никому",
      correctAnswer: 3,
      desc: "Перекрёсток неравнозначный. Главная дорога меняет направление. Транспортные средства, находящиеся на главной дороге, имеют преимущество, а водители между собой руководствуются «правилом правой руки». Никому не уступая, первым проезжаете Вы, вторым автобус, легковой автомобиль последним, так как он находится на второстепенной дороге. («Дорожные знаки», пункты 13.9, 13.10, 13.11 ПДД)",
    },
    {
      ticket: "Билет 1",
      question: "6. Сколько полос для движения имеет данная дорога?",
      image:
        "https://s3-alpha-sig.figma.com/img/4e86/3a19/321571244b874ecffcb6d3829136ae03?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I1TcEEsggMS9F5qDwBFaIb0WAoUmJy2oN1-TVum3ugjSP~r2j6rHPNJW6gxIlA~TuaRJtttEvxwkXYzzqtWidBxZXAzdxGSDAfXyu91GjIAxdtv-0oZmK62mxzK03Z-nrLG4-dKKOwLxb6qJuAmm9xuLQs3Bx6~-qQ4O9ZNijw68FSZuGyL5id9iVxQf7cJTAJU0Td~fM5huDT8F3YhvE~hDq6PFPeOX8qbgHIVc4WsjBr5i7s8EM4JuaD9jI7Hq7Haua~oUsQPObiziYxZ-YceMGcOSrzEQrijXeF9bMbZv-vNR8lEVPz5D0B8UbfoF-oij7RoW-y3Q1UFI1cBdvQ__",
      answer1: "Две",
      answer2: "Четыре.",
      answer3: "Пять",
      correctAnswer: 2,
      desc: "Разделительная полоса делит дорогу на проезжие части. Данная дорога имеет две проезжие части, четыре полосы движения. (Пункт 1.2 ПДД)",
    },
    {
      ticket: "Билет 1",
      question: "7. Можно ли Вам въехать на мост первым?",
      image:
        "https://s3-alpha-sig.figma.com/img/de33/45a7/8619ea3da6ca4e6406b61413c74f5333?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKnGAPR6ZwLueSYN0Kkg1yb4qeDemxl9VpzxGGMVxepOVBaD~IgiriTXrC~6xOBqp04z1iGA82jNqG-behVAg2f~F6Rdf3R3961~ceNE8BEUeZ351Buf~bzQrNoSLbvuQ36tCxg~aFFXDR-Ipclc0PlyJZ9VQ-8121rJLQcGqFXnJmEfmbOe9lrKZeC5lO5XrLMzFpur9Lk~G~277k-WeB6qsy5gBXW9HCiMNU6L9xWoTO645GZW9hT4Brh~Gj8iNneIqrmTDW12cUgy65zRdwwk6Z1CgFZ4lxA1BXyxofqRJsVOjRrCix7iJjxq4HPYejZm0gusKq7uHNgJa~~9Cg__",
      answer1: "Можно",
      answer2: "Можно, если Вы не затрудните движение встречному автомобилю.",
      answer3: "Нельзя",
      correctAnswer: 1,
      desc: "В указанном месте можете «парковаться», так как действие знака 3.27 «Остановка запрещена» распространяется согласно табличке 8.2.3 «Зона действия» до знака.",
    },
    {
      ticket: "Билет 1",
      question: "8. Что запрещено в зоне действия этого знака?",
      image:
        "https://s3-alpha-sig.figma.com/img/ce3c/b0ee/c64721fc2fb48560e9ccacdd46295bb4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bs7uBw6MucYuAJaOQvsm9rEX10qp9Kip4VuP0saSSTJPFjf4~EaZcLJh5g8b3YZWAEz07hmjm2CLYsY1vl47tr2HMUwu75UgNPL8ieuHXb7YEAlEZ2ZSYwtp7H3hPYxuwDT~VtHMc0T8Z8leNxWUZXN9tsRkP4p2O0F3ar2Eo6AAdeBcGIU9Pl7bvsJAcxVLRay~fQPGwlSVJqOGE4LKpEWx7Qw7KC7caAzzwjkCMSkWQ3pWJgogc5GID8BREp29gDpZEUcrmxpZptizWbzNq-HaRDoIK2k~UEuzL1QVTyLHjAR4Hh6GxkP15YIwqsQBTWD7z-ucj~Mcn9YzThDaMg__",
      answer1: "Движение любых транспортных средств.",
      answer2:
        "Движение всех транспортных средств со скоростью не более 20 км/ч.",
      answer3: "Нельзя",
      correctAnswer: 3,
      desc: "Знак 5.33 «Пешеходная зона» начало участка дороги, где разрешено движение только пешеходов и велосипедистов в случаях, установленных в п. 24.2 п. 24.3 п. 24.4 Правил (Приложение 1). Поэтому запрещено движение всех механических ТС.",
    },
    {
      ticket: "Билет 1",
      question:
        "9. Поднятая вверх рука водителя легкового автомобиля является сигналом, информирующим Вас о его намерении:",
      image:
        "https://s3-alpha-sig.figma.com/img/6f5a/170f/d0790ec03681eb2b09d3420caf85d610?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wfic5RgVRJ5ZNKo5WUqRFT2Ewy~y85kaxh~QjGHmdxWYTFvMih0yNqGghkP5xmJkyYHfMVBt-W3GHy896Hh5aAjHHW4D28kf05ReDltFI1~r~6Brk3~Ff5rsciMs0vuup~0N9DLpIFMsPY7p2rf6RUCUcWSHL93P5hXh7kgO6m428YmlPYYaYj5sby~1cIB8W7Jk7h4I0IbTeR9zASu611Vy~ogMm1DvCH5uxDfWuyBHpYfHvJZOYZQvxf9hKAlVsQFJ8x7gfUWsRWArBv48S70O-UoFB4Nyd8KGLe5GeolyeoWwGZOAZjmKMHp7VDyKjUcyz3q6N8T6DzKs0zU5Ng__",
      answer1: "Повернуть направо.",
      answer2: "Продолжить движение прямо.",
      answer3:
        "Снизить скорость, чтобы остановиться и уступить дорогу мотоциклу.",
      correctAnswer: 3,
      desc: "У водителя не работает световая сигнализация, поэтому он вынужден подавать соответствующие сигналы рукой. Согласно знаку 2.4 «Уступите дорогу» мотоциклист имеет преимущество. Поднятая вверх рука информирует о намерении притормозить для того, чтобы уступить дорогу мотоциклисту. («Дорожные знаки», пункт 8.1 ПДД).",
    },
    {
      ticket: "Билет 1",
      question:
        "10. Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?",
      image:
        "https://s3-alpha-sig.figma.com/img/acf5/3e5e/619b31e35d507bc5e503d35e39bef9b2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f8M3O9RBMgxY9KNMmCdNRq7v8hd3hW1EwIz5xIfXnsvGGa5wYX4w4QYNmj907zVHiSKfb-Ojo9art~leBWH4Z~h-kX6BQOulDRmJFRNfNAbhtJnjx98tG2mA~zltgRPBw7P6omNg1up6gsRY-fhuvsHmpbM9Njcxa0iW8TI2RA0yw5q39CwYsLYK0aUy4kz4JdMMhVY4~Rqj8hOfkzgic1ruIS9YMC3pJXzoi08nIK6hR4nmKqcVEXVh-4QOHtb3S8ALlvnjllWfO88RyQaKuvcZ2qykjmsXfy1XIkvLqIAW8i7-B9I1RTgswflAIeiwNYOisBTwD6h8ig~cX2tyyg__",
      answer1: "На левом.",
      answer2: "На правом.",
      answer3: "На обоих.",
      correctAnswer: 3,
      desc: "На левом рисунке преимущество у автомобиля, двигающегося попутно по полосе без изменения направления движения, т.е. у «хозяина полосы». Водитель, двигающийся по левой полосе уступает. На правом рисунке одновременное перестроение. Водители руководствуются «правилом правой руки», т.е. у кого помеха справа, тот и уступает. Помеха справа у водителя, двигающего также по левой полосе. Он уступает дорогу и в этой ситуации. (Пункт 8.4 ПДД)",
    },
    {
      ticket: "Билет 1",
      question: "11. Можно ли Вам выполнить разворот в этом месте?",
      image:
        "https://s3-alpha-sig.figma.com/img/5e7e/df48/6e31aad63ac62c025f9de131a2342531?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQn669H~4XZWHKKF9uRcx8S2WTvTHyRMxQJApYxdiKnq046ZtPxOtwhXnNqdZRbgzei4ArEVdkTP3NUNHep4s1vEuDflkxLFM94DLF-YwNAC5PsC3O9M6wrNsQD88jQDiDme8AapXE9EHkWZpmWeDEN-I2rmMMgnHTaqqMmEYruPjJJFdxHQSgdrDjLvnBU5Y4uSTuTu-pzLaJvRhnxP9FcSIEdPQDHfnFIh~RG0H0ES0nMoGvVFQEgse6kvGmFUqYzQ6GjRDNlTmKTKIYZ1T-x6hNCjfg6t4GSnRxbFFvA9SYOiU4XWgNjiiSxVtUBrlrmJwth2o1II4WgXgeca0w__",
      answer1: "Можно",
      answer2: "Можно только при отсутствии приближающегося поезда.",
      answer3: "Нельзя",
      correctAnswer: 1,
      desc: "Разворот запрещён на железнодорожном переезде, границами которого являются шлагбаумы, а при их отсутствии - знаки 1.3.1 «Однопутная железная дорога» или 1.3.2 «Многопутная железная дорога». В нашем случае железнодорожный переезд без шлагбаума. Вы можете совершить разворот по указанной траектории, так как совершаете его на безопасном удалении от железнодорожных путей. (Пункт 8.11 ПДД)",
    },
    {
      ticket: "Билет 1",
      question: "12. Вы можете начать обгон?",
      image:
        "https://s3-alpha-sig.figma.com/img/c376/2440/060f390ac8c7dbc82571a5e5424920cd?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiF07XR0JlxKSb-9qBGVMphU9ofLth3AbhQQ~fYda4T6tMSJdEBnq-7tJ5WGvZtGcaq14EdoM3q1eboQJT6x4YuAesXfMcPJnqrCOnVGfNsIdFfoJr9mdKOaa3DaNcqQNaf0j1MG~5Dmuz9KABzTBJkgqwWJXFYXIY7eVT3wDPIzBD8-2o6fonKH7V2t8qcr9~CMo~scfgTJKwIhl9Qda9Qv64P4MmdrIHwG62cSigeZkPe1hsXEUrSA0htjIouw1YExuWz-XRzBkRgCq4Uf38i9Ff78mdjRrgrn226qSq1y-WKfF8JgH6GZes7BLLVamz6bKbKKsdu1GzGBfmXAVw__",
      answer1: "На переезде.",
      answer2: "Непосредственно после переезда.",
      answer3: "Через 100 м после переезда.",
      correctAnswer: 2,
      desc: "Обгон запрещён на железнодорожных переездах и ближе чем за 100 м перед ними. Сразу же после проезда границы железнодорожного переезда (в данной ситуации стойки со знаками и светофором за переездом) можете приступать к обгону. (Пункт 11.4 ПДД)",
    },
    {
      ticket: "Билет 1",
      question: "13. По какой траектории Вам можно выполнить поворот налево?",
      image:
        "https://s3-alpha-sig.figma.com/img/4490/30c1/71798d23ee89f384dcbc0372f45b635e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LfLt-K5XLZW31DUTHaiLp7RQaLa6CMkJZECZKtTBEZ7JoK06Wd4o6~tsqtYnj39Udq66Xq6V3u57xp5PeYDLHgpfNtcRVjzSUeDVqeUqFpi2rxyDpE-SGt52C0U14Jf-XHkRcCqFPgZM971Bw2SsiMgl7ONYtPn6IFbIlZdRMlOn1m2z6ffX2zoQ4YBmksLo~hZ~zUtURHoIHXlFZ5vuO0c2aVtI~hR4lRIi55e~5NibFP40QvdTdBHtnplqcG6O6oSVNyodi-fPSptgG~j8l6ikW~JPDFcPjm6YeFJYqfsM4WWyeuC4dXqNYPs1QYNNw3rG8QvsI1ZmoiXJHvEbnA__",
      answer1: "Только по А.",
      answer2: "Только по Б.",
      answer3: "По любой из указанных.",
      correctAnswer: 2,
      desc: "Поворачивая при выезде с пересечения проезжих частей, Вы не должны оказаться на стороне встречного движения. Поворот налево следует произвести по траектории «Б».",
    },
    {
      ticket: "Билет 1",
      question:
        "14. Вы намерены повернуть направо. Можете ли Вы приступить к повороту?",
      image:
        "https://s3-alpha-sig.figma.com/img/038c/abeb/88a8391d095853c8653f4029350c30ce?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TgOVTCSCwuPs0gg5S5hySiag5EPRMHT3oHrBYhiBzn005pYzJ7lH8MWMyl1cHhZcQUaukpj5Ci7ZWXLDmcb2dFg3QSkLy0Oc0LJ9bF90otUyw4wiICZYVf4CS93qsYjzL5PIOCWK8t7oeAVOepqCp6kx~cF0CAIH1Ni2Wvzh0dXcL4TYhz0ePL5H8ZlauC6kHA-5g8hgLqjWg6rM7SUUx8~jyq2opjXNggU2FO74D4j1G7tIAJZKpjaz4e~DdfOVbOAll-JLXHWWVs6udmtQp3gdZGA3HJvWpqmOnFNNXHUhq6Q4H0J6hBhubgO4gTsZOQbw4EmobDDgYfekVoPVFw__",
      answer1: "Можете",
      answer2:
        "Можете, когда убедитесь, что при этом не будут созданы помехи грузовому автомобилю.",
      answer3: "По любой из указанных.",
      correctAnswer: 2,
      desc: "При повороте направо Вы должны двигаться по возможности ближе к правому краю проезжей части, т.е. по крайней правой полосе, которая свободна. Если Вы убеждены, что не создадите помеху находящемуся на главной дороге и имеющему преимущество грузовому автомобилю, выезжаете на перекрёсток, не дожидаясь его проезда через перекрёсток, так как знак 2.4 «Уступите дорогу» не предписывает совершать обязательную остановку перед пересечением. (Пункты 1.2 термин «Уступить дорогу», 13.9 ПДД, «Дорожные знаки»)",
    },
    {
      ticket: "Билет 1",
      question:
        "15. Сколько пересечений проезжих частей имеет этот перекресток?",
      image:
        "https://s3-alpha-sig.figma.com/img/6633/41a6/ea4da3f2242fe8d938a64dc00dc5e181?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HHOmDHkrXzIS-XjRRYwyKD33WAbSQYc9UxWCXn4fPmUb-fAW8sFgZAZmbmtejieqWLt1YLPbKAcVUwpt1FIYsirT5-VJJ-XmKRpG~g2zukUABmENnosNxO5ULmyaa4nBJur82tlywb8FEhoN3m73LnHKq9X80i2Fsatd2GB4hoOMwazbM9FacK0X~pZ8hLROyg~3rI5pL9yGzrAo9awpsNVdyVHvXDkaIY7UHzxSm1x4CBzEA6NKLKUijZGBfZd8SIb5Z5lNUHk8cNalgTKKohimpvjZ52wVGESSMlr~9qhcXQYK77GhELvLeEHYdHJcq3f1VS1TTu~BEqsyRf~-Wg__",
      answer1: "Одно",
      answer2: "Два.",
      answer3: "Четыре",
      correctAnswer: 2,
      desc: "Разделительная полоса примыкающей дороги справа делит данную дорогу на две проезжие части. Разметка 1.3 (двойная сплошная линия) такого права не имеет. Поэтому этот перекрёсток имеет два пересечения проезжих частей. (Пункт 1.2 ПДД термин «Разделительная полоса»)",
    },
    {
      ticket: "Билет 1",
      question: "16. Эти знаки обязывают соблюдать дистанцию:",
      image:
        "https://s3-alpha-sig.figma.com/img/c620/ad82/23e6b98042b728ab7071b05ccb647aca?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZtbPF-ArA4DBWeHnfFk9XQ8yviEfTSwunc78taLuqp~TGLV9asPlYipo9kCFR6Hp8FYOcloM3p0o3Lm0fekCwhjjpnULY-5qXdOiqh1~uxiAWh08OvYScicfAzXC9xHGw12ECQwzauR2QNh1JmeDsL0BHlbAFkliqyhYU-JJkWQdi5Wp16CRUz~n9sUiUicJmVJ2BpQ7E3gqoPiFWkgxsP9KzkvHF6s5RtKdDh4gJO3EtJx0rGxpmk98YSi4Ivj~TGNHg5enlzzi~5X2vedjFJr9kztEf~9DhG41F8NcS5Jgh0ZPbtL538D~rAuLxv0eaCEeGh0nHaD6bmbHo2iPHQ__",
      answer1: "Менее 70 м на протяжении 100 м.",
      answer2: "Не менее 70 м на протяжении 100 м.",
      answer3: "От 70 м до 100 м.",
      correctAnswer: 2,
      desc: "Знак 3.16 «Ограничение минимальной дистанции» запрещает движение транспортных средств с дистанцией между ними меньше указанной на знаке. Табличка 8.2.1 «Зона действия», установленная под знаком, указывает зону действия знака. В данном случае она равна 100 метрам от места установки знака. («Дорожные знаки»)",
    },
    {
      ticket: "Билет 1",
      question: "17. В каких направлениях вам разрешено продолжить движение?",
      image:
        "https://s3-alpha-sig.figma.com/img/7001/cb42/fbb8a501975c2efafb4c563c7e8cf7e1?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8iWYyOdqvfcI9CeF6e55iUcJSrvdPtNom4ld~vRXKWb4k9HCyHHS5PBIRW9Bn-kA5x3Q4KQwp0sgXcq9WOkR7uBhPrUze2qlwF9nlhxHoQfeWf9uC7k5qQKge7Qmdev8izcFqsgPWypIKRRMuuwPynNcBTyZAlt5-24UEq7xp7gCeS4aC9C6PZEQzX3Z~9TFCGpShHchVBM3Ju9Y3ewiZcy9N9F8LNaK5rMtmWsKiBMpxm6-dZr45e1JkE22aIcrVH-v9uxCx9M8uvQwhe-9BYDJV-fTbW8weKfDYWRRQmf~blfMoW9wHlu~2eMvLTO6gwwjGu3iaUQWyLGgwg4tw__",
      answer1: "Только прямо.",
      answer2: "Прямо или налево.",
      answer3: "Прямо, налево или в обратном направлении.",
      correctAnswer: 2,
      desc: "Со средней полосы, над которой расположен знак 5.15.2 «Направления движения по полосе», разрешается движение прямо и поворот налево. Разворот был бы разрешён в случае расположения т. с. на крайней левой полосе. («Дорожные знаки»)",
    },
    {
      ticket: "Билет 1",
      question:
        "18. На каком расстоянии от знака Вам разрешено поставить автомобиль на стоянку?",
      image:
        "https://s3-alpha-sig.figma.com/img/daef/e434/f554ad4cc7dfe211d7d84d5d347b7d45?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hB8dxMqEwqVHFpaRt9-fYImH8IKBitg2sOTfIpsnlvM3FK18N1EuiReSCaMeHfHmmHmxBrPoFraezFF6heCG5mRp9JVb1jRZza3xINhLTHdLy3WwQDvdVECqzINruURMaJsRe-ABYs3xzO4MgWHifiQPHf7WWC0LI4ZAQ2ErY486nPbxW1vro0UujeT-CTG00xxyxeZ4-66e2q2oPgfk1Eh67o1Ntldv4-jvsYJBBK1pSmFdluCRcp7tEFVg46H9wehxuKNImTANmuv1p80ETBuTC6yk0MWz1G7gMabRKSpHs1WzoUvziFvPSCKwSjXibKoq1TZM7Z0A3u6IAe89NQ__",
      answer1: "Не менее 5 м.",
      answer2: "Не менее 10 м.",
      answer3: "Не менее 15 м.",
      correctAnswer: 3,
      desc: "Остановка и стоянка запрещаются ближе 15 м от мест остановки маршрутных транспортных средств, обозначенных разметкой 1.17 (жёлтая зигзагообразная), а при ее отсутствии – от указателя места остановки маршрутных транспортных средств. В изображенной ситуации расстояние от передней части автомобиля должно быть не менее 15 м. (Пункты 12.4, 12.5 ПДД)",
    },
    {
      ticket: "Билет 1",
      question: "19. Эти знаки предупреждают вас:",
      image:
        "https://s3-alpha-sig.figma.com/img/7f35/b236/2c5317d2cf0413ebff4886a92b504c91?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TbhgUZlJHRJgyi8K3ZYCS1u0VcRhNmENaQNc4UkvOERZKh6FGtxfXd0xQ5-BHaXrWxa91Ar4RqX7mb4neY7SjqNH1EkXZyq4BrFxWCKuuBPjz~scw~6E0sVnQkAsGX3zUNleuS2w62XXpXMAAPxuU8opX2DCXM2A88jkTQZ1aIAC3j5lt9tzdOOuOi2yu0QqeRHqoO2bpx7oAQjpHmBnTmv1sZsYQdpHrD9MJ4fCfQX1xjk8haVE48RdX51SvrmXVPtMlUOPdj8y~8ziok3MKRq66WURYgxhS~1Y3R3zv0BT6xB4BmHO5byGjqFz81eLIe-7HHZ4zwXR9UsEpmv2wg__",
      answer1: "О приближении к железнодорожному переезду с тремя путями.",
      answer2:
        "О наличии через 150-300 м железнодорожного переезда без шлагбаума.",
      answer3: "О наличии через 50-100 м железнодорожного переезда.",
      correctAnswer: 3,
      desc: "Со средней полосы, над которой расположен знак 5.15.2 «Направления движения по полосе», разрешается движение прямо и поворот налево. Разворот был бы разрешён в случае расположения т. с. на крайней левой полосе. («Дорожные знаки»)",
    },
    {
      ticket: "Билет 1",
      question:
        "20. Разрешено ли Вам поставить автомобиль на стоянку в этом месте?",
      image:
        "https://s3-alpha-sig.figma.com/img/e484/8e1e/be17aa685ecb32500832f274ac44b072?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=phBfbEQjH7arbbGXU0LUBgA3cC0evUVdQnpKiZ1FPOhLT0YGKfsCGSGm4RLX2pxIpPeEsQSLDLQq98Z-e5waDs4ZSPZmTj1gPRCVEpw7AED45OVxiXfRcQ6h0W9gT3yoZ09xNeJIonWzLAbSlosZgkPb5qYRqbdjRyO-yJceemzqdk7C0SXRQ7n3d-ZPAs4crFj6kSA7AmEVF5T2bXvLyWG-ZiBY~4D02qs3IRbWSrOdB9EwDoI7kpoJ53JDNW6xgYz6-rH2IjDzWpDmT8k5XW1~x8Oqb4N056ZDkRoc2W8d2DMYrr2pR~2r8W0pcyop6JXVEhZZ6k35gIkrix9zfA__",
      answer1: "Можно.",
      answer2: "Разрешено, если вы проживаете рядом с этим местом.",
      answer3: "Запрещено.",
      correctAnswer: 3,
      desc: "В указанном месте можете «парковаться», так как действие знака 3.27 «Остановка запрещена» распространяется согласно табличке 8.2.3 «Зона действия» до знака.",
    }
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AutoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AutoContext.Provider
      value={{
        questions: state.questions,
      }}
    >
      {children}
    </AutoContext.Provider>
  );
};

export default AutoContextProvider;
