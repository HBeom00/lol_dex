"use server";

export const getChampionList = async () => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  if (!versions.ok) {
    return { message: "해당 데이터가 없습니다. 요청값을 확인해 주세요." };
  }

  const championsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const championsData = await championsList.json();

  if (!championsList.ok) {
    return { message: "해당 데이터가 없습니다. 요청값을 확인해 주세요." };
  }

  return championsData.data;
};

export const getItemList = async () => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  // if (!versions.ok) {
  //   return { message: "해당 데이터가 없습니다. 요청값을 확인해 주세요." };
  // }

  const ItemsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/item.json`
  );
  const ItemData = await ItemsList.json();

  if (!ItemsList.ok) {
    return { message: "해당 데이터가 없습니다. 요청값을 확인해 주세요." };
  }

  return ItemData;
};

export const getDetailChampionInfo = async (name: string) => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  if (!versions.ok) {
    return { message: "해당 데이터가 없습니다. 요청값을 확인해 주세요." };
  }

  const championInfo = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/champion/${name}.json`
  );
  const InfoData = await championInfo.json();

  if (!championInfo.ok) {
    return { message: "해당 데이터가 없습니다. 요청값을 확인해 주세요." };
  }

  return InfoData.data;
};
