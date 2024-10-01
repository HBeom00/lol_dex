import Link from "next/link";
import React from "react";
import Talon from "../public/assets/Talon.jpg";
import Yone from "../public/assets/Yone.jpg";
import Zed from "../public/assets/Zed.jpg";
import Image from "next/image";

const commonStyled = "text-center text-[20px] text-white font-black pt-[8px]";

const Home = () => {
  return (
    <div className="flex justify-evenly text-white bg-black pt-[56px] h-[100vh]">
      <Link href={"/champions"} className="flex items-center">
        <div>
          <Image src={Talon} width={300} alt="champion_Talon_img" />
          <p className={commonStyled}>Champion List</p>
        </div>
      </Link>
      <Link href={"/items"} className="flex items-center">
        <div>
          <Image src={Yone} width={300} alt="champion_Yone_img" />
          <p className={commonStyled}>Item List</p>
        </div>
      </Link>
      <Link href={"/rotation"} className="flex items-center">
        <div>
          <Image src={Zed} width={300} alt="champion_Zed_img" />
          <p className={commonStyled}>This week&apos;s Rotation</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
