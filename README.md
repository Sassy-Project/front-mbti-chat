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
