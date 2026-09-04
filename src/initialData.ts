import { WebsiteData } from './types';

// Locked Official Royal Crest PNG (Sapphire & Gold harmonic palette)
export const DEFAULT_ROYAL_CREST = '/official-royal-crest.png';

// Locked Official Reigning Monarch Portrait PNG
export const DEFAULT_MONARCH_IMAGE = '/official-monarch-portrait.png';

export const initialWebsiteData: WebsiteData = {
  crest: {
    imageUrl: DEFAULT_ROYAL_CREST,
    scale: 1.0,
    offsetX: 0,
    offsetY: 0,
    glowIntensity: 'imperial',
    customTitle: 'SAPPHIRE COUNTRY',
    customSubtitle: 'COUNTRY OF SAPPHIRE'
  },
  overview: {
    officialNameMongolian: 'Саффир улс',
    officialNameEnglish: 'Country of Sapphire',
    jurisdiction: 'Skill Faith ZGRP',
    monarch: 'Эрхэм Дээдэс Хаан / Хатан',
    monarchTitle: 'ТӨРИЙН ТЭРГҮҮН, ХААН ШИРЭЭНИЙ ЭЗЭН',
    monarchImage: DEFAULT_MONARCH_IMAGE,
    monarchScale: 1.0,
    monarchOffsetX: 0,
    monarchOffsetY: 0,
    monarchQuote: 'Индранил эрдэнийн мөнхийн гэрэл дор эзэнт гүрний нэр хүнд, төрийн эрх үеэс үед өвлөгдөнө.',
    stateSymbolMongolian: 'Индранил чулуу',
    stateSymbolEnglish: 'Blue Sapphire',
    motto: 'Сүр жавхлан, Итгэл үнэмшил, Мөнхийн Индранил',
    foundingEra: 'Саффир улс',
    capitalCity: 'Селестин (Celestine Capital)',
    nationalAnthemTitle: 'Индранил Титмийн Сүлд Дуулал',
    nationalAnthemExcerpt: 'Мөнхийн цэнхэр гэрэл дор эзэнт гүрэн мандан бадарч, язгууртны алдар нэр үеийн үед цуурайтна.',
    crestDescription: 'Хааны сүлд нь төрийн тусгаар тогтнол, дээд язгуур, индранил эрдэнийн мөнхийн бат бэх чанарыг бэлгэдэнэ.',
    bannerImage: ''
  },
  royalTitles: [
    {
      id: 'title-01',
      number: '01',
      mongolianTitle: 'Эрхэм Дээдэс, Төрийн тэргүүн',
      englishTitle: 'His/Her Majesty the Monarch',
      description: 'Хаан ширээг өөрийн эрхээр эзэмшиж буй хаан болон хатан хааны ерөнхий нэршил.',
      rankCategory: 'monarch',
      holder: 'Хаан ширээний дээд хэргэм',
      iconName: 'Crown'
    },
    {
      id: 'title-02',
      number: '02',
      mongolianTitle: 'Эрхэм Дээдэс, Хаан',
      englishTitle: 'His Majesty the King',
      description: 'Саффир улсын төрийн тэргүүн бөгөөд хаан ширээний дээд хэргэм.',
      rankCategory: 'sovereign',
      holder: 'Хаан ширээний тэргүүн хэргэм',
      iconName: 'Shield'
    },
    {
      id: 'title-03',
      number: '03',
      mongolianTitle: 'Эрхэм Дээдэс, Хатан',
      englishTitle: 'Her Majesty the Queen',
      description: 'Хааны гэргий болон хаан ширээг өөрийн эрхээр эзэмшигч хатан гэсэн хоёр хэлбэртэй байна.',
      rankCategory: 'consort',
      holder: 'Хатан хааны дээд хэргэм',
      iconName: 'Sparkles'
    },
    {
      id: 'title-04',
      number: '04',
      mongolianTitle: 'Титэмт Ханхүү',
      englishTitle: 'Crown Prince',
      description: 'Хаан ширээг залгамжлах албан ёсны эрэгтэй өв залгамжлагч.',
      rankCategory: 'prince',
      holder: 'Хаан ширээний өв залгамжлах хэргэм',
      iconName: 'Award'
    },
    {
      id: 'title-05',
      number: '05',
      mongolianTitle: 'Титэмт Гүнж',
      englishTitle: 'Crown Princess',
      description: 'Хаан ширээг залгамжлах албан ёсны эмэгтэй өв залгамжлагч.',
      rankCategory: 'princess',
      holder: 'Хаан угсааны тэргүүн гүнжийн хэргэм',
      iconName: 'Gem'
    },
    {
      id: 'title-06',
      number: '06',
      mongolianTitle: 'Ханхүү',
      englishTitle: 'Prince',
      description: 'Хаан болон хатан хааны хүү.',
      rankCategory: 'prince',
      holder: 'Хаан угсааны ханхүүгийн хэргэм',
      iconName: 'Compass'
    },
    {
      id: 'title-07',
      number: '07',
      mongolianTitle: 'Гүнж',
      englishTitle: 'Princess',
      description: 'Хаан болон хатан хааны охин.',
      rankCategory: 'princess',
      holder: 'Хаан угсааны гүнжийн хэргэм',
      iconName: 'Sun'
    }
  ],
  courtRanks: [
    {
      id: 'court-08',
      number: '08',
      mongolianTitle: 'Их Канцлер',
      englishTitle: 'Lord Grand Chancellor',
      informalTitle: 'Хааны баруун гар',
      summary: 'Хааны дэргэдэх хамгийн өндөр албан тушаалтнуудын нэг бөгөөд төрийн өдөр тутмын үйл ажиллагааг зохицуулна.',
      duties: [
        'Хааны нэрийн өмнөөс төрийн байгууллагуудтай харилцах, хаанд зөвлөгөө өгөх, хааны зарлиг болон шийдвэрийн хэрэгжилтийг удирдах үүрэгтэй.',
        'Төрийн хүлээн авалт, ёслол, титэм залах болон бусад төрийн хэмжээний арга хэмжээг зохион байгуулна.',
        'Хааны зөвшөөрлөөс гадна ордны дотоод үйл ажиллагаа, баяр ёслолын тодорхой асуудлаар шийдвэр гаргах эрхтэй.'
      ],
      currentHolder: 'Төрийн Дээд Канцлер',
      badgeSymbol: 'Scroll'
    },
    {
      id: 'court-09',
      number: '09',
      mongolianTitle: 'Хааны Дээд Зөвлөх',
      englishTitle: 'Lord High Counselor',
      informalTitle: 'Төрийн Бодлогын Батлан Даагч',
      summary: 'Хаанд улс төр, төрийн бодлого болон улс орны асуудлаар зөвлөгөө өгнө.',
      duties: [
        'Хаанд улс төр, төрийн бодлого болон улс орны стратегийн асуудлаар нарийвчилсан дүн шинжилгээ, зөвлөгөө өгөх.',
        'Хааны зарлиг, бичиг баримт, төрийн гадаад дотоод харилцааг хариуцах.',
        'Хааны уулзалт, хуваарь болон төрийн албан харилцааг өндөр түвшинд зохицуулах.'
      ],
      currentHolder: 'Бодлогын Тэргүүн Зөвлөх',
      badgeSymbol: 'BookOpen'
    },
    {
      id: 'court-10',
      number: '10',
      mongolianTitle: 'Ордны Зарлагч',
      englishTitle: 'Court Herald',
      informalTitle: 'Хааны Зарлигийн Дуу Хоолой',
      summary: 'Төрийн ордноос гарсан албан ёсны шийдвэр, хариу болон мэдэгдлийг иргэдэд зарлана.',
      duties: [
        'Баяр ёслолын зарлал хийх, эзэнт гүрний баярын ёслолыг нээж тунхаглах.',
        'Ордны хурлын цагийг мэдээлэх, хурлын сэдвүүдийг нэгтгэн бэлтгэж Их Канцлерт хүргүүлэх үүрэгтэй.',
        'Төрийн шийдвэр, язгууртны цол олгох тунхаглалыг нийтэд дуурсгах.'
      ],
      currentHolder: 'Төрийн Зарлагч Магистр',
      badgeSymbol: 'Megaphone'
    }
  ],
  nobilityHierarchy: [
    // HIGH NOBILITY
    { id: 'nob-11', number: '11', mongolianTitle: 'Их Гүн', englishTitle: 'Grand Duke', category: 'high', rankLevel: 1, description: 'Дээд язгууртны тэргүүн эрэмбэ, өргөн уудам нутаг дэвсгэр, цэргийн бүрэн эрх эзэмшигч.', exampleFamilies: ['Montaque', 'Obelia'] },
    { id: 'nob-12', number: '12', mongolianTitle: 'Их Гүнгийн ахайтан', englishTitle: 'Grand Duchess', category: 'high', rankLevel: 1, description: 'Их гүнтний гэргий эсвэл өөрийн эрхээр Их гүнт улсыг эзэмшигч хатагтай.', exampleFamilies: ['Montaque'] },
    { id: 'nob-13', number: '13', mongolianTitle: 'Вант Гүн', englishTitle: 'Sovereign Duke', category: 'high', rankLevel: 2, description: 'Хаант улсын дотор бие даасан засаглал бүхий бүс нутгийг захирагч.', exampleFamilies: ['Agriche'] },
    { id: 'nob-14', number: '14', mongolianTitle: 'Вант Гүнгийн ахайтан', englishTitle: 'Sovereign Duchess', category: 'high', rankLevel: 2, description: 'Вант гүнтний гэргий, бүс нутгийн дээд хатагтай.', exampleFamilies: ['Agriche'] },
    { id: 'nob-15', number: '15', mongolianTitle: 'Гүн', englishTitle: 'Duke', category: 'high', rankLevel: 3, description: 'Түүхт томоохон гүнт нутгийн эзэн, эзэн хааны итгэлт ноён.', exampleFamilies: ['Charmiell', 'Sergeyev'] },
    { id: 'nob-16', number: '16', mongolianTitle: 'Гүнгийн ахайтан', englishTitle: 'Duchess', category: 'high', rankLevel: 3, description: 'Гүнтний гэргий, ордны өндөр нөлөө бүхий язгууртан.', exampleFamilies: ['Charmiell'] },

    // MIDDLE NOBILITY
    { id: 'nob-17', number: '17', mongolianTitle: 'Маркиз', englishTitle: 'Marquess', category: 'middle', rankLevel: 4, description: 'Хил хязгаарын чухал бүс нутаг болон бэхлэлт бүхий газар нутгийн захирагч.', exampleFamilies: ['Castiglione'] },
    { id: 'nob-18', number: '18', mongolianTitle: 'Маркизын ахайтан', englishTitle: 'Marchioness', category: 'middle', rankLevel: 4, description: 'Маркизийн гэргий, хил орчмын язгууртны төлөөлөл.', exampleFamilies: ['Castiglione'] },
    { id: 'nob-19', number: '19', mongolianTitle: 'Эрхэм Гүн', englishTitle: 'Count', category: 'middle', rankLevel: 5, description: 'Хот мужийн засаг захиргаа, эдийн засгийн төвийг удирдагч.', exampleFamilies: ['Vensanting', 'Avrevielle'] },
    { id: 'nob-20', number: '20', mongolianTitle: 'Эрхэм Гүнгийн ахайтан', englishTitle: 'Countess', category: 'middle', rankLevel: 5, description: 'Эрхэм гүнгийн хатан, соёл гэгээрлийг ивээн тэтгэгч.', exampleFamilies: ['Vensanting'] },
    { id: 'nob-21', number: '21', mongolianTitle: 'Виконт', englishTitle: 'Viscount', category: 'middle', rankLevel: 6, description: 'Гүн болон Маркизын дэд захирагч, бүсийн шүүн таслах эрх бүхий ноён.', exampleFamilies: ['Bismarck'] },
    { id: 'nob-22', number: '22', mongolianTitle: 'Виконтын ахайтан', englishTitle: 'Viscountess', category: 'middle', rankLevel: 6, description: 'Виконтын гэргий, орон нутгийн дээд язгууртан.', exampleFamilies: ['Bismarck'] },
    { id: 'nob-23', number: '23', mongolianTitle: 'Барон', englishTitle: 'Baron', category: 'middle', rankLevel: 7, description: 'Эдлэн газар, цайз бүхий язгууртны үндсэн түвшний цолтон.', exampleFamilies: ['Riegrow', 'Chandler'] },
    { id: 'nob-24', number: '24', mongolianTitle: 'Бароны ахайтан', englishTitle: 'Baroness', category: 'middle', rankLevel: 7, description: 'Бароны гэргий, эдлэнгийн удирдагч хатагтай.', exampleFamilies: ['Riegrow'] },

    // NOBLE
    { id: 'nob-25', number: '25', mongolianTitle: 'Ихэс Ноён', englishTitle: 'Lord', category: 'noble', rankLevel: 8, description: 'Эзэнт гүрний хүндэт язгууртан ноён.', exampleFamilies: ['Montfier', 'Ivan'] },
    { id: 'nob-26', number: '26', mongolianTitle: 'Ихэс Хатагтай', englishTitle: 'Lady', category: 'noble', rankLevel: 8, description: 'Ордны хүндэт язгууртан хатагтай.', exampleFamilies: ['Serena', 'Amethyst'] },
    { id: 'nob-27', number: '27', mongolianTitle: 'Цолгүй язгууртан', englishTitle: 'Untitled Noble', category: 'noble', rankLevel: 9, description: 'Язгууртан овог, гэр бүлээс гаралтай боловч тусгай цол эзэмшдэггүй язгууртан иргэд.', exampleFamilies: ['Noble Kinsmen'] },

    // TITLE / HONORARY
    { id: 'nob-28', number: '28', mongolianTitle: 'Хотын Захирагч', englishTitle: 'Mayor', category: 'title', rankLevel: 10, description: 'Эзэнт гүрний томоохон хотуудын захиргаа, худалдаа хариуцсан тэргүүн.' },
    { id: 'nob-29', number: '29', mongolianTitle: 'Яамны Тэргүүн', englishTitle: 'Provost', category: 'title', rankLevel: 11, description: 'Төрийн тусгай алба, хяналт болон хууль сахиулах салбарын дарга.' },
    { id: 'nob-30', number: '30', mongolianTitle: 'Хүлэг Баатар', englishTitle: 'Knight', category: 'title', rankLevel: 12, description: 'Хааны эр зоригийн батламж бүхий цэрэг дайны алдарт баатар.' },
    { id: 'nob-31', number: '31', mongolianTitle: 'Ордны Үйлчлэгч', englishTitle: 'Royal Retainer / Servant', category: 'title', rankLevel: 13, description: 'Хааны ордны дотоод үйл хэрэг, ёслолын өдөр тутмын хүндэт алба хаагч.' }
  ],
  regions: [
    {
      id: 'region-celestine',
      name: 'Селестин',
      englishName: 'Celestine',
      geographicPosition: 'Central Region · Capital',
      description: 'Саффир улсын улс төр, төрийн захиргаа, хааны ордон болон санхүүгийн төв. Төрийн захиргаа, хааны ордон, санхүү болон улсын төв байгууллагууд төвлөрнө.',
      origin: 'Эртний Саффир',
      areaKm2: '50,000 км²',
      leadingHouse: 'Obelia',
      regionalLeader: 'Zaifer',
      concentratedHouses: ['Obelia'],
      tax: '3,000 зоос',
      mainBuildings: [
        'Либертиа Хатан хааны шилтгээн',
        'Цагаан ордон',
        'Төрийн ордон',
        'Төв банк',
        'Хүлээн авах ордон',
        'Хааны цэцэрлэгт хүрээлэн',
        'Эдлэн газар',
        'Тосгон'
      ],
      naturalFeatures: [
        'Хааны цэцэрлэгт хүрээлэн',
        'Мөнгөн нуур',
        'Индранил усан оргилуур',
        'Ногоон дэнж'
      ],
      mainProducts: [
        'Төрийн бичиг баримт',
        'Улсын мөнгөн тэмдэгт',
        'Хааны тамга бүхий бүтээгдэхүүн',
        'Санхүүгийн үйлчилгээ'
      ],
      estateHolders: ['Хааны гэр бүл', 'Obelia овог', 'Дээд язгууртнууд'],
      historicalNotes: 'Эрт дээр үеэс Саффирын хаадын төв өргөө байрлаж ирсэн хамгийн хүчирхэг, сүрлэг нийслэл бүс нутаг.',
      mapCoordinates: { x: 50, y: 48 }
    },
    {
      id: 'region-ludwinburg',
      name: 'Людвинбург',
      englishName: 'Ludwinburg',
      geographicPosition: 'Eastern Region',
      description: 'Газар тариалан, цэцэрлэгжүүлэлт, гар урлал болон худалдаа хөгжсөн бүс. Байгаль, түүхэн дурсгал болон соёлын үйл ажиллагаагаараа алдартай.',
      origin: 'Эртний Саффир',
      areaKm2: '10,000 км²',
      leadingHouse: 'Montaque',
      regionalLeader: 'Tiara Von Montaque',
      concentratedHouses: ['Montaque', 'Castiglione'],
      tax: '3,000 зоос',
      mainBuildings: [
        'STARWISH театр',
        'Түүхийн музей',
        'Номын сан',
        'Одон орон судлалын төв',
        'Төв зах',
        'Худалдаачдын гудамж',
        'Урлан, дэлгүүрүүд',
        'Харуулын цамхаг',
        'Хуаран'
      ],
      naturalFeatures: [
        'Тариалан',
        'Жимсний талбай',
        'Усан үзмийн талбай',
        'Ой',
        'Цэцэрлэгт хүрээлэн',
        'Цөөрөм',
        'Нуур',
        'Салхин тээрэм',
        'Усан тээрэм',
        'Гэрэлт цохны хөндий',
        'Хүрхрээ',
        'Агуй',
        'Хавцал'
      ],
      mainProducts: [
        'Жимс',
        'Хүнсний ногоо',
        'Цэцэг',
        'Эмийн ургамал',
        'Зөгийн бал',
        'Шавар',
        'Шил',
        'Шаазан',
        'Модон эдлэл',
        'Энгийн хөгжмийн зэмсэг'
      ],
      estateHolders: ['Montfier', 'Serena', 'Ivan', 'Amethyst', 'Ren болон бусад язгууртан'],
      historicalNotes: 'Соёл урлаг, одон орон, гар урлалын өлгий нутаг.',
      mapCoordinates: { x: 78, y: 52 }
    },
    {
      id: 'region-saint-elynthia',
      name: 'Сент Элинтиа',
      englishName: 'Saint Elynthia',
      geographicPosition: 'Southern Region',
      description: 'Ферм, мал аж ахуй, загас агнуур болон нэхмэлийн үйлдвэрлэл давамгайлсан, Саффирын хүнс ба түүхий эдийн гол ханган нийлүүлэгч бүс.',
      origin: 'Эртний Саффир',
      areaKm2: '10,000 км²',
      leadingHouse: 'Charmiell',
      regionalLeader: 'Serena Charmiell',
      concentratedHouses: ['Charmiell', 'Vensanting'],
      tax: '3,000 зоос',
      mainBuildings: [
        'Фермүүд',
        'Эдлэн газрууд',
        'Их дэлгүүр',
        'Цэцэрлэг',
        'Боомт',
        'Нуур'
      ],
      naturalFeatures: [
        'Өмнөд тэнгисийн булан',
        'Шүрэн эрэг',
        'Ногоон нуга',
        'Цэнгэг нуурууд',
        'Цэцэгт хөндий'
      ],
      mainProducts: [
        'Загас',
        'Хясаа',
        'Далайн бүтээгдэхүүн',
        'Шүр',
        'Сувд',
        'Мах',
        'Сүү',
        'Өндөг',
        'Ноос',
        'Ноолуур',
        'Торго',
        'Арьс шир',
        'Савхи',
        'Олс',
        'Тор',
        'Завь болон усан онгоц'
      ],
      estateHolders: ['Arlecchino Montaque', 'Andres Agriche'],
      historicalNotes: 'Эзэнт гүрний далайн худалдаа, хүнс болон нэхмэлийн алтан сан.',
      mapCoordinates: { x: 52, y: 82 }
    },
    {
      id: 'region-sunset-vale',
      name: 'Сансет Вэйл',
      englishName: 'Sunset Vale',
      geographicPosition: 'Western Region',
      description: 'Саффирын уул уурхай, үнэт чулуу, үнэт металл болон дархны урлалын гол төв.',
      origin: 'Эртний Саффир',
      areaKm2: '10,000 км²',
      leadingHouse: 'Agriche',
      regionalLeader: 'Andres Agriche',
      concentratedHouses: ['Agriche', 'Avrevielle'],
      tax: '3,000 зоос',
      mainBuildings: [
        'Уурхай',
        'Дархны төв',
        'Эдлэн газрууд',
        'Сүм',
        'Цэцэрлэг',
        'Нуур'
      ],
      naturalFeatures: [
        'Эрдэнийн хадан уулс',
        'Алтан жалга',
        'Гүн уурхайн хонгилууд',
        'Нар жаргах хавцал'
      ],
      mainProducts: [
        'Алт',
        'Мөнгө',
        'Үнэт металл',
        'Үнэт чулуу',
        'Эрдэнэс',
        'Зоос',
        'Үнэт эдлэл',
        'Дархны бүтээл',
        'Тансаг тавилга',
        'Сүйх тэрэг',
        'Механик тоноглол',
        'Хөгжмийн зэмсэг'
      ],
      estateHolders: ['Andres Agriche', 'Ivan Chandler', 'Roxana Agriche'],
      historicalNotes: 'Саффир улсын эрдэнэс, зоос цутгамал, төмөрлөг боловсруулалтын төв өлгий.',
      mapCoordinates: { x: 22, y: 55 }
    },
    {
      id: 'region-monolith',
      name: 'Монолит',
      englishName: 'Monolith',
      geographicPosition: 'Northern Region',
      description: 'Саффирын хойд хязгаарын стратегийн болон цэргийн бүс. Хойд нутаг нь түүхийн өөр өөр үед хааны гэр бүлийн гишүүд болон язгууртан ноёдод олгогдож ирсэн бөгөөд одоо Ren Von Montaque-ийн мэдэлд байна.',
      origin: 'Дундад үеийн Саффир',
      areaKm2: '10,000 км²',
      leadingHouse: 'Sergeyev',
      regionalLeader: 'Ren Von Montaque',
      concentratedHouses: ['Sergeyev', 'Bismarck', 'Riegrow'],
      tax: '3,000 зоос',
      mainBuildings: [
        'Ан агнуурын байгууллага',
        'ШШЯ-ны бааз',
        'Цайз',
        'Шилтгээн',
        'Хатан хааны шилэн цайз'
      ],
      naturalFeatures: [
        'Цаст өндөр оргилууд',
        'Мөнх цэвдэгт ой',
        'Хойд туйлын туяат хадан хясаа',
        'Гүн хавцлын бэхлэлт'
      ],
      mainProducts: [
        'Ан агнуурын бүтээгдэхүүн',
        'Мах',
        'Яс',
        'Эвэр',
        'Үс',
        'Арьс шир',
        'Хүйтний хувцас',
        'Модон зэвсэг',
        'Жад',
        'Нум сум',
        'Нүүрс',
        'Төмөр',
        'Зэс',
        'Барилгын мод',
        'Түлээ'
      ],
      estateHolders: ['Ren Von Montaque', 'Sergeyev овог', 'Хойд нутгийн цэргийн жанжид'],
      historicalNotes: 'Хойд нутаг нь түүхийн өөр өөр үед хааны гэр бүлийн гишүүд болон язгууртан ноёдод олгогдож ирсэн бөгөөд одоо Ren Von Montaque-ийн мэдэлд байна.',
      mapCoordinates: { x: 50, y: 18 }
    }
  ],
  landValues: [
    {
      id: 'land-01',
      regionId: 'region-celestine',
      regionName: 'Central Region — Obelia (Селестин)',
      zoneTitle: 'Төв Бүс — Obelia',
      pricePerHa: '1,000,000 зоос',
      pricePerHaNumeric: 1000000,
      pricePerKm2: '2,000,000 зоос',
      pricePerKm2Numeric: 2000000,
      economicNotes: 'Нийслэлийн эзэн хааны төв бүс, хамгийн өндөр үнэ цэнэтэй дээд зэрэглэлийн эдлэн газар.'
    },
    {
      id: 'land-02',
      regionId: 'region-sunset-vale',
      regionName: 'Western Region — Sunset Vale (Сансет Вэйл)',
      zoneTitle: 'Баруун Бүс — Sunset Vale',
      pricePerHa: '350,000 зоос',
      pricePerHaNumeric: 350000,
      pricePerKm2: '1,000,000 зоос орчим',
      pricePerKm2Numeric: 1000000,
      economicNotes: 'Уул уурхай, үнэт металл, дархны үйлдвэрлэл өндөр хөгжсөн ашигт бүс.'
    },
    {
      id: 'land-03',
      regionId: 'region-ludwinburg',
      regionName: 'Eastern Region — Ludwinburg (Людвинбург)',
      zoneTitle: 'Зүүн Бүс — Ludwinburg',
      pricePerHa: '300,000 зоос',
      pricePerHaNumeric: 300000,
      pricePerKm2: '1,000,000 зоос',
      pricePerKm2Numeric: 1000000,
      economicNotes: 'Газар тариалан, жимс, соёл, худалдааны өргөн уудам нутаг.'
    },
    {
      id: 'land-04',
      regionId: 'region-saint-elynthia',
      regionName: 'Southern Region — Saint Elynthia (Сент Элинтиа)',
      zoneTitle: 'Өмнөд Бүс — Saint Elynthia',
      pricePerHa: '400,000 зоос',
      pricePerHaNumeric: 400000,
      pricePerKm2: '1,000,000 зоос',
      pricePerKm2Numeric: 1000000,
      economicNotes: 'Боомт, тэнгисийн бүтээгдэхүүн, сувд, торго болон мал аж ахуйн бүс.'
    },
    {
      id: 'land-05',
      regionId: 'region-monolith',
      regionName: 'Northern Region — Monolith (Монолит)',
      zoneTitle: 'Хойд Бүс — Monolith',
      pricePerHa: '750,000 зоос',
      pricePerHaNumeric: 750000,
      pricePerKm2: '1,000,000 зоос',
      pricePerKm2Numeric: 1000000,
      economicNotes: 'Стратегийн чухал цэргийн болон ан агнуур, эрдэс баялгийн хойд цайз бүс.'
    }
  ],
  customSections: [
    {
      id: 'section-chronicles',
      titleMongolian: 'Хаант Улсын Түүхэн Тэмдэглэл',
      titleEnglish: 'Imperial Chronicles & Royal Decrees',
      description: 'Саффир улсын олон зууны түүх, хааны зарлигууд болон төрийн онцгой үйл явдлуудын архивын тэмдэглэл.',
      sectionType: 'chronicle',
      isVisible: true,
      items: [
        {
          id: 'chron-1',
          title: 'Эзэнт Гүрний Үүсэл ба Индранил Титэм',
          subtitle: 'Ancient Era · Foundation of the Realm',
          content: `Эртний Vanchellsing эзэнт гүрнээс эхлэн үүсэл суурь нь тавигджээ.

Нийтдээ 10 үндсэн төрийн тэргүүнтэй байснаас авч үзвэл:

；𝐑𝐎𝐗𝐀𝐍𝐀 𝐕𝐀𝐍𝐂𝐇𝐄𝐋𝐋𝐒𝐈𝐍𝐆.

Бᴜднᴜᴜ ʏᴇᴜᴜн бʏх улс, хʏндлэлᴜᴜн дээдэс бол яᴀхын ᴀᴘгᴀгʏᴜ хᴀтᴀн 𝐑𝐎𝐗𝐀𝐍𝐀 𝐕𝐀𝐍𝐂𝐇𝐄𝐋𝐋𝐒𝐈𝐍𝐆 бᴜлээ. Тʏʏнᴜᴜ нэᴘᴜᴜг дуᴘсᴀх бʏᴘᴜᴜд ухᴀᴀн, удмын сʏᴘ хʏч, улс оᴘноо гэсэн хᴀлуун сэтгэл зэᴘэгцэн бодогддог. Хᴀтᴀн Roxana нь тʏʏхэн дэх хᴀмгᴜᴜн ᴀнхны вᴀнт улс болох Зжᴘп-ᴜᴜг ʏндэслэн бᴀᴜгуулсᴀн бөгөөд тэᴘхʏʏ улс өнөөгᴜᴜн олон улсын ʏндэс сууᴘᴜᴜг тᴀвьсᴀн юм.

; 𝗖𝗔𝗥𝗠𝗘𝗡 𝗩𝗔𝗡𝗖𝗛𝗘𝗟𝗟𝗦𝗜𝗡𝗚
Vanchellsing удмын анхны гүнж, Roxana хатан хааны ууган охин болох Carmen Vanchellsing бол түүхийн хуудаснаа өөрийн өнгө аясаар тодрон бичигдсэн онцгой нэгэн байлаа.

; 𝗥𝗔𝗣𝗛𝗔𝗘𝗟 𝗠𝗜𝗭𝗘𝗟𝗜𝗔𝗡 — (Ванхэллисэнг Керис Саффир) -улсын анхны хаан
Raphael Mizelian нь Саффир улсын үндэс суурийг тавьсан, ард түмнээ нэгтгэж, итгэлийг нь сэргээсэн анхны хаан юм.

; 𝗦𝗘𝗥𝗘𝗡𝗔 𝗦𝗘𝗥𝗘𝗡𝗜𝗧𝗬
Анхны хаан Raphael Mizelian-ий амьдралын хань, итгэлт нөхөр, төрийн ухаант түшээ, дараагийн хатан хаан.

; 𝗘𝗥𝗜𝗦 𝗠𝗜𝗭𝗘𝗟𝗜𝗔𝗡
Саффир улсын хатан хаан Эрис Мизелиан бол үндэсний эв нэгдлийн бэлгэ тэмдэг, гурван овгийн хамтын хүч, ард түмний итгэлээр мэндэлсэн удирдагч билээ.

; 𝗖𝗟𝗔𝗨𝗗𝗘 𝗗𝗘 𝗔𝗟𝗚𝗘𝗥 𝗢𝗕𝗘𝗟𝗜𝗔
Саффир улсын түүхэнд хоёр дахь хаан, хаан суудлын залгамж хүү.

; 𝗥𝗨𝗗𝗕𝗘𝗖𝗞𝗜𝗔 𝗗𝗘 𝗔𝗟𝗚𝗘𝗥 𝗢𝗕𝗘𝗟𝗜𝗔
Анхны хатан хаан Эрис Мизелиан-ы бага охин, хаан төрийн жолоог атгасан эмэгтэйчүүдийн гурав дахь төлөөлөл.

; 𝗟𝗨𝗖𝗔𝗦 𝗗𝗘 𝗔𝗟𝗚𝗘𝗥 𝗢𝗕𝗘𝗟𝗜𝗔
Саффир улсын түүхэнд гурван дахь хаан, анхны хатан хаан Эрис Мизелиан-ы дундах хүү.

; 𝗗𝗜𝗢𝗡 𝗔𝗚𝗥𝗜𝗖𝗛𝗘
Керис буюу өнөөгийн Саффир улсын үндэс суурийг тавьж, улс төрийн хөл дээр нь зогсоосон нэрт удирдагч, төрийн суут сэтгэгч.

; 𝗖𝗛𝗔𝗥𝗧𝗘𝗥𝗜𝗦 𝗗𝗘 𝗔𝗟𝗚𝗘𝗥 𝗢𝗕𝗘𝗟𝗜𝗔
2025 оны 10 сарын 25.
( Индранилын 28-р оны хавар )
Угсаа залгамжлагч ханхүү Чартерис Де Алгер Обелиа хаан ширээг залгамжлан авч, түүний гэргий Ариа Агриче хатны хамтаар 9 оны турш Саффирийн төрийг удирдсан асан эзэн хаан. 

Тэрээр хаан ширээнд суусан цагаас Индранил улсын төлөө үнэнчээр зүтгэн сэтгэл зүрхээ зориулж явсан бөгөөд үүнд, 
• Дүрийн маргаант асуудал болон үл ойлголцлыг засан залруулсан
• Хуучин цагын засаглал, цол хэргэмийн хэмжүүрийг шинэчлэсэн
• Улс хууль дүрмийг уян хатан болгон засварлаж шийдвэрлэсэн 
Мөн үүнд төрийн түшээдийг чадварлагаар чиглүүлэн удирдаж үнэнчээр зүтгэнэ, төр нь иргэдээ, иргэд нь төр засгаа хайрлан хүндэтгэхийн сацуу улсын хөгжил дэвшил өндөр хурдаар сэргэн мандсан юм. 
Харин түүний гэргий болох хатан Ариа Агриче нь улсын соёл урлагийн яамыг олны хүртээл болгож, Индранилын урлаг, уран сайхны хөгжил дэвшилд өндөр үүрэг оролцоотойгоор ажиллажээ.
Чартерис Де Алгер Обелиа хаан нь төр захирах хугацаандаа эелдэг, даруу сайхан сэтгэлээр ард олны хайр хүндэтгэлийг хүлээсэн билээ.`,
          tag: 'Foundation',
          dateOrEra: 'Эрин 01'
        },
        {
          id: 'chron-2',
          title: 'Таван Бүсийн Нэгдсэн Гэрээ',
          subtitle: 'The Great Pentarchy Pact',
          content: 'Төв, Зүүн, Баруун, Өмнөд, Хойд бүс нутгууд төрийн тамгын дор нэгдэж, татвар, худалдаа, аюулгүй байдлын үүргийг хуваарилан баталжээ.',
          tag: 'Treaty',
          dateOrEra: 'Эрин 140'
        },
        {
          id: 'chron-3',
          title: 'Либертиа Хатан Хааны Шилэн Цайзын Зарлиг',
          subtitle: 'Decree of the Northern Crystal Citadel',
          content: 'Монолит нутагт Хатан хааны шилэн цайзыг босгон Ren Von Montaque тэргүүтэй хамгаалагчдад хариуцуулах төрийн онцгой зарлиг гарсан байна.',
          tag: 'Royal Decree',
          dateOrEra: 'Орчин Үе'
        }
      ]
    }
  ],
  navigation: [
    { id: 'nav-home', labelMongolian: 'НҮҮР', labelEnglish: 'HOME', targetId: 'hero', isVisible: true },
    { id: 'nav-kingdom', labelMongolian: 'УЛС ТӨР', labelEnglish: 'THE KINGDOM', targetId: 'overview', isVisible: true },
    { id: 'nav-royal-family', labelMongolian: 'ХААН УГСАА', labelEnglish: 'ROYAL FAMILY', targetId: 'royal-titles', isVisible: true },
    { id: 'nav-court-nobility', labelMongolian: 'ОРДОН & ЯЗГУУРТАН', labelEnglish: 'COURT & NOBILITY', targetId: 'court-nobility', isVisible: true },
    { id: 'nav-regions', labelMongolian: 'БҮС НУТАГ', labelEnglish: 'REGIONS', targetId: 'regions', isVisible: true },
    { id: 'nav-land-economy', labelMongolian: 'ГАЗАР & ЭДИЙН ЗАСАГ', labelEnglish: 'LAND & ECONOMY', targetId: 'land-economy', isVisible: true },
    { id: 'nav-map', labelMongolian: 'ГАЗАР ЗҮЙН ЗУРАГ', labelEnglish: 'REALM MAP', targetId: 'realm-map', isVisible: true },
    { id: 'nav-chronicles', labelMongolian: 'ТҮҮХ & ЗАРЛИГ', labelEnglish: 'CHRONICLES', targetId: 'chronicles', isVisible: true }
  ],
  heroMotto: 'СҮР ЖАВХЛАН · ИТГЭЛ ҮНЭМШИЛ · МӨНХИЙН ИНДРАНИЛ',
  heroSubtitle: 'ANCIENT ROYAL KINGDOM & IMPERIAL DIGITAL ARCHIVE',
  footerArchiveNote: 'Саффир Улсын Албан Ёсны Цахим Архив — Бүх мэдээлэл төрийн хамгаалалтад хамаарна.'
};
