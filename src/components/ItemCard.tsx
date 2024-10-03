import { innerDataType } from "@/types/Item";
import Image from "next/image";
import React from "react";

const ItemCard = ({ el, version }: { el: innerDataType; version: string }) => {
  return (
    <div className="w-[23%] h-[188px] p-[20px] border-2 border-solid border-white">
      <div className="flex justify-center mb-[10px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/item/${el.image.full}`}
          alt={el.name}
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[20px] font-black text-[#f55]">{el.name}</p>
        <p className="text-[16px] text-white">{el.plaintext}</p>
      </div>
    </div>
  );
};

export default ItemCard;
