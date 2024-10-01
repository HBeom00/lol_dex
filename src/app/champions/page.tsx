import ChampionCard from "@/components/ChampionCard";
import { championData } from "@/types/Champion";
import { getChampionList } from "@/utils/serverApi";
import React from "react";

const Champions = async () => {
  const res = await getChampionList();
  const data: championData[] = Object.values(res);

  return (
    <div className="bg-black p-[20px] pt-[76px]">
      <div className="text-white text-[24px] font-black pl-[28px] mb-[20px]">
        챔피언 목록
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {data.map((el: championData) => {
          return <ChampionCard key={el.id} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Champions;
