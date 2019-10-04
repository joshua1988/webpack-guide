---
title: 웹팩 맛보기
---

## 웹팩 맛보기 튜토리얼

그럼 이제 웹팩을 가볍게 맛볼수 있는 튜토리얼을 진행해보겠습니다. 이번 튜토리얼로 웹팩을 실행할 수 있는 개발 환경을 구성하고 빌드 과정을 경험해볼 수 있을 것입니다.

## 개발 환경 구성

먼저 튜토리얼을 진행하기 위해서는 아래 소프트웨어가 컴퓨터에 설치되어 있어야 합니다.

- [Node.js LTS Version(버전 10 이상)](https://nodejs.org/en/)
- NPM 버전 6 이상

## 실습 절차 - 웹 페이지 자원 구성

1. 빈 폴더에서 아래 명령어로 `package.json` 파일을 생성

```bash
npm init -y
```

2. 아래 명령어로 해당 폴더에 웹팩 관련 라이브러리와 *lodash* 라이브러리 설치

```bash
npm i webpack webpack-cli -D
npm i lodash
```

3. 폴더에 `index.html` 파일을 생성하고 아래 내용 추가

```html
<html>
  <head>
    <title>Webpack Demo</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="src/index.js"></script>
  </body>
</html>
```

4. 프로젝트 루트 레벨에 `src` 폴더를 생성하고 그 안에 `index.js` 파일 생성.

```js
function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

## 실습 절차 - 웹팩 빌드를 위한 구성 및 빌드

5. 웹팩 빌드 및 빌드 결과물로 실행하기 위해 각 파일에 아래 내용 반영

```js {2}
// index.js
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

```html
<!-- index.html -->
<html>
  <head>
    <title>Webpack Demo</title>
    <!-- <script src="https://unpkg.com/lodash@4.16.6"></script> -->
  </head>
  <body>
    <!-- <script src="src/index.js"></script> -->
    <script src="dist/main.js"></script>
  </body>
</html>
```

6. 웹팩 빌드 명령어를 실행하기 위해 `package.json` 파일에 아래 내용 추가

```json
"scripts": {
  "build": "webpack --mode=none"
}
```

7. `npm run build` 명령어 실행 후 `index.html` 파일을 [라이브서버](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)로 실행
8. 프로젝트 폴더 루트 레벨에 `webpack.config.js` 파일 생성 후 아래 내용 추가

```js
// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

9. `package.json` 파일을 아래와 같이 수정

```json
"scripts": {
  "build": "webpack"
}
```

10. 다시 `npm run build` 명령어를 실행하여 빌드가 잘 되는지 확인