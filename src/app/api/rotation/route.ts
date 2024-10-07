import { RotationType } from "@/types/RotationChampion";
import { NextResponse } from "next/server";

export async function GET() {
  const rotationId = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
      },
    }
  );
  const data: RotationType = await rotationId.json();

  return NextResponse.json(data);
}
