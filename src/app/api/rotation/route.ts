import { RotationType } from "@/types/RotationChampion";
import { NextResponse } from "next/server";

const RIOT_API_URL = "https://kr.api.riotgames.com";
const RIOT_API_KEY = process.env.NEXT_PUBLIC_RIOT_API_KEY;

export async function GET() {
  if (!RIOT_API_KEY) {
    throw new Error("API 키가 없습니다.");
  }

  const rotationId = await fetch(
    `${RIOT_API_URL}/lol/platform/v3/champion-rotations`,
    {
      headers: {
        "X-Riot-Token": `${RIOT_API_KEY}`,
      },
    }
  );
  const data: RotationType = await rotationId.json();

  return NextResponse.json(data);
}
