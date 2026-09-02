/**
 * Sapphire Country - Imperial Digital Archive & Builder Types
 */

export interface CrestSettings {
  imageUrl: string;
  scale: number; // 0.5 to 2.0
  offsetX: number; // in px
  offsetY: number; // in px
  glowIntensity: 'none' | 'subtle' | 'radiant' | 'imperial';
  customTitle?: string;
  customSubtitle?: string;
}

export interface CountryOverview {
  officialNameMongolian: string;
  officialNameEnglish: string;
  jurisdiction: string;
  monarch: string;
  monarchTitle?: string;
  monarchImage?: string;
  monarchScale?: number;
  monarchOffsetX?: number;
  monarchOffsetY?: number;
  monarchQuote?: string;
  stateSymbolMongolian: string;
  stateSymbolEnglish: string;
  motto: string;
  foundingEra: string;
  capitalCity: string;
  nationalAnthemTitle: string;
  nationalAnthemExcerpt: string;
  crestDescription: string;
  bannerImage?: string;
}

export interface RoyalTitle {
  id: string;
  number: string;
  mongolianTitle: string;
  englishTitle: string;
  description: string;
  rankCategory: 'monarch' | 'sovereign' | 'prince' | 'princess' | 'consort';
  holder?: string;
  iconName?: string;
}

export interface CourtRank {
  id: string;
  number: string;
  mongolianTitle: string;
  englishTitle: string;
  summary: string;
  duties: string[];
  informalTitle?: string;
  currentHolder?: string;
  badgeSymbol?: string;
}

export type NobilityCategory = 'high' | 'middle' | 'noble' | 'title';

export interface NobilityItem {
  id: string;
  number: string;
  mongolianTitle: string;
  englishTitle: string;
  category: NobilityCategory;
  description?: string;
  exampleFamilies?: string[];
  rankLevel: number;
}

export interface Region {
  id: string;
  name: string;
  englishName: string;
  geographicPosition: string; // e.g. "Central Region · Capital", "Eastern Region"
  description: string;
  origin: string; // e.g. "Эртний Саффир", "Дундад үеийн Саффир"
  areaKm2: string; // e.g. "50,000 км²"
  leadingHouse: string; // e.g. "Obelia"
  regionalLeader: string; // e.g. "Zaifer", "Tiara Von Montaque"
  concentratedHouses: string[]; // e.g. ["Obelia"], ["Montaque", "Castiglione"]
  tax: string; // e.g. "3,000 зоос"
  mainBuildings: string[];
  naturalFeatures?: string[];
  mainProducts: string[];
  estateHolders?: string[];
  historicalNotes?: string;
  bannerImage?: string;
  crestSymbol?: string;
  mapCoordinates?: { x: number; y: number }; // percentage for interactive map
}

export interface LandValueItem {
  id: string;
  regionId: string;
  regionName: string;
  zoneTitle: string;
  pricePerHa: string; // e.g. "1,000,000 зоос"
  pricePerHaNumeric: number;
  pricePerKm2: string; // e.g. "2,000,000 зоос"
  pricePerKm2Numeric: number;
  economicNotes?: string;
}

export interface CustomSectionItem {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  tag?: string;
  dateOrEra?: string;
  imageUrl?: string;
}

export interface CustomSection {
  id: string;
  titleMongolian: string;
  titleEnglish: string;
  description: string;
  sectionType: 'chronicle' | 'laws' | 'decrees' | 'gallery' | 'general';
  items: CustomSectionItem[];
  isVisible: boolean;
}

export interface NavigationItem {
  id: string;
  labelMongolian: string;
  labelEnglish: string;
  targetId: string;
  isVisible: boolean;
}

export interface WebsiteData {
  crest: CrestSettings;
  overview: CountryOverview;
  royalTitles: RoyalTitle[];
  courtRanks: CourtRank[];
  nobilityHierarchy: NobilityItem[];
  regions: Region[];
  landValues: LandValueItem[];
  customSections: CustomSection[];
  navigation: NavigationItem[];
  heroMotto: string;
  heroSubtitle: string;
  footerArchiveNote: string;
}
