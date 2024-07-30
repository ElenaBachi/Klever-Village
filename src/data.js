import {
  SmallHouseGallery,
  BigHouseGallery,
  BikeSrc,
  BathhouseSrc,
  KidsSrc,
  LakeSrc,
  FortressSrc,
  SanctuarySrc,
  BoatSrc,
  GrillGallery,
  BathhouseGallery,
  KidsMainSrc,
  BikeMainSrc,
} from "./images";

export const navigationItems = [
  {
    isSubnav: false,
    name: "о нас",
    href: "/#about",
  },
  {
    isSubnav: false,
    name: "номерной фонд",
    href: "/#inventorys",
  },
  {
    isSubnav: false,
    name: "кафе",
    href: "/#cafe",
  },
  {
    isSubnav: false,
    name: "Чем заняться",
    href: "/activities",
  },
  {
    isSubnav: false,
    name: "Правила проживания",
    href: "/#rules",
  },
  {
    isSubnav: false,
    name: "Дополнительные услуги",
    href: "/#extras",
  },
  {
    isSubnav: false,
    name: "Окрестности",
    href: "/surroundings",
  },
  {
    isSubnav: false,
    name: "Ваши впечатления",
    href: "/#reviews",
  },
  // {
  //   isSubnav: false,
  //   name: "КАК ДОБРАТЬСЯ",
  // },

  // {
  //   isSubnav: true,
  //   name: "КУХНЯ",
  // }
];

export const inventorys = [
  {
    name: "small-house",
    title: "Малый дом",
    description:
      "На территории расположено 6 домов, которые комфортно размещают 2 взрослых + 1 ребенка до 12 лет (дополнительное спальное место на мансарде за дополнительную плату)",
    options: ["оборудованная кухня со всем необходимым", "санузел"],
    accommodationOptions: [
      "двухспальный диван-кровать (4 дома)",
      "две односпальные кровати (2 дома)",
    ],
    prices: [
      {
        title:
          "Стоимость проживания при одноместном размещении",
        price: "6400",
      },
      {
        title: "За второго гостя необходима доплата",
        price: "1000",
      },
    ],
    imgSrcs: SmallHouseGallery,
  },
  // {
  //   name: "medium-house",
  //   title: "Средний дом",
  //   description:
  //     "На территории располагается один дом, который комфортно размещает до 4 человек",
  //   options: [
  //     "спальня с двухспальной кроватью",
  //     "комната с двумя односпальными кроватями",
  //     "кухня-гостиная со всем необходимым",
  //     "санузел",
  //   ],
  //   accommodationOptions: {
  //     price: "8000",
  //   },
  //   imgSrc: MediumHouseSrc,
  // },
  {
    name: "big-house",
    title: "Большой дом ",
    description:
      "На территории располагается один большой двухэтажный дом, который комфортно размещает до 6 человек",
    options: [
      "спальня с двухспальной кроватью",
      "комната с двумя односпальными кроватями",
      "комната с одной полуторной кроватью",
      "уютная кухня-гостиная",
      "на каждом этаже есть санузел",
    ],
    prices: [{
      title: "Стоимость проживания",
      price: "15 000",
    }],
    imgSrcs: BigHouseGallery,
  },
];

export const activitiesMainPage = [
  {
    title: "Аренда квадроцикла",
    imgSrc: BikeSrc,
  },
  {
    title: "Детям",
    imgSrc: KidsSrc,
  },
  {
    title: "Баня на дровах",
    imgSrc: BathhouseSrc,
  },
];

