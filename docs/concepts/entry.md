---
title: Entry
---

## Entry

`entry` 속성은 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로입니다.

```js
// webpack.config.js
module.exports = {
  entry: './src/index.js'
}
```

위 코드는 웹팩을 실행했을 때 `src` 폴더 밑의 `index.js` 을 대상으로 웹팩이 빌드를 수행하는 코드입니다.

## Entry 파일에는 어떤 내용이 들어가야 하나?

`entry` 속성에 지정된 파일에는 웹 애플리케이션의 전반적인 구조와 내용이 담겨져 있어야 합니다. 웹팩이 해당 파일을 가지고 웹 애플리케이션에서 사용되는 모듈들의 연관 관계를 이해하고 분석하기 때문에 애플리케이션을 동작시킬 수 있는 내용들이 담겨져 있어야 합니다.

예를 들어, 블로그 서비스를 웹팩으로 빌드한다고 했을 때 코드의 모양은 아래와 같을 수 있습니다.

```js
// index.js
import LoginView from './LoginView.js';
import HomeView from './HomeView.js';
import PostView from './PostView.js';

function initApp() {
  LoginView.init();
  HomeView.init();
  PostView.init();
}

initApp();
```

위 코드는 해당 서비스가 [싱글 페이지 애플리케이션]()이라고 가정하고 작성한 코드입니다. 사용자의 **로그인 화면**, 로그인 후 진입하는 **메인 화면**, 그리고 **게시글을 작성하는 화면** 등 웹 서비스에 필요한 화면들이 모두 `index.js` 파일에서 불려져 사용되고 있기 때문에 웹팩을 실행하면 해당 파일들의 내용까지 해석하여 파일을 빌드해줄 것입니다.

![웹팩 번들링 구조도](../.vuepress/public/images/webpack-entry.png)

위와 같이 모듈 간의 의존 관계가 생기는 구조를 [디펜던시 그래프(Dependency Graph)](https://webpack.js.org/concepts/dependency-graph/)라고 합니다.

## Entry 유형

앞에서 살펴본 것처럼 엔트리 포인트는 1개가 될 수도 있지만 아래와 같이 여러 개가 될 수도 있습니다.

```js
entry: {
  login: './src/LoginView.js',
  main: './src/MainView.js'
}
```

위와 같이 엔트리 포인트를 분리하는 경우는 싱글 페이지 애플리케이션이 아닌 특정 페이지로 진입했을 때 서버에서 해당 정보를 내려주는 형태의 멀티 페이지 애플리케이션에 적합합니다.
