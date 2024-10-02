export const getChampionList = async () => {
  const Versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await Versions.json();

  const championsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/champion.json`
  );
  const championsData = await championsList.json();

  return championsData.data;
};

export const getItemList = async () => {
  const Versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await Versions.json();

  const ItemsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/item.json`
  );
  const ItemData = await ItemsList.json();

  return ItemData;
};
