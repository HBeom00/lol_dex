import RotationChampion from "@/components/RotationChampion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로테이션 챔피언 리스트",
  description: "무료로 사용할 수 있는 챔피언 리스트를 보여주는 페이지 입니다.",
};

const Rotation = () => {
  return <RotationChampion />;
};

export default Rotation;
