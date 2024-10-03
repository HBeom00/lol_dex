import { RotationType } from "@/types/RotationChampion";

export const getChampionRotation = async () => {
  const rotationData = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
      },
    }
  );
  const data: RotationType = await rotationData.json();

  return data.freeChampionIds;
};
