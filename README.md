# 📝영어 단어 시험 사이트

종강을 맞아 집에 돌아오니, 동생의 학습 감독은 제가 되었습니다! 그중 영어단어 시험은 별것도 아닌 게 시간을 꽤 잡아먹는 일이었습니다. 종이에 쓰기엔 귀찮고, 부모님이 원하는 단어시험 사이트/앱을 찾기도 어려웠습니다. 이왕 nodejs를 배운 김에 복습할 겸 영어 단어 시험 사이트를 만들어보려고 합니다.

## 요구사항

1. 시험방식 선택기능
	- ✅ 스펠링 or 의미 or 소리만 제시
	- ✅ 시험 시간(제한시간 두기)
	- ✅ 단어의 개수
2. 다른 탭으로의 이동막기
	- 컨닝방지
3. 시험결과 확인 기능
	- 따로 탭을 두어 저장
	- 사이트에 접속해 있는 동안에는 시험결과를 모두 저장
	- 📄 본 시험의 방식 / 시작, 끝난 시간 / 총 문제 수, 맞춘 개수
4. 단어 입력 기능
	- 시험 볼 단어들을 입력해둘 수 있게 하기

## 기술스택

- react
- node.js
- mongoDB