# VscodeExtention

- Material Icon Theme
- Auto import
- Auto Rename Tag
- CSS Peek
- Eslint
- HTML CSS Support
- HTML to CSS autocompletion
- htmltagwrap
- Prettier - Code formatter
- Prettier ESLint
- Reactjs code snippets
- vscode-styled-components
  <br />
  <br />

# 개발환경 맞추기

- node_modules 제거
- package-lock.json 제거 (package.json 아님)
- 터미널 -> npm install
  <br/>
  <br/>
# 안건
## 상태관리 라이브러리
- Redux
- MobX
- Recoil
## CSS 라이브러리
- SCSS
- Styled-components
## 비동기 호출 라이브러리
- Ajax
- Axios
## Test 라이브러리
- Jest
- React Testing Library
- Enzyme
## 폴더구조화
## Code Formatter
- Eslint
- Prettier
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
