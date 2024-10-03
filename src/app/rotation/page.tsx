import ChampionCard from "@/components/ChampionCard";
import { championData } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { getChampionList } from "@/utils/serverApi";
import React from "react";

// pt-[56px] 해주기

const Rotation = async () => {
  // 모든 챔피언 리스트 가져오기
  const res = await getChampionList();
  const data: championData[] = Object.values(res);

  // 로테이션 챔피언 번호 가져오기
  const getRotataionRes = await getChampionRotation();
  const filterData = data.filter((el) =>
    getRotataionRes.includes(parseInt(el.key))
  );

  return (
    <div className="bg-black p-[20px] pt-[76px]">
      <div className="text-white text-[24px] font-black pl-[28px] mb-[20px]">
        로테이션
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {filterData.map((el: championData) => {
          return <ChampionCard key={el.id} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Rotation;
