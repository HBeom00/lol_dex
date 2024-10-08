"use server";

import { championData } from "@/types/Champion";
import { DetailData } from "@/types/DetailChampion";
import { ItemType } from "@/types/Item";

export const getChampionList = async (): Promise<{
  [key: string]: championData;
}> => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  if (!versions.ok) {
    throw new Error("버전 확인에 실패했습니다.");
  }

  const championsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/champion.json`
  );
  const championsData = await championsList.json();

  if (!championsList.ok) {
    throw new Error("챔피언 리스트를 불러오는데 실패했습니다.");
  }

  return championsData.data;
};

export const getItemList = async (): Promise<ItemType> => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  if (!versions.ok) {
    throw new Error("버전 확인에 실패했습니다.");
  }

  const ItemsList = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/item.json`
  );
  const ItemData = await ItemsList.json();

  if (!ItemsList.ok) {
    throw new Error("아이템 리스트를 불러오는데 실패했습니다.");
  }

  return ItemData;
};

export const getDetailChampionInfo = async (
  name: string
): Promise<{ [key: string]: DetailData }> => {
  const versions = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );
  const lastVersion: string[] = await versions.json();

  if (!versions.ok) {
    throw new Error("버전 확인에 실패했습니다.");
  }

  const championInfo = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${lastVersion[0]}/data/ko_KR/champion/${name}.json`
  );
  const InfoData = await championInfo.json();

  if (!championInfo.ok) {
    throw new Error("챔피언 정보를 불러오는데 실패했습니다.");
  }

  return InfoData.data;
};
