## 미니 블로그 기획과 구현

### 1. 제작 기반
- 코드 편집기: VSCode
- 사용환경 구성: create-react-app
- 추가 설치 리액트 패키지: react-router-dom v6, styled-components

### 2. 미니 블로그에 필요한 기능
- 글 목록 보기 기능 (리스트 형태)
  + PostList, PostListItem
- 글 보기 기능
  + Post
- 댓글 보기 기능
  + CommentList, CommentListItem
- 글 작성 기능
  + PostWrite
- 댓글 작성 기능
  + CommentWrite
  
### 3. 구현
#### 공통 기능
- 버튼 컴포넌트
- 텍스트 입력 컴포넌트
#### 리스트 컴포넌트 구현
- PostList
- PostListItem
- CommentList
- CommentListItem
#### Page 컴포넌트
- MainPage
- PostViewPage
- PostWritePage

### 4. 라우터 구현
```
<BrowserRouter><MainTitleText>준형의 미니 블로그</MainTitleText>
    <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="post-write" element={<PostWritePage/>}/>
        <Route path="post/:postId" element={<PostViewPage/>}/>
    </Routes>
</BrowserRouter>
```
### 5. 빌드
```
npm run build
```
Node.js 환경에서 간단한 정적 파일 웹 서버를 실행하기 위해 serve 패키지 설치
```
npm install -g serve
```
빌드 완료된 파일을 웹서버에 호스팅
```
serve -s build
```
윈도우에서 만약 권한 설정 문제로 실행이 안된다면 PowerShell에서
```
get-ExecutionPolicy
```
만약 권한이 Restricted 라면
```
Set-ExecutionPolicy RemoteSigned
```
Y 입력 후 다시 serve 명령어 실행
