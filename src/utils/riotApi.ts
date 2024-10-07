import { championData } from "@/types/Champion";
import { getChampionList } from "./serverApi";

export const getChampionRotation = async () => {
  // 로테이션 챔피언 ID 값 반환
  const rotationRes = await fetch("/api/rotation");
  const rotationData = await rotationRes.json();
  const rotationId = rotationData.freeChampionIds;

  // 모든 챔피언 리스트 반환
  const res = await getChampionList();
  const data: championData[] = Object.values(res);

  // 로테이션 챔피언 정보만 반환
  const filterData: championData[] = data.filter((el) =>
    rotationId.includes(parseInt(el.key))
  );

  return filterData;
};
