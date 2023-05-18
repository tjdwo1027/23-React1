# 김성재 201930104


## 12주차 2023.05.18
#### 1.합성
+ 여러개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는것
+ 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법
##### 2. 특수화
+ 웰컴다이얼로그는 다이얼로그의 특별한 케이스다.
+ 범용적인 개념을 구별이 되게 구체화하는것을 특수화라고 한다.
+ 리액트를 사용하여  특수화를 구현

#### 3. 컨택스트
+ 컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식을 제공
+ 어떤 컴포넌트라도 쉽게 데이터에 접근 할 수 있다.

#### 4. 언제 컨텍스트 사용할까?
+ 여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI테마, 현재 선택된 언어 등이 있다

#### 5. 컨텍스트 사용전에 고려해야할점
+ 컨텍스트는 다른 레벨의 많은 컴포넌트가 특정 데이터를 필요로 하는 경우에 사용한다.
+ 컴포넌트와 컨텍스트가 연동되면 재사용성이 떨어진다

#### 6. 컨텍스트 API
+ REACT. creatContext 
- 컨텍스트를 생성하기 위한 함수
- 파라메타에는 기본값을 넣어주면 됩니다.

+ Context.Provider
- 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 새당 컨텍스트의 데이터에 접근할 수 있게 된다.
- 하위 컴포넌트를 consumer 컴포넌트라고 부른다

+ Context.Consumer
- 함수형 컴포넌트에서 Context.Consumer를 사용하여 컨텍스트를 구독할 수 있다.
- Context.Consumer로 감싸주면 자식으로 들어간 함수가 현재 컨텍스트의 value를 받아서 리액트 노드로 리턴한다.

+ Context.dispalyName
- 컨텍스트 객체는 displayName 이라는 문자열 속성을 갖습니다.


## 11주차 2023.05.11
#### 1. 컴포넌트 종류
+ 섭씨 화씨


## 10주차 2023.05.04
#### 1.리스트와 키
+ 리스트는 자바스크립트의 변수나 객체를 하나위 변수로 묶어놓은 배열과 같은 것
+ 키는 각 객체나 아이템을 구분할 수 있는 고유한 값

#### 2. 여러개의 컴포넌트 렌더링 하기
+ 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 리턴 하는것

#### 3. 기본적인 리스트 컴포넌트
+ 리스트 아이템에는 무조건 키가 있어야 한다

#### 4. 리스트 키에 대해 알아보기
+ 리스트에서의 키는 리스트에서 아이템을 구별하기 위한 고유한 문자열이다.
+ 키는 리스트에서 어떤 아이템이 변경 추가 또는 제거되었는지 구분하기 위해 사용

#### 5. 폼
+ 사용자로부터 입력을 받기 위해 사용하는 것

#### 6. 제어 컴포넌트
+ 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트

#### 7. textarea 태그 
+ 텍스트를 태그가 감싸는 형태로 사용

#### 8. select 태그 

+ 드롭다운 목록을 보여주기 위한 HTML 태그
+ 여러가지 욥션중에서 하나 또는 여러개 선택 가능



## 9주차 2023.04.27
#### 1. 이벤트 처리하기
+ 이벤트 핸들러 추가
- handleClick()함수 호출

+ 함수형에서 이벤트 핸들러르 정의하는 방법
- 함수형에서는 this를 사용하지 않고 onClick에서 바로 HandleClick을 넘긴다

#### 2. Argument 전달
+ 함수를 정의할 때는 파라미터, 매개변수라고 부른다.
+ 함수를 사용할 때는 아규먼트, 인자라고 부른다.

#### 엘리먼트 변수
+ 렌더링해야 될 컴포던트를 변수처럼 사용하는 방법

#### 인라인 조건
+ 필요한곳에 조건문을 직접 넣어 사용하는 방법
+ 인라인 if
- if문을 직접 사용하지 않고 동일한 효과를 내기 위햐 &&논리 연산자를 사용
+ 인라인 if-else
- 삼항 연사자를 사용합니다

#### 컴포넌트 렌더링 막기
+ 컴포넌트를 렌더링하고 싶지 않을때에는 null을 리턴함



## 8주차 2023.04.20
#### 시험 
## 7주차 2023.04.13

## 6주차 2023.04.06
#### 1.컴포넌트 추출
+ 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는것
+ 기능 단위로 구분하고 곧바로 재사용이 가능하도록 추출하는것이 좋다.

#### 2.댓글 컴포넌트
+ 컴포넌트 파일을 만들어봤음

#### 3.State
+ 리액트 컴포넌트의 상태
+ 리액트 컴포넌트의 변경 가능한 데이터
+ 렌더링이나 데이터 흐름에 사용되는 값만  state에 포함

#### 4.State 특징
+ 자바스크립트 객체
+ 직접적인 변경 불가능

#### 5.생명주기에 대해 알아보기
+ 출생(Mounting) 인생(Updating) 사망(Unmounting)으로 나누어져 있음

## 5주차 2023.03.30
#### 1.엘리먼트란
+ 엘리먼트의 정의
- 엘리먼트는 리액트 앱을 구성하는 요소

+ 엘리먼트의 생김새
- 자바스크립트 객체의 형태 
- 내부의 모든 children을 포함하는 일반 JS객체
-  불변성을 갖고 있다.

+ 렌더링 엘리먼트 업데이트
- 시계 만들기

#### 2.컴포넌트 알아보기
+ 리액트 컴포넌트
- 속성들을 입력받아 알맞은 리액트 엘리먼트를 생성하여 리턴해주는것


#### 3.Props란
+ Props의 개념
- 리액트 컴포넌트의 속성
+ Props 특징
- 
+ Props 사용법
- 
#### 4.컴포넌트 만들기
+ 함수형 컴포넌트

+ 클래스형 컴포넌트

+ 컴포넌트 이름 짓기

+ 컴포넌트 렌더링


#### 컴포넌트 합성


## 4주차 2023.03.23
#### 1. 파일 백업

#### 2. jsx
+ jsx란?
- 자바스크립트의 확장 문법
+ jsx의 역할
+ jsx의 장점
- 코드 간결화
- 가독성 향상
- 해킹을 방어해 보안성 상승
+ jsx의 사용법
- 모든 자바스크립트 문법 지원
- XML과 HTML을 섞어서 사용

## 3주차 2023.03.16
#### 1. Node.js와 npm설치후 버전 확인
 + node --version
#### 2. chocolatey 활용 방법
#### 3. 리액트
 + 리액트의 정의 
   - 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
   - 자주 사용되는 기능을 정리해 모아놓은것


 + 리액트의 개념
   - 복잡한 사이트를 쉽고 빠르게 만들고 관리한기 위해 만들어진것
   - SPA를 쉽고 빠르게 만들 수 있도록 해주는 도구

 + 리액트의 장점
    - 빠른 업데이트와 렌더링 속도
    - 컴포넌트 기반 구조
    - 재사용성
    - 든든한 지원군
    - 활발한 지식 공유& 커뮤니티

 + 리액트 단점
   - 방대한 학습량
   - 높은 상태관리 복잡도

<br>

## 2주차 2023.03.09
#### 1.github 계정 생성 

<br>

## 1주차 2023.03.02