export const activities = [
  {
    id: "bathhouse",
    title: "Баня на дровах",
    text: "Большая баня с парной рассчитанная на 4 человек, где вы сможете расслабиться и провести приятно время за чашечкой горячего ароматного чая с приветственными угощениями (набор орешков, сушек и варенья). Бронировать баню необходимо не менее, чем за 4 часа до желаемого времени посещения)",
    imgSrc: BathhouseGallery,
  },
  {
    id: "grill",
    title: "Гриль зона",
    text: "Небольшая мангальная зона у каждого домика, где вы сможете приготовить любимые блюда. Мангал и шампуры предоставляются бесплатно, но если вдруг вы забыли взять с собой уголь и жидкость для розжига, вы можете приобрести их у нас",
    imgSrc: GrillGallery,
  },
  {
    id: "forKids",
    title: "Детям",
    text: "Детская площадка, интернет-телевидение в номерах, подвижные игры на улице (бадминтон, мяч, батут и др)",
    imgSrc: KidsMainSrc,
  },
  {
    id: "bike",
    title: "Аренда квадроцикла",
    text: "Для тех, кто любит активные прогулки и поездки, мы можем предложить аренду квадроцикла как в летний, так и в зимний период",
    imgSrc: BikeMainSrc,
  },
  {
    id: "boats",
    title: "Прогулки на лодке/сапах (под запрос гостей)",
    text: "Мы с радостью организуем прогулку, необходимо лишь заранее сказать о том, что планируете активно провести время. С собой возьмите подходящую одежду и отличное настроение!",
    imgSrc: BoatSrc,
  },
];

export const rules = [
  {
    title: `Проживание с животными`,
    description: `Возможно проживание с комнатными животными (собаки декоративных пород) за дополнительную плату. Перед бронированием хозяин должен уточнить у администратора возможность заселения с питомцем и сообщить его параметры. Запрещено использовать душевую, а также принадлежности ванной комнаты для ухода за питомцем. Все необходимое для комфортного проживания питомца (миски, корм, поводок и пр.) необходимо привезти с собой. Гость обязан производить уборку территории за животным. В случае причинения ущерба животным имуществу, гость обязан возместить все убытки.`,
  },
  {
    title: `Время заселения/выселения`,
    description: `Рекомендуемое время заезда - 14:00 часов по местному времени. Расчетный час - 12:00 по местному времени. Возможен ранний заезд/поздний выезд за дополнительную плату.`,
  },
  {
    title: `Курение запрещено`,
    description: `Категорически запрещено курение в домиках/номерах. Штраф за курение 10 000 рублей.`,
  },
];

export const extras = [
  {
    title: "Ранний заезд/поздний выезд",
    items: [
      {
        name: 'Услуга "Ранний заезд/Поздний выезд"',
        price: "50% от стоимости суток",
      },
    ],
  },
  {
    title: "Спальное место",
    items: [
      {
        name: "Дети до 5 лет включительно, без дополнительного места",
        price: "бесплатно",
      },
      {
        name: "Дополнительное спальное место для детей 6 - 12 лет",
        price: "1000 ₽ / сутки",
      },
    ],
  },
  {
    title: "Баня на дровах",
    items: [
      {
        name: "Минимальная продолжительность сеанса - 2 часа",
        price: "5000 ₽",
      },
      {
        name: "Каждый последующий час",
        price: "2500 ₽",
      },
    ],
  },
  {
    title: "Проживание с животными",
    items: [
      {
        name: "Дополнительное плата за каждого животного",
        price: "1000 ₽ / сутки",
      },
      {
        name: "Обязательный залог (возвращается при выезде)",
        price: "5000 ₽",
      },
    ],
  },
  {
    title: "Квадроцикл",
    items: [
      {
        name: "Аренда квадроцикла",
        price: "2000 ₽ / час",
      },
    ],
  },
  {
    title: "Принадлежности для мангала",
    items: [
      {
        name: "Уголь",
        price: "350 ₽",
      },
      {
        name: "Жидкость для розжига",
        price: "200 ₽",
      },
    ],
  },
];

export const surroundingsMainPage = [
  {
    title: "Копанское озеро",
    imgSrc: LakeSrc,
  },
  {
    title: "Крепость Копорье",
    imgSrc: FortressSrc,
  },
  {
    title: "Кургальский заказник",
    imgSrc: SanctuarySrc,
  },
];

