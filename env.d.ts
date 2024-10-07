// 환경 변수를 사용할 때는 process.env를 통해 접근합니다.
// TypeScript에서는 process.env의 타입이 string | undefined이므로, 사용 시 타입 체크를 하거나 타입 단언을 해야 합니다.
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_RIOT_API_KEY: string;
  }
}
