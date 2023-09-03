# Project-AA 
React로 구현한 웹페이지
- 성공회대학교 소프트웨어공학과 캡스톤 프로젝트

## 프로젝트 소개
학교 주변의 카페나 편의시설들을 한눈에 확인하고 그 장소에 대한 내용을 볼 수 있는 지도기반 웹페이지를 제작하였습니다.
카페 같은 경우에는 카페의 아메리카노 가격을 비교하여 카페의 가격대를 유추할 수 있는 가격비교 기능을 구현하였습니다.
- 개발기간: 2023.03 ~ 2023.06




## 기술 스택

### ✔️Frond-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Css-1572B6?style=for-the-badge&logo=Css&logoColor=white"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple"><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

### ✔️Back-end
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"><img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white">

## 개발 내용
- ### 네이버지도 API
Naver Maps의 기본 기능을 유지하되 몇가지 React에서 다루기 용이한 기능을 제공하는 react-naver-maps 라이브러리를 사용하였습니다.  
지도 화면에서 Marker를 표시하고 이벤트를 걸어줄 때 React의 EventHandler 방식을 사용하여 더 쉽게 Naver Maps 의 이벤트를 다룰 수 있었고,  
Naver Maps의 요소들을 React 컴포넌트 형태로 다룰 수 있었습니다.

- ### 디자인
  사용자에게 보다 직관적이고 깔끔한 UI/UX 외관을 위해 노력했습니다. 토글되었을 때 버튼이나 글자의 색상과 각 기능의 배치를 신경썼습니다.
  기존 프로젝트에서는 항상 기본 CSS를 사용해왔고 그것으로 하나하나 작업해 왔는데 이번 프로젝트에서는 작업을 하면서 선택자(Selector)를 만드는 관점에서 볼 때 불필요한 부모 요소 선택자를 매번 적어야 하고 점점 코드가 지저분해지면서 수정이 힘들어지는 CSS의 단점을 경험했습니다. 그 결과로 작업 후반에서는 SCSS를 새로 시도해보면서 작업했습니다.




- ### 사이드 네비게이션 바 구현
지도앱에 있어서 가장 핵심적인 기능이라고 생각됩니다. 네이게이션 바에 포함된 기능은 다음과 같습니다.

- #### 장소 선택 토글버튼
  지도에 나타나는 편의시설을 전체/카페/노래방/기타(영화관,마트,ATM)로 분류를 하였고 각 분야를 선택하면 그 분야에 관한 마커와 내용들을 지도에 표시되게 하였습니다.
  
  ![카페탭](https://github.com/zenu98/PROJECT-AA/assets/90780629/b25afaa4-b621-438c-85b2-9aed6c201d7e)
  ![마트탭](https://github.com/zenu98/PROJECT-AA/assets/90780629/f1f7fc56-fbd3-459a-8b2b-dfe2c72ca6d2)
  
- #### 장소/가격비교 탭
   장소탭을 선택하면 일반적인 지도의 기능처럼 선택된 분야에 대한 가게 내용이 메뉴바에 나열이 되는 형식입니다.  
  가격비교를 선택한다면 카페에 한정하여 아메리카노 가격을 기준으로 카페의 가격대를 확인할 수 있습니다.
  
  ![가격비교](https://github.com/zenu98/PROJECT-AA/assets/90780629/4578f0dd-1e34-4e49-9865-5c75b53f8dac)
- #### 시설에 대한 세부사항 Detail 메뉴
  나열된 시설들 중 한가지를 클릭하면 추가적인 상세페이지가 뜨고 그곳에는 다시 그 시설에 대한 개요, 메뉴와 간단한 리뷰를 작성할 수 있게하는 게시판을 구현하였습니다.
  
  ![디테일탭1](https://github.com/zenu98/PROJECT-AA/assets/90780629/efeba007-6222-4de0-8113-1283a2386f75)
![디테일탭](https://github.com/zenu98/PROJECT-AA/assets/90780629/40e04dcf-b4ff-4c6e-b215-3ff5f55c51bf)
![디테일탭3](https://github.com/zenu98/PROJECT-AA/assets/90780629/5dc2eb1b-469f-410c-85a6-be899603e8c1)
- #### 접기 애니메이션
  사이드 네비게이션 바를 접거나 다시 등장하게 할 수 있도록 하는 슬라이드 애니메이션을 구현하였습니다.
  
  ![접기효과](https://github.com/zenu98/PROJECT-AA/assets/90780629/d01010be-f402-4e43-accb-6a6b4cf6e154)

- #### 로그인/로그아웃 기능
  네비게이션 상단에 로그인이 되어있는지 알 수 있도록 UI를 제작하였고 로그인 아이콘을 클릭하면 로그인페이지로 넘어가도록 하였습니다.
  로그인 페이지는 JSON토큰을 이용한 인증절차를 프론트엔드에서 담당하여 간단한 로그인 기능과 회원가입 기능을 구현했습니다.  
  로그인이 성공적으로 이루어졌다면 다시 메인페이지로 redirect 되고 로그인 UI가 변경되어집니다.
  
  ![로그인](https://github.com/zenu98/PROJECT-AA/assets/90780629/d64b2fc3-f862-45b2-8047-c9d84528c0a9)
  ![로그인시화면](https://github.com/zenu98/PROJECT-AA/assets/90780629/3e8ff903-1f2b-45ce-9fb4-86fc32bf8be4)