export const surroundings = [
  {
    title: "Крепость Копорье",
    note: "45 минут",
    paragraphs: [
      "Старинная крепость на полпути между Петербургом и Нарвой, изначально основанная рыцарями Ливонского ордена, а затем захваченная русскими. Крепость интересна для посещения, однако учитывая ее состояние, при желании познакомиться со всеми деталями и дорогу - есть смысл посещать ее летом, когда тепло и сухо. Из 4х башен - три доступны для посещения, хотя отреставрированы не до конца. Большинство стен в очень плачевном состоянии, с проломами оставшимися от штурма 1703 г. Видны многочисленные попытки реставрации или просто укрепления стен. Недавно в крепости начал работать музей.",
    ],
    imgSrc: "",
  },
  {
    title: "Ивангородский музей-крепость",
    note: "1 час",
    paragraphs: [
      "В состав Ивангородского музея входят три отдельно стоящих объекта:",
      "1. Ивангородская крепость.",
      `2. Художественный музей, в котором представлена масштабная коллекция Ивана
      Яковлевича Билибина и его супруги Александры Васильевны Щекатихиной-Потоцкой.`,
      `3. Музей крепостей (работает только в летний период).`,
      "В музее есть немало интерактивных модулей, которые привлекают посетителей всех возрастов: археологическая песочница, в которой можно отыскать и изучить артефакты различных эпох, разборный макет крепости, пазлы, раскраски и многое другое.",
      "В летнее время стены крепости становятся свидетелями исторических событий прошлого и современности. Здесь звучит средневековая и современная музыка, проходят фестивали исторической реконструкции и воздушных змеев, танцевальные и певческие конкурсы, ярмарки, мастер-классы, квесты и много других развлекательных мероприятий.",
      "Обратите внимание! ИВАНГОРОД НАХОДИТСЯ В ПОГРАНИЧНОЙ ЗОНЕ - ВЪЕЗД ТОЛЬКО ПО ПАСПОРТУ РФ + ПРОПУСК!!!",
    ],
    imgSrc: "",
  },
  {
    title: "Копанское озеро",
    note: "30 минут",
    paragraphs: [
      "Живописный уголок природы доступен для отдыха круглый год. В зависимости от сезона здесь можно загорать и плавать, рыбачить и охотиться, кататься на лодках или лыжах и коньках. На озере есть пирсы, удить с которых намного удобнее, чем с берега. Один из них имеет длину 20 метров и уходит на глубину до 6 метров. Другие — покороче, ведут на глубину до 3,5–4 метров. Прозрачность воды позволяет заниматься подводной охотой. На водоеме ежегодно проводятся соревнования по добыче рыбы подобным способом. На восточном берегу Копанского озера есть место, называемое местными жителями Банным мысом. Легенда гласит, что на нем стояла баня, в которую любила наведываться Екатерина II.",
    ],
    imgSrc: "",
  },
  {
    title: "Кургальский заказник",
    note: "30 минут",
    paragraphs: [
      "Один из самых популярных у туристов заказников Ленинградской области. Он расположен на границе с Эстонией, в пограничной зоне, что сберегло природу этих мест от массовой застройки. Кургальский заказник включает Кургальский полуостров и прилегающую акваторию Финского залива с островами Кургальского и Тискольского рифов и др.",
      "Как и на всех охраняемых территориях, в заказнике действуют правила поведения, направленные на то, чтобы посетители не беспокоили животных: нельзя обустраивать туристические стоянки, разводить костры, заезжать на автомобилях и парковаться (кроме специально отведенных мест) и т.п.",
    ],
    imgSrc: "",
  },
  {
    title: "Экотропа «Долина реки Выбья и Лужская губа»",
    note: "25 минут",
    paragraphs: [
      "В Кургальском заказнике открылась экотропа — оборудованный пешеходный маршрут. Здесь имеются смотровая вышка, «рупор» для усиления звуков моря, «Комната тишины».",
      "Восхитительные сосны в песчаных дюнах, берег залива, смотровая башня и бесконечный деревянный настил. Полный покой и умиротворение, 4,5 км и 3,5 часа восторга.",
      "В узловых точках тропы размещены уникальные рукотворные объекты, задача которых приблизить человека к живой природе. Здесь можно затаиться среди камышей и тростников на платформе «Комната тишины», послушать в естественном усилении шум ветра и волн на площадке «Рупор», охватить взглядом весь маршрут на смотровой «Башне».",
      "На маршруте оборудованы места для отдыха, лавочки. Особо рекомендуем остановиться в платформе «Комната тишины».",
      "Не забудьте взять воду и перекус, а мусор забрать с собой!",
      "Как добраться:",
      "Укажите в навигаторе Пешеходный экологический маршрут Долина реки Выбья и Лужская губа время в пути (на машине) от нас 25мин. Координаты: 59.676381, 28.235280",
    ],
    imgSrc: "",
  },
  {
    title: "Бетонный корабль",
    note: "25 минут",
    paragraphs: [
      "Большинству будет сложно поверить, однако в XIX и XX веке некоторое время пользовались немалой популярностью железобетонные суда. Пик строительства железобетонных кораблей пришелся на Первую и Вторую Мировые Войны. Строились они в основном в США, и строились на небольшой срок для оказания срочной помощи в военное время. Так как в те годы сталь была на вес золота, строили, собственно, из железобетона. На постройку каждого уходило не более одного месяца. Никто не думал, что они окажутся такими долговечными. После войны многие корабли использовались в качестве барж и сухогрузов. Один из таких реликтов находится под Петербургом. Баржа брошена немецким флотом во времена войны при входе в устье реки Луга.",
    ],
    imgSrc: "",
  },
  {
    title: "Башня Дибича",
    note: "20 минут",
    paragraphs: [
      "Усадьба Дибича находилась очень далеко от Петербурга - на Сойкинском полуострове (южное побережье Финского залива), возле ижорской деревни Старое Гаркалово. Если вы заходите посетить это место, то имейте в виду, что с шоссе ничего не видно. Найти руины можно, если в начале деревни повернуть на вымощенную булыжником старинную дорогу. Она и приведет к башне, которая сохранилась от дворца, что был здесь. Во время Второй Мировой войны дворец оказался на территории, занятой немцами. Говорят, немцы сделали на башне маяк для своих катеров. Так или нет, но в ходе войны усадебный дворец оказался разрушен, осталась лишь одна башня.",
    ],
    imgSrc: "",
  },
  {
    title: "Усадьба Альбрехтов в Котлах",
    note: "30 минут",
    paragraphs: [
      "Старинная усадьба, принадлежавшая русскому дворянскому роду Альбрехтов. В настоящее время находится в разрушенном состоянии, но если хочется прикоснуться к истории, это место вам точно понравится.",
    ],
    imgSrc: "",
  },
  {
    title: "Андерсенград",
    note: "45 минут",
    paragraphs: [
      "Андерсенград - это детский городок, построенный в Ленинградской области в честь 175-летия великого сказочника Ганса Христиана Андерсена. Более 30-лет сказочный комплекс Андерсенград радует взрослых и детей Соснового Бора, а также туристов.",
      "Все дома в Андерсенграде выполнены из камня, крыши многих из них покрыты красной черепицей. Здесь все, как в настоящем западноевропейском старинном городе — Ратушная площадь и крепостная стена с башнями, настоящая пушка и навесной мост, фонтан и подземный ход. Каждый объект здесь связан с творчеством писателя — дом Оле Лукойе и башня Оловянного солдатика, Детский театр «Дюймовочка» и торговые ряды «Три брата», бассейн, украшенный изображением русалки и дельфинов и театральная площадь.",
      "В сказочном комплексе есть и гостья - героиня сказки братьев Гримм Белоснежка, ее именем названо детское кафе.",
      "Вы сможете увидеть башни с бойницами и флюгерами, украшенными изображением сказочных героев, особенно красива центральная башня с балконом и часами. Дети могут покататься на велосипеде и самокате по детской автодороге. Для обучения ребят правилам дорожного движения при открытии городка на перекрестке работал светофор.",
      "Общая площадь городка составляет 2 гектара, для оформления его строений применялись черепица, мозаичные панно и витражи, гобелены и дерево.",
    ],
    imgSrc: "",
  },
];

