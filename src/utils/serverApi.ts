export const getChampionList = async () => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const lastVersion: string[] = await versions.json();

  const championsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/champion.json`
  );
  const championsData = await championsList.json();

  return championsData.data;
};

export const getItemList = async () => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  const ItemsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/item.json`
  );
  const ItemData = await ItemsList.json();

  return ItemData;
};

export const getDetailChampionInfo = async (name: string) => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  const championInfo = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/champion/${name}.json`
  );
  const InfoData = await championInfo.json();

  return InfoData.data;
};
