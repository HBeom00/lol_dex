import { championData } from "@/types/Champion";
import Image from "next/image";

const ChampionCard = ({ el }: { el: championData }) => {
  return (
    <div className="w-[23%] h-[188px] p-[20px] border-2 border-solid border-white">
      <div className="flex justify-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${el.version}/img/champion/${el.image.full}`}
          alt={el.name}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[20px] font-black text-[firebrick]">{el.name}</p>
        <p className="text-[12px] text-white">{el.title}</p>
      </div>
    </div>
  );
};

export default ChampionCard;