export const reviews = [
  {
    id: 1,
    text: "День добрый, хотел оставить отзыв и свои впечатления от пребывании на базе отдыха « Клевер ». Огромное спасибо ребятам Сергею, и Анне, за гостеприимство и теплый прием, классные домики чистые уютные оборудованные всем необходимым для проживания. Также вас порадует Отличный банный комплекс на территории, с горячим чаем и ореховым ассорти и свежими кленовыми вениками. Большим сюрпризом было то, что нас и всех проживающих на базе отдыха Сергей, и Анна пригласили за совместный праздничный стол посвященный  8-марта, где было барбекю, настольные игры для детей и душевная праздничная атмосфера. Всем советую из 10, 10 балов. И все эти удовольствия по демократичным ценам.👍👍👍",
  },
  {
    id: 2,
    text: 'Пребывание в гостевом доме "Клевер" - оставило очень приятное впечатление! Новые чистые уютные домики, отзывчивый и приветливый персонал. В доме есть абсолютно все, как в хорошем отеле и даже больше. Дети остались в восторге от спального места наверху. Отдельно хочу отметить шикарную баню, чистая,  хорошо протопленная с уютной комнатой отдыха, ароматным чаем и вкусным вареньем. В 10 минутах езды живописный берег  финского залива где можно прогуляться.',
  },
  {
    id: 3,
    text: "Отдыхали здесь несколько дней вместе с маленьким ребенком, очень понравилось! В домиках чисто, есть все необходимое, есть где погулять, очень спокойно. Персонал очень любезный, предоставили детский стульчик. Спасибо Клеверу, обязательно приедем еще!",
  },
  {
    id: 4,
    text: "Спасибо базе Клевер за чудесные  выходные! Мы останавливались в большом доме, и нам очень понравилось — кухня полностью оборудована, с собой ничего везти не надо, кровати удобные, отдельный плюс, что разрешили проживание с собачкой! Очень понравилась баня с комнатой отдыха, чаем и домашним вареньем! Спасибо за гостеприимство!",
  },
  {
    id: 5,
    text: "Были с мужем в «клевере» на выходные. Хотелось уехать далеко на природу, отдохнуть от города и работы. Пока локация развивается, цены очень приятные! А дома - новые, все супер чисто, уютно и стильно. Много ездили вокруг - залив очень красивый в 5-10 минутах езды, эко тропа. В общем для перезагрузки вдвоем - супер вариант) Ждем открытие ресторана:) Приедем ещё!",
  },
  {
    id: 6,
    text: "Хорошее место,далеко от города,чистый воздух! Рядом финский залив,очень классно.Мы были семьей,два взрослых и ребенок,нам очень понравилось.Все удобно ,чисто ,аккуратно) Домики хорошие,современные)",
  },
  {
    id: 7,
    text: "Прекрасное место для отдыха) Лес,финский залив,тишина) Цена достойная. Домики комфортные,уютные.",
  },
];

