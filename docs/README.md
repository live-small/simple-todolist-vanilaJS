### 코딩스타일

-   prettier, eslint 설정

### 구현 목록

-   [x] state 다루는 함수, validation 처리 - initialState, setState

    -   todoList state 타입 체크
        -   배열인지, 원소가 object인지
        -   원소에 text, isCompleted 속성값이 있는지

-   [x] todo를 클릭하면 삭선이 그어진다 (완료했음을 표시)
    -   `isCompleted` 값으로 제어
-   [x] todo 옆에 삭제 button을 클릭해, todo를 삭제할 수 있다
-   [x] todoList 아래, 완료된 todo 개수, 전체 todo 개수를 볼 수 있다
