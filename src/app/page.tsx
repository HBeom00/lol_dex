import Link from "next/link";
import React from "react";
import Diana_47 from "../public/assets/Diana_47.jpg";
import Yone from "../public/assets/Yone.jpg";
import Riven_16 from "../public/assets/Riven_16.jpg";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "메인화면",
  description: "메인 페이지 입니다.",
};

const commonStyled = "text-center text-[20px] text-white font-black pt-[8px]";

const Home = () => {
  return (
    <div className="text-white bg-black py-[56px]">
      <div className="flex flex-col justify-center items-center h-[200px]">
        <p className="text-[36px] font-black text-[#f55] mb-[20px]">
          리그 오브 레전드
        </p>
        <p className="text-[20px] text-[#f99]">
          챔피언 목록과 아이템 목록 그리고 금주의 로테이션 챔피언을 확인할 수
          있는 사이트 입니다.
        </p>
      </div>
      <div className="flex justify-evenly">
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
    </div>
  );
};

export default Home;
