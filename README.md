# front-mbti-chat

## Description
4명의 프론트엔드, 3명의 백엔드 개발자의 협업 프로젝트!

💬 React.js, Sass, styled-components, TypeScript를 활용하여 MBTI별 채팅, MBTI 테스트, 로그인 및 회원가입 등을 구현한 웹사이트입니다. 

<p align="center">
 <img src="https://user-images.githubusercontent.com/124070996/236616186-bfaf628c-2a3a-4108-8484-c1e5daa46242.gif"/>
  </p>
<br/>


## Contributors
|이름|맡은 파트|github|
|---|---|---|
|이지윤|초기환경세팅, MBTI Chat 기능 구현 |[지윤 github](https://github.com/1yoouoo)|
|김다정|메인페이지(반응형, 사이드 메뉴바 등), MBTI 테스트 기능 구현 |[다정 github](https://github.com/danakim530)|
|정희섭|화면구성도, 마이페이지 구현 |[희섭 github](https://github.com/Eriniss)|
|양동준|화면구성도, 로그인/회원가입 form validation 구현 |[동준 github](https://github.com/dongjoonyang)|

## Features
### [초기 MBTI CHAT 화면 구성도](https://www.figma.com/file/D0NYPYYg1owUOKOQZPiCwx/Project-Ssasy?node-id=0-1&t=g00ya5lGmWJtwgqf-0)

### 캐러셀

#### 기능 구현
1. 각 카드를 1개처럼 겹쳐 놓음
2. z축을 적절하게 transform(위에서 봤을 때 *모양)
3. x, y축을 밀어서 서로 겹치지 않도록 떨어트림
4. 시점을 고정시킴 (perspective이용)
5. 클릭 이벤트로 전체 판을 회전시킴

<p align="center">
 <img src="https://user-images.githubusercontent.com/79697414/236617495-f75dc499-8d15-4ffe-a6f9-88f401512a73.gif"/>
</p>

```ts
  // 현재 index에서 클릭한 index 위치를 계산해서 가까운 쪽으로 돌도록 구현
  const calculateRelativeIndex = (currentIndex: number, matchingIndex: number): number => {
    const distance = Math.abs(currentIndex - matchingIndex);
    if (distance > 8) {
      return matchingIndex > 8 + currentIndex ? 16 - distance : distance - 16;
    }
    return currentIndex - matchingIndex;
  };
```


### MBTI 채팅
#### Stomp 라이브러리를 이용해서 채팅 구현
<p align="center">
 <img src="https://user-images.githubusercontent.com/79697414/236617258-dd1de0c7-c045-432a-86e6-6af731246688.gif"/>
</p>

### MBTI 검사

<p align="center">
  <img src="https://user-images.githubusercontent.com/124070996/236617240-7e7d2397-bd04-4c84-a9f4-185dc24aa3b5.gif"/>
</p>
<br/>

### 메인 페이지


### 로그인 & 회원가입

<p align="center">
  <img src="https://user-images.githubusercontent.com/124070996/236616351-ee40868a-7f7d-41e1-a6ce-546fb14c6627.gif"/>
</p>
<br/>

### 마이페이지

___
**진행 과정**
- 백엔드 3명, 프론트 4명으로 구성된 팀 프로젝트로 Slack, Notion 등의 Communication Tool 을 활용하여 협업했습니다.
- Swagger API 문서를 기반으로 백엔드 분들과 함께 소통하며 작업했습니다.
- 매주 주 3회 정기모임을 가지며 백엔드와 프론트엔드 사이의 진도를 조율했습니다.

**구현한 기능** 
- 디자인
  - Figma를 이용한 UI/UX 설계 
  - SASS를 이용한 반응형 웹 디자인 구현
- 초기 세팅
  - 타입스크립트, eslint를 통한 버그 관리
- 회원정보
  - ID/PW찾기, 회원가입, 로그인 관련 form validation 구현
  - 로그인한 유저의 token관리
- MBTI 채팅 
  - 양방향 통신 채팅 기능
- MBTI 테스트 
  - 16개의 Mbti 검사 기능

