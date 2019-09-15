## Why Webpack?

- 해결하고자 하는 문제?
  - 자바스크립트 스코프 문제
  - 브라우저 별 HTTP 리퀘스트 숫자의 제약
  - 사용하지 않는 코드의 관리
  - Dynamic Loainng & Lazy Loading 미지원

## What is Webpack?

- Modules?
  - IIFE
- Web Task Manager
- Module Bundler

## Front-end Build System

- Node.js
- Node.js Debugging
- NPM
- NPM Library Management (Local & Global)
- NPM Custom Commands

## Getting Started from Scratch

## Getting Started from Official Doc

## Concepts

- entry
- output
- loader
- plugin

## 전개 흐름

- [이론] 웹팩의 등장 배경 및 기존 자바스크립트의 문제점(웹팩이 해결하려고 하는 것?)
  - 자바스크립트 스코프 문제
  - 브라우저 별 HTTP 리퀘스트 숫자의 제약
  - 사용하지 않는 코드의 관리
  - Dynamic Loainng & Lazy Loading 미지원
- [실습] 자바스크립트의 모듈 이해하기 실습
  - IIEF 실습 및 직접 코드
- [실습] 자바스크립트 모듈화를 이해할 수 있는 간단한 웹팩 실습
  - npm 기본 및 설명
  - header.js / footer.js / button.js 등의 js 파일을 이용한 웹팩 명령어 실습 (header와 footer에서 사용하는 변수의 이름은 같지만 각각의 파일에서 값이 다른 케이스를 모듈화. 앱의 이름을 담는 상수가 좋을 듯)
    - npm 커스텀 명령어 설정 방법
    - node.js 디버깅 방법
    - 웹팩 watch 모드
    - 결과물은 그냥 `node main.js`로 터미널에서 돌려도 될 듯
    - Tree Shaking 설명하면서 `import`로 사용하지 않았던 코드들이 제거 되었다는 것을 `dist/main.js` 결과물에서 찾아서 보여주기
    - 결과물의 각 모듈이 IIFE 형태의 각 모듈로 구성되어 있다라는 것을 짚어주기
- [실습]
