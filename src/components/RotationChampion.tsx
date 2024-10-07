"use client";

import { championData } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";
import ChampionCard from "./ChampionCard";

const RotationChampion = () => {
  const [data, setData] = useState<championData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getChampions = async () => {
    const rotation = await getChampionRotation();
    setData(rotation);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getChampions();
  }, []);

  if (isLoading)
    return (
      <div className="mt-[56px] text-[36px] font-black text-red-500">
        Loading...
      </div>
    );

  return (
    <div className="bg-black p-[20px] pt-[76px]">
      <div className="text-white text-[24px] font-black pl-[28px] mb-[20px]">
        로테이션
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {data.map((el: championData) => {
          return <ChampionCard key={el.id} el={el} />;
        })}
      </div>
    </div>
  );
};

export default RotationChampion;
