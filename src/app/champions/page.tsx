import ChampionCard from "@/components/ChampionCard";
import { championData } from "@/types/Champion";
import { getChampionList } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "챔피언 리스트",
  description: "챔피언 리스트를 보여주는 페이지 입니다.",
};

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
