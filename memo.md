# 여러가지 메모

## 사용해보고 싶은거

- 웹 트랜지션 api(노마드 코더-모르면 손해? 엄청난 웹 API가 나타났다!)
- 랜더링 끝나기 전까지 로딩화면 보여주기

## 해결한 문제

- 제거 과정에서 1은 오류도 없지만 제거가 안됐는데 2로 만드니까 제거가 됨. 이유 모름.

```javascript
wordsModel.findByIdAndDelete(id)
wordsModel.findByIdAndDelete(id).then(function(doc){console.log(doc)});
```

## 할 일

- 회원가입/로그인 기능 추가(세션이 진행될 동안만 단어저장을 유지하는 방법 찾기 실패함)
  - 로그인 요청 -> 서버에서 세션 생성 및 수명 설정 -> session 를 회신 -> 브라우저에서 session id를 회신 받아서 sessionStorage에 저장 -> 이후의 요청을 보낼때마다 헤더에 session id 를 실어서 전송 -> 서버에서 요청을 받을 때 session id 가 유효한지 체크하여 정상 응답을 줄 지, 403 에러를 낼 지 판단함.
  - google OAuth 사용. signInPage에서 로그인/회원가입 버튼을 두고 그 신호만 보내면 서버에서 처리. 200/401을 보낸다.
- 시험결과 스키마 만들기
- 단어시험페이지(/test) 세팅페이지(/main)와 연결 + 변수 전달(시간, 문제 수, 문제 유형)
  - useNavigator와 useLocation을 이용해 state형식으로 변수 전달하기
  - 서버에서 가져오기

### 서버 express, 프론트 react로 구성

- 참고할 사이트
    > `https://react.vlpt.us/integrate-api/`
    > `https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/`
    > `https://hu-coding.tistory.com/146`

### 생각 정리용 메모장

- 회원가입/로그인 기능 추가(할일 19번 줄)
  - 클라이언트에서 엑세스 토큰을 받고 서버에 넘겨주면 서버가 그 엑세스 토큰을 가지고 구글에서 정보를 가져와 처리해야 하는 건 알았음
  - 서버부터 구현하려했으나 엑세스 토큰을 가지고 와서 구글에 보내면 도대체 무슨 정보를 보내주는 건지 알 수가 없어서 클라이언트 부터 구현해서 엑세스 토큰 받고 테스트 해보기로 함
  - 클라이언트 로그인 구현 계획: 이슈에 작성
    - `window.location.assign(url)`을 이용해 OAuth 서버에서 로그인. 완료 후 리다이렉션 하면 파라미터로 정보를 전해주는 것을 확인함
      > 형식: `http://localhost:3000/signin/redirect?code={엑세스토큰?}&scope={주어진엑세스토큰으로접근가능한정보}&authuser=0&prompt=consent`
      - 이걸 클라이언트에서 처리 후 서버에서 get을 받아오면 되겠다 싶어서 서버통신 코드 작성 중, 서버가 어떤 http 상태 코드를 주냐에 따라 동작을 다르게 해야할 것 같아서 별안간 http state code 공부 중.
      - 쿼리의 파라미터와 url 파라미터는 다르다. ?paramName=data -> 쿼리, /data -> 파라미터. 리액트에서도 각각 useSearchParams, useParams hook을 써서 가져올 수 있다. 다르다!!!
    - 콘솔이 두 번 찍히는 현상 -> React.StrictMode 때문. 디버깅 용으로 함수를 두 번 돌린다(아마 랜더링 전과 랜더링 후 인듯?) 배포 후에는 작동하지 않으므로 신경쓰지 않아도 됨.
    - axios.catch에서는 status가 200, 300이 아닐 때 작동하는 것 같다. status code를 얻어오려면 error.response.status를 쓰라길래 일단 썼는데 테스트 해봐야 함.
  - 서버 로그인 구현
    - signIn 함수를 두번 exports 해서 왜 의도한대로 안 움직이는지 찾기 위해 엄청 땅팠다.... js는 정말... export를 한 곳에 하는게 좋은 것 같다. -> **방법찾기!!**
  - 회원가입 할 때 추가로 받는 정보가 없어서 그냥 하나로 합쳐도 되겠다는 생각을 했다. 따라서 이제부터는 하나로 처리한다. (유저 데이터베이스도 필요없지 않나...하고 생각하고 있다. 어차피 이메일만 저장할 거 그걸 id로 삼아도 되지 않을까...?)
    - 백엔드 userController 61행. (google OAuth) 받아온 토큰을 이용해 회원정보 받아오기 단계에서 다음과 같은 에러 발생. 구글에서 받았다.
      - 'You are receiving this error either because your input OAuth2 scope name is invalid or it refers to a newer scope that is outside the domain of this legacy API.\n' +
      '\n' +
      'This API was built at a time when the scope name format was not yet standardized. This is no longer the case and all valid scope names (both old and new) are catalogued at https://developers.google.com/identity/protocols/oauth2/scopes. Use that webpage to lookup (manually) the scope name associated with the API you are trying to call and use it to craft your OAuth2 request.\n'
