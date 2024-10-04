import { DetailData } from "@/types/DetailChampion";
import { getDetailChampionInfo } from "@/utils/serverApi";
import Image from "next/image";
// import React from "react";

type Props = {
  params: {
    name: string;
  };
};

const DetailChampion = async ({ params }: Props) => {
  const res = await getDetailChampionInfo(params.name);
  const data: DetailData[] = Object.values(res);

  return (
    <div className="flex mt-[56px] h-[100%] text-white bg-black items-center">
      <div className="w-[40%] flex justify-center items-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/img/champion/loading/${data[0].id}_0.jpg`}
          alt={`${data[0].name}`}
          width={320}
          height={420}
        />
      </div>
      <div className="w-[60%]">
        <div className="flex mb-[20px]">
          <div className="text-[32px] font-black text-[#f55] mr-[12px]">
            {data[0].name}
          </div>
          <div className="text-[20px] text-[#5c5c5c]">{data[0].title}</div>
        </div>
        <div className="text-[#f55] w-[700px] mb-[28px]">{data[0].lore}</div>
        <div>
          <p className="text-[20px] text-white mb-[12px]">스킬 설명</p>
          <div className="flex flex-wrap gap-[16px] mb-[20px]">
            {data[0].spells.map((el) => {
              return (
                <div
                  key={el.id}
                  className="w-[420px] px-[12px] pt-[12px] border-2 border-solid border-[#f55]"
                >
                  <div className="flex items-center mb-[12px]">
                    <div>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/14.19.1/img/spell/${el.image.full}`}
                        alt={`${el.image.full}`}
                        width={40}
                        height={40}
                        className="mr-[12px]"
                      />
                    </div>
                    <div>{el.name}</div>
                  </div>
                  <div className="mb-[16px]">{el.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailChampion;
