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

- testSetting의 clock => 렌더링 될때 쓰이고 페이지 이동할떄 끊어지게 설정
- inputPage 스타일

### 서버 express, 프론트 react로 구성

- 참고할 사이트
    > `https://react.vlpt.us/integrate-api/`
    > `https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/`
    > `https://hu-coding.tistory.com/146`

### socket.io를 이용해 사용자의 접속/연결끊기 캐치

### 데이터베이스 삭제 구현

- 창을 끌 때
- 새로고침할 때는 연결 안끊어지게 하기
