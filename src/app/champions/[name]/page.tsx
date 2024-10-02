import React from "react";

type Props = {
  params: {
    name: string;
  };
};

const DetailChampion = ({ params }: Props) => {
  return <div className="pt-[56px]">{params.name}</div>;
};

export default DetailChampion;
