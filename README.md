# 요구사항

- [x] 툴팁 컴포넌트로 감싸진 요소에 마우스 오버 시 툴팁이 떠야 하고 마우스 아웃 시 툴팁이 사라져야 합니다.
- [x] 툴팁 컴포넌트로 감싸진 요소의 부모 요소가 overflow hidden 혹은 scroll 일 경우에도 퉅팁이 최상위에서 제대로 보여야 합니다.
- [x] 툴팁 방향은(`left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`) 으로 뜰 수 있어야 합니다.
- [x] 툴팁이 나타남 혹은 사라짐은 사용가 원하면 delay로 동작 가능해야 합니다.
- [x] delay 시간은 사용자가 custom 하게 값을 넘겨 줄 수 있어야 합니다.
- [x] 툴팁 내용은 string , number, icon, icon & string, 클릭 할 수있는 button 등 여러가지 형태의 데이터를 표현 할 수 있어야 합니다.
- [x] 특정 툴팁은 스타일을 커스텀하게 설정할 수 있어야합니다.
- [x] 특정 state 값에 의해 툴팁이 안뜨게 처리할 수 있어야 합니다.
- [x] 해당 컴포넌트 구현 로직 혹은 아키텍쳐 및 API 를 readme에 정리하십시오.

# 제출 가이드 라인

- [x] 프로젝트의 전체 소스 코드를 GitHub에 업로드하세요.
- [x] README 파일에 프로젝트 설정 및 실행 방법을 상세히 기술하세요.
- [x] GitHub 리포지토리 링크를 메일 회신으로 보내주세요.

# 라이브러리 사용 지침

- [x] 기본 React, Typescript 사용해야 합니다.
- [x] sass, scss 사용 가능합니다. 기타 사용하고 싶은 라이브러리 있으면 사용시 readme 에 사용 원인 적시해 주시길 바랍니다.
- [x] Popper.js , MUI, antd 등 툴팁 기능이 완성된 라이브러리 사용 금지입니다.

# 컴포넌트 아키텍쳐

![Tooltip 아키텍쳐 이미지](https://github.com/rlaclghks123/tool-tip/assets/55423198/9450e62b-212d-4450-a087-1a15b42068e0)

- src
  - components
    - BasicTooltips
      - index.tsx
      - index.css
      - CommonBasicTooltipsContainer.tsx
    - DelayAndHoverNotHidden
      - index.tsx
      - index.css
    - CustomContentTooltips
      - CommonCustomContents.tsx
      - index.tsx
      - index.css
    - CustomColorTooltips
      - index.tsx
      - index.css
    - OnAndOffTooltips
      - index.tsx
      - index.css
  - db
    - basicTooltipsDb.ts
  - hooks
    - useHoverTooltips.ts
  - pages
    - TooltipPage
      - index.css
      - index.tsx
  - styles
    - reset.css
  - utils
    - changePostion.ts

# 프로젝트 설정 및 실행 방법

1. github 저장소를 fork 합니다.
2. 터미널창에서 `npm i` 또는 `npm install`을 합니다.
3. 해당 localhost:3000에서 확인할 수 있습니다.
