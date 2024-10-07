# 리그 오브 레전드

Riot API를 이용하여 리그 오브 레전드의 챔피언 목록, 아이템 목록, 금주 로테이션 챔피언을 보여주는 사이트 입니다.

<br/>

## 배포 링크

➡️ https://lol-dex-self.vercel.app/

<br/>

## 프로젝트 구조

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
    <div style="text-align: left;">
    <h2 style="border-bottom: 1px solid #d8dee4; color: #282d33;"> 🧑‍💻 블로그 </h2> <br> 
    <div style="text-align: left;"> <a href=https://velog.io/@hbeom00> <img src="https://img.shields.io/badge/Velog-20C997?style=for-the-badge&logo=Velog&logoColor=white&link=https://velog.io/@hbeom00"> </a>
          </div>  <br> 
    <div style="text-align: left;">  </div> 
    </div>
