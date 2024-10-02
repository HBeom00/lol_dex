import { chapionImage } from "./Champion";

export type ItemType = {
  type: string;
  version: string;
  basic: BasicType;
  data: DataType;
  groups: GroupsType[];
  tree: TreeType[];
};

type BasicType = {
  name: string;
  rune: RuneType;
  gold: GoldType;
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: string[];
  into: string[];
  specialRecipe: number;
  inStore: boolean;
  hideFromAll: boolean;
  requiredChampion: string;
  requiredAlly: string;
  stats: StatsType;
  tags: string[];
  maps: MapsType;
};

type RuneType = {
  isrune: boolean;
  tier: number;
  type: string;
};

type GoldType = {
  base: number;
  total: number;
  sell: number;
  purchasable: boolean;
};

type StatsType = {
  FlatHPPoolMod: number;
  rFlatHPModPerLevel: number;
  FlatMPPoolMod: number;
  rFlatMPModPerLevel: number;
  PercentHPPoolMod: number;
  PercentMPPoolMod: number;
  FlatHPRegenMod: number;
  rFlatHPRegenModPerLevel: number;
  PercentHPRegenMod: number;
  FlatMPRegenMod: number;
  rFlatMPRegenModPerLevel: number;
  PercentMPRegenMod: number;
  FlatArmorMod: number;
  rFlatArmorModPerLevel: number;
  PercentArmorMod: number;
  rFlatArmorPenetrationMod: number;
  rFlatArmorPenetrationModPerLevel: number;
  rPercentArmorPenetrationMod: number;
  rPercentArmorPenetrationModPerLevel: number;
  FlatPhysicalDamageMod: number;
  rFlatPhysicalDamageModPerLevel: number;
  PercentPhysicalDamageMod: number;
  FlatMagicDamageMod: number;
  rFlatMagicDamageModPerLevel: number;
  PercentMagicDamageMod: number;
  FlatMovementSpeedMod: number;
  rFlatMovementSpeedModPerLevel: number;
  PercentMovementSpeedMod: number;
  rPercentMovementSpeedModPerLevel: number;
  FlatAttackSpeedMod: number;
  PercentAttackSpeedMod: number;
  rPercentAttackSpeedModPerLevel: number;
  rFlatDodgeMod: number;
  rFlatDodgeModPerLevel: number;
  PercentDodgeMod: number;
  FlatCritChanceMod: number;
  rFlatCritChanceModPerLevel: number;
  PercentCritChanceMod: number;
  FlatCritDamageMod: number;
  rFlatCritDamageModPerLevel: number;
  PercentCritDamageMod: number;
  FlatBlockMod: number;
  PercentBlockMod: number;
  FlatSpellBlockMod: number;
  rFlatSpellBlockModPerLevel: number;
  PercentSpellBlockMod: number;
  FlatEXPBonus: number;
  PercentEXPBonus: number;
  rPercentCooldownMod: number;
  rPercentCooldownModPerLevel: number;
  rFlatTimeDeadMod: number;
  rFlatTimeDeadModPerLevel: number;
  rPercentTimeDeadMod: number;
  rPercentTimeDeadModPerLevel: number;
  rFlatGoldPer10Mod: number;
  rFlatMagicPenetrationMod: number;
  rFlatMagicPenetrationModPerLevel: number;
  rPercentMagicPenetrationMod: number;
  rPercentMagicPenetrationModPerLevel: number;
  FlatEnergyRegenMod: number;
  rFlatEnergyRegenModPerLevel: number;
  FlatEnergyPoolMod: number;
  rFlatEnergyModPerLevel: number;
  PercentLifeStealMod: number;
  PercentSpellVampMod: number;
};

type MapsType = {
  [key: string]: boolean;
};

type DataType = {
  [key: string]: innerDataType;
};

export type innerDataType = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: chapionImage;
  gold: GoldType;
  tags: string[];
  maps: MapsType;
  stats: StatsType2;
};

type StatsType2 = {
  FlatMovementSpeedMod: number;
};

type GroupsType = {
  id: string;
  MaxGroupOwnable: string;
};

type TreeType = {
  header: string;
  tags: string[];
};
