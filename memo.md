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

- `https://stackoverflow.com/questions/9230932/file-structure-of-mongoose-nodejs-project` 참고해서 api 폴더 구조 변경
- 시험결과 스키마 만들기
- 단어시험페이지(/test) 세팅페이지(/main)와 연결 + 변수 전달(시간, 문제 수, 문제 유형)
  - useNavigator와 useLocation을 이용해 state형식으로 변수 전달하기
  - 서버에서 가져오기

### 서버 express, 프론트 react로 구성

- 참고할 사이트
    > `https://react.vlpt.us/integrate-api/`
    > `https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/`
    > `https://hu-coding.tistory.com/146`

### socket.io를 이용해 사용자의 접속/연결끊기 캐치

### 데이터베이스 삭제 구현

- 창을 끌 때
- 새로고침할 때는 연결 안끊어지게 하기
