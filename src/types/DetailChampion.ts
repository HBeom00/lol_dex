import { championInfo, championStats, chapionImage } from "./Champion";

export type DetailChampionType = {
  type: string;
  format: string;
  version: string;
  data: DetailDataType;
};

type DetailDataType = {
  [key: string]: DetailData;
};

export type DetailData = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: chapionImage;
  skins: SkinsType[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: championInfo;
  stats: championStats;
  spells: SpellsType[];
  passive: PassiveType;
  recommended: string[];
};

type SkinsType = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

type SpellsType = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: LeveltipType;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: DatavaluesType;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: string[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: chapionImage;
  resource: string;
};

type LeveltipType = {
  label: string[];
  effect: string[];
};

type DatavaluesType = {
  [key: string]: number | string;
};

type PassiveType = {
  name: string;
  description: string;
  image: chapionImage;
};
