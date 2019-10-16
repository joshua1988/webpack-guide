---
title: Webpack Merge
---

## Webpack Merge

웹팩 머지는 단어 그대로 여러 개의 웹팩 설정 파일을 하나로 병합해주는 라이브러리입니다. [실행 모드에 따라 웹팩 설정하기](advanced/mode-config.html#실행-모드에-따라-웹팩-설정-달리하기)에서도 언급했지만 일반적으로 웹 애플리케이션을 제작할 떄는 웹팩 설정을 개발(Development)용과 배포(Production)용으로 나누어 적용합니다.

앞에서 배운 것처럼 실행 모드에 따라 조건 문으로 설정을 구분할 수 있으나 실제로 파일을 아예 나눠놓는 게 더 권장하는 방식입니다. 웹팩 머지는 이러한 상황에서 더 빛을 발휘할 수 있습니다.

## 웹팩 설정 파일 구분 전략

웹팩 머지를 효율적으로 사용하는 방법은 개발용과 배포용 설정 파일에서 공통으로 쓰이는 부분을 먼저 분리하는 것입니다. 파일 체계는 아래와 같은 형식으로 구성합니다.

```bash
webpack.common.js
webpack.dev.js
webpack.prod.js
```

각 파일의 모습은 다음과 같습니다.

```js
// webpack.common.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
}
```

공통 설정 파일에는 엔트리, 아웃풋, 플러그인과 같이 실행 모드에 관계 없이 항상 들어가야 하는 코드를 추가합니다.

```js
// webpack.dev.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { contentBase: './dist' }
});
```

개발용 설정 파일에는 개발자 도구나 웹팩 데브 서버와 같은 설정을 추가합니다. 그리고 `webpack-merge` 라이브러리를 설치 및 로딩하고 나서 웹팩 공통 설정 파일인 `webpack.common.js` 파일을 로딩해서 같이 병합해줍니다.

```js
// webpack.prod.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production'
});
```

배포용 설정 파일에는 배포하기 전 웹 리소스 최적화를 위한 설정들을 추가해줍니다.

## 참고 자료 - 웹팩 머지

웹팩 머지 라이브러리나 설정 파일 구분에 대해서 더 자세히 알고 싶다면 아래의 링크를 참고하세요.

- [webpack-merge 깃헙 리포지토리](https://github.com/survivejs/webpack-merge)
- [배포를 위한 웹팩 설정 가이드](https://webpack.js.org/guides/production/)
