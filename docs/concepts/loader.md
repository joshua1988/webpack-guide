---
title: Loader
---

## Loader

로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성입니다.

```js
// webpack.config.js
module.exports = {
  module: {
    rules: []
  }
}
```

엔트리나 아웃풋 속성과는 다르게 `module`라는 이름을 사용합니다.

## Loader가 필요한 이유

웹팩으로 애플리케이션을 빌드할 때 만약 아래와 같은 코드가 있다고 해보겠습니다.

```js
// app.js
import './common.css';

console.log('css loaded');
```

```css
/* common.css */
p {
  color: blue;
}
```

```js
// webpack.config.js
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  }
}
```

위 파일을 웹팩으로 빌드하게 되면 아래와 같은 에러가 발생합니다.

![CSS 로딩 에러](../.vuepress/public/images/css-loading-error.png)

위 에러 메시지의 의미는 `app.js` 파일에서 임포트한 `common.css` 파일을 해석하기 위해 적절한 로더를 추가해달라는 것입니다.

## CSS Loader 적용하기

이 때 해당 폴더에 아래의 NPM 명령어로 CSS 로더를 설치하고 웹팩 설정 파일 설정을 바꿔주면 에러를 해결할 수 있습니다.

```bash
npm i css-loader -D
```

```js {7-14}
// webpack.config.js
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  }
}
```

위의 `module` 쪽 코드를 보면 `rules` 배열에 객체 한 쌍을 추가했습니다. 그리고 그 객체에는 2개의 속성이 들어가 있는데 각각 아래와 같은 역할을 합니다.

- `test` : 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
- `use` : 해당 파일에 적용할 로더의 이름

정리하자면 위 코드는 해당 프로젝트의 모든 CSS 파일에 대해서 CSS 로더를 적용하겠다는 의미입니다.

적용 후 빌드하면 정상적으로 실행되는 것을 알 수 있습니다.

## 자주 사용되는 로더 종류

앞에서 살펴본 CSS 로더 이외에도 실제 서비스를 만들 때 자주 사용되는 로더의 종류는 다음과 같습니다.

- [Babel Loader](https://webpack.js.org/loaders/babel-loader/#root)
- [Sass Loader](https://webpack.js.org/loaders/sass-loader/#root)
- [File Loader](https://webpack.js.org/loaders/file-loader/#root)
- [Vue Loader](https://github.com/vuejs/vue-loader)
- [TS Loader](https://webpack.js.org/guides/typescript/#loader)

로더를 여러 개 사용하는 경우에는 아래와 같이 `rules` 배열에 로더 옵션을 추가해주면 됩니다.

```js
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
      // ...
    ]
  }
}
```

## 로더 적용 순서

특정 파일에 대해 여러 개의 로더를 사용하는 경우 로더가 적용되는 순서에 주의해야 합니다. 로더는 기본적으로 **오른쪽에서 왼쪽 순으로 적용**됩니다.

CSS의 확장 문법인 SCSS 파일에 로더를 적용하는 예시를 보겠습니다.

```js
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader']
    }
  ]
}
```

위 코드는 scss 파일에 대해 먼저 Sass 로더로 전처리(scss 파일을 css 파일로 변환)를 한 다음 웹팩에서 CSS 파일을 인식할 수 있게 CSS 로더를 적용하는 코드입니다.

만약 웹팩으로 빌드한 자원으로 실행했을 때 해당 CSS 파일이 웹 애플리케이션에 인라인 스타일 태그로 추가되는 것을 원한다면 아래와 같이 [style 로더](https://webpack.js.org/loaders/style-loader/#root)도 추가할 수 있습니다.

```js
{
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}
```

그리고, 위와 같이 배열로 입력하는 대신 아래와 같이 옵션을 포함한 형태로도 입력할 수 있습니다.

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { modules: true }
        },
        { loader: 'sass-loader' }
      ]
    }
  ]
}
```