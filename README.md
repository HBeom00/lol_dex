# 🕹️ 리그 오브 레전드

Riot API를 이용하여 리그 오브 레전드의 챔피언 목록, 아이템 목록, 금주 로테이션 챔피언을 보여주는 사이트 입니다.

<br/>

## 🔗 배포 링크

➡️ https://lol-dex-self.vercel.app/

<br/>

## ⌛ 작업 기간

24.10.01 ~ 24.10.07

<br/>

## 📂 프로젝트 구조

<details>
<summary>폴더 구조</summary>

```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[name]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┣ 📂items
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📜ChampionCard.tsx
 ┃ ┣ 📜ItemCard.tsx
 ┃ ┗ 📜RotationChampion.tsx
 ┣ 📂public
 ┃ ┗ 📂assets
 ┃ ┃ ┣ 📜Diana_47.jpg
 ┃ ┃ ┣ 📜Riven_16.jpg
 ┃ ┃ ┗ 📜Yone.jpg
 ┣ 📂styles
 ┃ ┗ 📜.gitkeep
 ┣ 📂types
 ┃ ┣ 📜Champion.ts
 ┃ ┣ 📜DetailChampion.ts
 ┃ ┣ 📜Item.ts
 ┃ ┗ 📜RotationChampion.ts
 ┗ 📂utils
 ┃ ┣ 📜riotApi.ts
 ┃ ┗ 📜serverApi.ts
```

</details>

<br/>

<div style="text-align: left;">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🛠️ 기술 스택 </h2> <br> 
    <div style="margin: ; text-align: left;" "text-align: left;"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
          <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white">
          <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
          <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
          <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
          <br/></div>
 </div>

 <br/>

## 📃 페이지별 기능 및 구성

**<메인 페이지>**
 <details>
 <summary>Open Image</summary>
  
 ![screencapture-lol-dex-self-vercel-app-2024-10-07-21_30_04](https://github.com/user-attachments/assets/4cd8e381-a3a5-4364-bd72-3812cbc21f7b)
 
 </details>

- 글로벌 레이아웃으로 헤더바 공용화
- 사이트 소개와 `Link`태그로 페이지간 이동
- Next.js 에서 제공하는 `Image`컴포넌트로 이미지 최적화
 
<br/>

**<챔피언 목록 페이지>**
 <details>
 <summary>Open Image</summary>
  
 ![스크린샷 2024-10-07 214123](https://github.com/user-attachments/assets/ecafbf65-9703-4a55-ac34-2b3e10937a68)

 </details>

- Riot_API를 활용하여 받은 데이터로 모든 챔피언 목록 표시
- 챔피언 클릭 시, 해당 챔피언 상세 정보를 보여주는 디테일 페이지로 이동
- 상세 페이지에 해당 챔피언의 정보와 스킬을 나타냄

<br/>

**<아이템 목록 페이지>**
 <details>
 <summary>Open Image</summary>
  
 ![스크린샷 2024-10-07 214132](https://github.com/user-attachments/assets/cb557700-ead5-415f-beb0-1e1f33fad901)

 </details>

- Riot_API를 활용하여 받은 데이터로 모든 아이템 목록 표시

<br/>

**<로테이션 페이지>**
 <details>
 <summary>Open Image</summary>
  
 ![스크린샷 2024-10-07 214142](https://github.com/user-attachments/assets/31913f03-8333-405d-a61e-ae2ba068a27a)
 
 </details>

- Riot_API를 활용하여 받은 데이터로 금주 로테이션 챔피언 목록 표시
- 챔피언 클릭 시, 해당 챔피언 상세 정보를 보여주는 상세 페이지로 이동
- 상세 페이지에 해당 챔피언의 정보와 스킬을 나타냄

<br/>

## 🔥 주요 트러블 슈팅

**<에러> - 1. URL 인코딩 / 디코딩**
 - Link 태그를 이용하여 특정 값을 보내줄 때, 이 값이 한글이면 이스케이프 처리가 되어 원하는 값을 받을 수 없게 되었다.

**<해결>** - decodeURL() 함수로 감싸서 사용하거나, 보낼때 한글을 포함해서 보내지 말자!!
___
**<에러> - 2. indexed signature**
 - 객체 형식을 타입 지정해줄때 어떻게 지정을 해줘야 하는지 고민 <br/>
 
**<해결>** - `{[key : T] : U}`처럼 지정해주면 된다.

<br/>

<div style="text-align: left;">
<h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🧑‍💻 블로그 </h2> <br> 
<div style="text-align: left;"> <a href=https://velog.io/@hbeom00> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@hbeom00"> </a>
      </div>  <br> 
<div style="text-align: left;">  </div> 
</div>
