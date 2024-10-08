import ItemCard from "@/components/ItemCard";
import { innerDataType } from "@/types/Item";
import { getItemList } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "아이템 리스트",
  description: "아이템 리스트를 보여주는 페이지 입니다.",
};

const Items = async () => {
  const res = await getItemList();
  const version: string = res.version;
  const data: innerDataType[] = Object.values(res.data);

  return (
    <div className="bg-black p-[20px] pt-[76px]">
      <div className="text-white text-[24px] font-black pl-[28px] mb-[20px]">
        아이템 목록
      </div>
      <div className="flex flex-wrap justify-center gap-[20px]">
        {data.map((el: innerDataType) => {
          return <ItemCard key={el.name} el={el} version={version} />;
        })}
      </div>
    </div>
  );
};

export default Items;