export const cafe = {
  menu: [
    {
      title: "Завтрак",
      price: "включен в стоимость проживания",
    },
    {
      title: "Завтрак для гостей без проживания",
      price: "1000 ₽",
    },
    {
      title: "Обед",
      price: "700 ₽",
      note: [
        "по предзаказу или если есть дополнительные порции",
        "Комплексный: салат, первое  блюдо, основное блюдо + гарнир, напитки (морс, чай, кофе)",
      ],
    },
    {
      title: "Ужин",
      price: "800 ₽",
      note: [
        "по предзаказу или если есть дополнительные порции",
        "Комплексный: салат, основное блюдо+ гарнир, домашняя выпечка, напитки( морс, чай, кофе)",
      ],
    },
  ],
  kidsMenu: [
    { title: "Комплексный обед", price: "700 ₽" },
    { title: "Суп или второе (на выбор) + напиток", price: "350 ₽" },
    { title: "Комплексный ужин", price: "800 ₽" },
  ],
  extras: [
    { title: "Кофе", price: "200 ₽" },
    { title: "Чай", price: "100 ₽" },
  ],
  workingHours: [
    {
      title: "Завтрак",
      description: ["По будням c 7:00 до 9:00", "По выходным с 7:00 до 10:00"],
    },
    {
      title: "Обед",
      description: ["С 13:00 до 14:00"],
    },
    {
      title: "Ужин",
      description: ["С 18:30 до 20:00"],
    },
  ],
};
