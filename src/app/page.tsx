import Link from "next/link";
import React from "react";
import Diana_47 from "../public/assets/Diana_47.jpg";
import Yone from "../public/assets/Yone.jpg";
import Riven_16 from "../public/assets/Riven_16.jpg";
import Image from "next/image";

const commonStyled = "text-center text-[20px] text-white font-black pt-[8px]";

const Home = async () => {
  return (
    <div className="flex justify-evenly text-white bg-black pt-[56px] h-[100vh]">
      <Link href={"/champions"} className="flex items-center">
        <div>
          <Image src={Yone} width={300} alt="champion_Talon_img" />
          <p className={commonStyled}>챔피언 목록 보기</p>
        </div>
      </Link>
      <Link href={"/items"} className="flex items-center">
        <div>
          <Image src={Diana_47} width={300} alt="champion_Yone_img" />
          <p className={commonStyled}>아이템 목록 보기</p>
        </div>
      </Link>
      <Link href={"/rotation"} className="flex items-center">
        <div>
          <Image src={Riven_16} width={300} alt="champion_Zed_img" />
          <p className={commonStyled}>금주 로테이션 챔피언</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
