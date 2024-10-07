export type championType = {
  type: string;
  format: string;
  version: string;
  data: championDataObject;
};

export type championDataObject = {
  [key: string]: championData;
};

export type championData = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: championInfo;
  image: chapionImage;
  tags: string[];
  partype: string;
  stats: championStats;
};

export type championInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

export type chapionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type championStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mapperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};
