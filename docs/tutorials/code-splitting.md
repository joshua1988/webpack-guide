---
title: Code Splitting
---

## Code Splitting

앞에서 배운 웹팩의 주요 4가지 속성을 이해하기 위해 간단한 실습을 해보겠습니다.

## 실습 절차

1. 빈 폴더에서 아래 명령어로 `package.json` 파일을 생성

```bash
npm init -y
```

2. 아래 명령어로 실습에 필요한 라이브러리 설치

```bash
npm i webpack webpack-cli css-loader style-loader mini-css-extract-plugin -D
```

3. 프로젝트 루트 레벨에 `index.html` 파일을 생성하고 아래 내용 추가

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>CSS & Libraries Code Splitting</title>
  </head>
  <body>
    <header>
      <h3>CSS Code Splitting</h3>
    </header>
    <div>
      <!-- 웹팩 빌드 결과물이 잘 로딩되면 아래 p 태그의 텍스트 색깔이 파란색으로 표시됨 -->
      <p>
        This text should be colored with blue after injecting CSS bundle
      </p>
    </div>
    <!-- 웹팩의 빌드 결과물을 로딩하는 스크립트 -->
    <script src="./dist/bundle.js"></script>
  </body>
</html>
```

4. 프로젝트의 루트 레벨에 `base.css` 파일 생성 후 아래 내용 추가

```css
p {
  color : blue;
}
```

5. 프로젝트 루트 폴더에서 `index.js` 파일을 생성 후 아래 내용 추가

```js
import './base.css';
```

6. 프로젝트 루트 레벨에 웹팩 설정 파일 `webpack.config.js` 추가

```js
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}
```

:::tip
`mode` 속성은 웹팩 버전 4 이상에서 추가된 속성입니다. 웹팩으로 빌드할 때의 `development`, `production`, `none` 모드를 설정할 수 있습니다.
:::

7. CSS 파일을 별도로 분리하기 위해 `MiniCssExtractPlugin` 플러그인 설정 추가

```js {3,16-19,24-26}
// webpack.config.js
var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}
```
