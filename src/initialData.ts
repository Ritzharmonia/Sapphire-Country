import { WebsiteData } from './types';

// Default royal crest SVG as high-definition data URI so it looks majestic out of the box
export const DEFAULT_ROYAL_CREST = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
  <defs>
    <radialGradient id="sapphireGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4189e0" stop-opacity="0.9" />
      <stop offset="45%" stop-color="#1F4E79" stop-opacity="0.8" />
      <stop offset="85%" stop-color="#142B4A" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0C1421" stop-opacity="1" />
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF3D4" />
      <stop offset="30%" stop-color="#E5C378" />
      <stop offset="70%" stop-color="#C9A85C" />
      <stop offset="100%" stop-color="#846624" />
    </linearGradient>
    <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#D9DEE5" />
      <stop offset="100%" stop-color="#808B9B" />
    </linearGradient>
    <filter id="royalShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Ornate Outer Shield & Flourishes -->
  <g filter="url(#royalShadow)">
    <!-- Wings / Baroque Mantling -->
    <path d="M 200 40 C 230 20, 310 30, 340 90 C 360 130, 340 190, 310 240 C 280 290, 230 340, 200 370 C 170 340, 120 290, 90 240 C 60 190, 40 130, 60 90 C 90 30, 170 20, 200 40 Z" 
          fill="none" stroke="url(#goldGrad)" stroke-width="3" />
    
    <path d="M 200 55 C 225 38, 295 48, 320 100 C 338 135, 320 185, 295 230 C 270 275, 225 320, 200 350 C 175 320, 130 275, 105 230 C 80 185, 62 135, 80 100 C 105 48, 175 38, 200 55 Z" 
          fill="url(#sapphireGlow)" stroke="url(#silverGrad)" stroke-width="1.5" />
    
    <!-- Inner Escutcheon -->
    <path d="M 200 80 Q 270 80 280 150 Q 280 240 200 310 Q 120 240 120 150 Q 130 80 200 80 Z" 
          fill="#0C1421" stroke="url(#goldGrad)" stroke-width="2.5" />

    <!-- Central Sapphire Diamond / Star of the Realm -->
    <polygon points="200,105 245,150 200,240 155,150" fill="#1F4E79" stroke="url(#goldGrad)" stroke-width="2"/>
    <polygon points="200,120 230,150 200,215 170,150" fill="#2A75D3" opacity="0.85"/>
    <polygon points="200,135 215,150 200,185 185,150" fill="#FFF3D4" opacity="0.9"/>
    
    <!-- Imperial Crown Crest Top -->
    <path d="M 160 75 L 170 50 L 185 65 L 200 40 L 215 65 L 230 50 L 240 75 Z" fill="url(#goldGrad)" stroke="#846624" stroke-width="1"/>
    <circle cx="200" cy="38" r="4" fill="#D9DEE5" stroke="url(#goldGrad)" stroke-width="1"/>
    <circle cx="170" cy="48" r="3" fill="#D9DEE5"/>
    <circle cx="230" cy="48" r="3" fill="#D9DEE5"/>

    <!-- Flourishes and Crosses -->
    <path d="M 195 260 L 205 260 M 200 255 L 200 268" stroke="url(#goldGrad)" stroke-width="2"/>
    <path d="M 140 110 Q 160 130 140 160 Q 130 180 145 200" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.7"/>
    <path d="M 260 110 Q 240 130 260 160 Q 270 180 255 200" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.7"/>
  </g>
</svg>
`)}`;

