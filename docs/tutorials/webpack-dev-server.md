---
title: Webpack Dev Server
---

## 웹팩 데브 서버

웹팩 데브 서버의 동작 방식을 확인하기 위해 실습을 해보겠습니다. 이번 실습에서는 웹팩 데브 서버로 빌드한 결과물이 파일 탐색기에서 보이진 않지만 정상적으로 애플리케이션에 로딩되어 돌아가는 것에 주의합니다.

## 실습 절차

1. 빈 폴더에서 아래 명령어로 `package.json` 파일을 생성

```bash
npm init -y
```

2. 아래 명령어로 필요 라이브러리 설치

```bash
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
```

3. `package.json` 파일에서 아래와 같이 `scripts` 속성에 커스텀 명령어를 추가

```json
{
  // ...
  "scripts": {
    "dev": "webpack-dev-server"
  },
}
```

4. 프로젝트 루트 레벨에 `index.html` 파일 생성 후 내용 추가

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack Dev Server</title>
  </head>
  <body>
    <!-- 빌드 결과물이 정상적으로 로딩되면 아래 div 태그의 텍스트가 변경됨 -->
    <div class="container">
      TBD..
    </div>
    <!-- HTML Webpack Plugin에 의해 웹팩 빌드 내용이 아래에 추가됨 -->
  </body>
</html>
```

5. 프로젝트 루트 레벨에 `index.js` 파일 생성 및 아래 내용 추가

```js
var div = document.querySelector('.container');
div.innerText = 'Webpack loaded!!';
```

6. 웹팩 설정 파일 `webpack.config.js` 생성 후 아래 내용 추가

```js
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
  ],
};
```

7. 명령어 입력 창에 `npm run dev` 를 입력하여 웹팩 데브 서버 실행
8. [localhost:9000](localhost:9000)에 접속 후 아래와 같이 화면이 뜨는지 확인

![웹팩 데브 서버 결과 화면](../.vuepress/public/images/wds.png)