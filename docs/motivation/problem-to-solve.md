---
title: 웹팩으로 해결하려는 문제
---

## 웹팩으로 해결하려는 문제?

[웹팩의 등장 배경](/motivation/why-webpack.html#웹팩의-등장-배경)에서도 살펴봤지만 웹팩에서 해결하고자 하는 기존의 문제점은 다음 4가지 입니다.

- 자바스크립트 변수 유효 범위
- 브라우저별 HTTP 요청 숫자의 제약
- 사용하지 않는 코드의 관리
- Dynamic Loading & Lazy Loading 미지원

## 자바스크립트 변수 유효 범위 문제

웹팩은 변수 유효 범위의 문제점을 [ES6의 Modules](https://babeljs.io/docs/en/learn#modules) 문법과 웹팩의 모듈 번들링으로 해결합니다.

## 브라우저별 HTTP 요청 숫자의 제약

<!-- https://docs.pushtechnology.com/cloud/latest/manual/html/designguide/solution/support/connection_limitations.html -->

TCP 스펙에 따라 브라우저에서 한 번에 서버로 보낼 수 있는 HTTP 요청 숫자는 제약되어 있습니다. 아래의 표는 최신 브라우저 별 최대 HTTP 요청 횟수입니다.

|   **브라우저**   | **최대 연결 횟수** |
| :----------: | :----------: |
|   익스플로러 7    |      2       |
| 익스플로러 8 ~ 9  |      6       |
| 익스플로러 10, 11 |    8, 13     |
|      크롬      |      6       |
|     사파리      |      6       |
|    파이어폭스     |      6       |
|     오페라      |      6       |
|  안드로이드, iOS  |      6       |

따라서, HTTP 요청 숫자를 줄이는 것이 웹 애플리케이션의 성능을 높여줄 뿐만 아니라 사용자가 사이트를 조작하는 시간을 앞당겨 줄 수 있죠.

:::tip
⚠️ 알아두면 좋아요! <br>
클라이언트에서 서버에 HTTP 요청을 보내기 위해서는 먼저 TCP/IP가 연결되어야 합니다.
:::

웹팩을 이용해 여러 개의 파일을 하나로 합치면 위와 같은 브라우저별 HTTP 요청 숫자 제약을 피할 수 있습니다.

## Dynamic Loading & Lazy Loading 미지원

[Require.js](https://requirejs.org/)와 같은 라이브러리를 쓰지 않으면 동적으로 원하는 순간에 모듈을 로딩하는 것이 불가능 했습니다. 그러나 이젠 웹팩의 [Code Splitting]() 기능을 이용하여 원하는 모듈을 원하는 타이밍에 로딩할 수 있습니다.