// Default Regal Sovereign Monarch Portrait
export const DEFAULT_MONARCH_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="100%" height="100%">
  <defs>
    <radialGradient id="monarchGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#2A75D3" stop-opacity="0.6"/>
      <stop offset="40%" stop-color="#1F4E79" stop-opacity="0.8"/>
      <stop offset="80%" stop-color="#142B4A" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0C1421" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="monarchGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF0CA"/>
      <stop offset="40%" stop-color="#E8C87A"/>
      <stop offset="80%" stop-color="#C9A85C"/>
      <stop offset="100%" stop-color="#8A6D2B"/>
    </linearGradient>
    <linearGradient id="cloakGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1B3A61"/>
      <stop offset="60%" stop-color="#10233D"/>
      <stop offset="100%" stop-color="#09111E"/>
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="500" height="600" fill="url(#monarchGlow)"/>
  
  <!-- Outer Filigree Arch -->
  <rect x="25" y="25" width="450" height="550" rx="16" fill="none" stroke="url(#monarchGold)" stroke-width="2" opacity="0.8"/>
  <rect x="35" y="35" width="430" height="530" rx="12" fill="none" stroke="url(#monarchGold)" stroke-width="1" stroke-dasharray="6,4" opacity="0.4"/>

  <!-- Halo Aura -->
  <circle cx="250" cy="220" r="140" fill="none" stroke="url(#monarchGold)" stroke-width="1.5" opacity="0.35"/>
  <circle cx="250" cy="220" r="160" fill="none" stroke="#2A75D3" stroke-width="1" opacity="0.25"/>

  <!-- Royal Robe / Mantle -->
  <path d="M 120 560 L 150 360 Q 200 320 250 320 Q 300 320 350 360 L 380 560 Z" fill="url(#cloakGrad)" stroke="url(#monarchGold)" stroke-width="2"/>
  <path d="M 210 330 L 250 480 L 290 330 Z" fill="#0C1421" stroke="url(#monarchGold)" stroke-width="1.5" opacity="0.9"/>
  
  <!-- Imperial Medallion & Ribbons -->
  <circle cx="250" cy="380" r="18" fill="#1F4E79" stroke="url(#monarchGold)" stroke-width="2.5"/>
  <polygon points="250,368 258,380 250,392 242,380" fill="#FFF0CA"/>
  <path d="M 250 398 L 240 440 L 250 432 L 260 440 Z" fill="url(#monarchGold)" opacity="0.85"/>

  <!-- Royal Sovereign Head / Profile Silhouette -->
  <circle cx="250" cy="225" r="58" fill="#142B4A" stroke="url(#monarchGold)" stroke-width="1.5"/>
  <path d="M 215 240 Q 250 280 285 240 Q 260 300 250 310 Q 240 300 215 240 Z" fill="#142B4A" stroke="url(#monarchGold)" stroke-width="1"/>

  <!-- Grand Crown of Sapphire -->
  <g transform="translate(0, -10)">
    <path d="M 195 170 L 210 120 L 230 145 L 250 95 L 270 145 L 290 120 L 305 170 Z" fill="url(#monarchGold)" stroke="#8A6D2B" stroke-width="1.5"/>
    <circle cx="250" cy="90" r="7" fill="#FFF0CA" stroke="url(#monarchGold)" stroke-width="1.5"/>
    <circle cx="210" cy="115" r="5" fill="#2A75D3" stroke="url(#monarchGold)" stroke-width="1"/>
    <circle cx="290" cy="115" r="5" fill="#2A75D3" stroke="url(#monarchGold)" stroke-width="1"/>
    <!-- Sapphire Gemstones on Crown Base -->
    <rect x="200" y="162" width="100" height="12" rx="3" fill="#0C1421" stroke="url(#monarchGold)" stroke-width="1.5"/>
    <polygon points="250,164 255,168 250,172 245,168" fill="#2A75D3"/>
    <polygon points="225,164 229,168 225,172 221,168" fill="#2A75D3"/>
    <polygon points="275,164 279,168 275,172 271,168" fill="#2A75D3"/>
  </g>

  <!-- Constellations & Filigrees -->
  <text x="250" y="530" text-anchor="middle" fill="#E8C87A" font-family="Cinzel, serif" font-size="16" letter-spacing="4" font-weight="bold">THE SOVEREIGN MONARCH</text>
  <text x="250" y="552" text-anchor="middle" fill="#D9DEE5" font-family="Cinzel, serif" font-size="10" letter-spacing="3" opacity="0.75">SAPPHIRE IMPERIAL CROWN</text>
</svg>
`)}`;

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
    foundingEra: 'Эртний Саффирын Эрин Үе (Imperial Ancient Era)',
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
      description: 'Саффир улсын төрийн тэргүүн бөгөөд хаан ширээний дээд эзэн.',
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
          content: 'Эртний их язгууртнууд Индранил уулын бэлд нэгдэн тангараг өргөж, Саффир улсын тусгаар тогтнолыг тунхаглан дээд титмийг бүтээжээ.',
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
