# front-mbti-chat

## Description
4명의 프론트엔드, 3명의 백엔드 개발자의 협업 프로젝트!

💬 React.js, Sass, styled-components, TypeScript를 활용하여 MBTI별 채팅, MBTI 테스트, 로그인 및 회원가입 등을 구현한 웹사이트입니다. 

## Contributors
|이름|맡은 파트|github|
|---|---|---|
|이지윤|초기 협업 세팅, MBTI Chat 기능 구현 |[지윤 github](https://github.com/1yoouoo)|
|김다정|메인페이지, MBTI 테스트 기능 구현 |[다정 github](https://github.com/danakim530)|
|정희섭|화면구성도, 마이페이지 구현 |[희섭 github](https://github.com/Eriniss)|
|양동준|화면구성도, 로그인/회원가입 form validation 구현 |[동준 github](https://github.com/dongjoonyang)|

## Features
### [초기 MBTI CHAT 화면 구성도](https://www.figma.com/file/D0NYPYYg1owUOKOQZPiCwx/Project-Ssasy?node-id=0-1&t=g00ya5lGmWJtwgqf-0)

### MBTI 채팅 

### MBTI 검사

### 메인 페이지

### 로그인 & 회원가입

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


___
# VscodeExtention
- 필수
  - Eslint
  - Prettier - Code formatter
  - Prettier ESLint
- 추천
  - Material Icon Theme
    - icon이 이뻐짐
  - Auto import
    - 자동으로 모듈을 가져옴
  - Auto Rename Tag
    - 태그 이름 바꿀때 반대편 태그 이름도 동시에 바뀜
  - CSS Peek
    - 클래스, ID로 CSS코드 검색할 수 있음. 해당 CSS 파일 위치로 이동
  - HTML to CSS autocompletion
    - HTML태그, CSS 스타일 속성 자동완성
  - htmltagwrap
    - 선택한 텍스트를 감싸는 적절한 HTML 태그를 자동으로 삽입
  - Reactjs code snippets
    - 리액트 고수되는 길 (rsc 치고 엔터누르면 자동으로 함수형 컴포넌트 생성해줌. 더 많은 기능 검색하면나옴)
  - vscode-styled-components
    - styled-components 쓸 때 개발 속도 빨라짐!!
  <br />
  <br />

# 개발환경 맞추기

- 터미널 -> npm install
  <br/>
  <br/>
# 안건

## 기술
 - React, Typescript
 - Axios, React Testing Library
 - SCSS, styled-components
 - AWS S3, cli
 - Github Actions CI
 - notion, slack
 - Eslint, Prettier

## git convention
- commit convention
  - feat: Update login button
- PR convention
  - Title
      - 필요없는 코드 제거
      - 주석 제거
      - API호출 로직 변경
  - Template
- branch convention
  - feature/login
  <br/>
  <br/>
# git 사용법
## 기능 추가시
1. 작업할 폴더로 이동
2. git clone [Repo 주소]
  - git clone https://github.com/Sassy-Project/front-setup.git
3. cd [Project Folder]
  - npm install // node_modules, package-lock.json 동기화
4. git branch [생성브랜치 이름]/이름
  - feature/login
5. git checkout feature/login
  - git status // 상태 확인
  - git log // 위치 확인 (git log --graph // 그래프로 확인 가능)
6. 신나게 코드 작성
7. 코드 작성 완료
8. git add .
9. git commit -m "상태: 컨벤션"
  - git commit -m "feat: Update readme"
10. git push origin feature/login
  - git push --force(절대안돼요 ㅜ) origin feature/login 
11. PR(pull request) 작성
  - https://github.com/Sassy-Project/front-setup 이동
  - Pull requests 클릭
  - New Pull Request 클릭
  - develop <- feature/login 으로 변경
  - commit 탭에서 의도한 커밋이 다 푸쉬 되었는가 확인
  - 세팅된 템플릿에 맞게 글적기
  - 확인
12. git checkout develop
13. git pull origin develop
14. git branch feature/login
15. git checkout feature/login -- 반복
