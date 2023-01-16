---
title: 웹팩이란?
---

## 웹팩이란?

웹팩이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 [모듈 번들러(Module Bundler)]()입니다. 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미합니다. 그럼 [모듈](#모듈이란)과 [모듈 번들링](#모듈-번들링이란)에 대해서 조금 더 살펴보겠습니다.

## 모듈이란?

모듈이란 프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위를 의미합니다. 자바스크립트로 치면 아래와 같은 코드가 모듈입니다.

```js
// math.js
function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

const pi = 3.14;

export { sum, substract, pi }
```

이 `math.js` 파일은 아래와 같이 3가지 기능을 갖고 있는 모듈입니다.

1. 두 숫자의 합을 구하는 `sum()` 함수
2. 두 숫자의 차를 구하는 `substract()` 함수
3. 원주율 값을 갖는 `pi` 상수

이처럼 성격이 비슷한 기능들을 하나의 의미 있는 파일로 관리하면 모듈이 됩니다.

:::tip
위의 `export` 코드는 ES6의 Modules 문법을 사용하였습니다. 문법을 잘 모르시는 분들은 [여기](https://babeljs.io/docs/en/learn#modules)를 참고하세요.
:::

## 웹팩에서의 모듈

웹팩에서 지칭하는 모듈이라는 개념은 위와 같이 자바스크립트 모듈에만 국한되지 않고 웹 애플리케이션을 구성하는 모든 자원을 의미합니다. 웹 애플리케이션을 제작하려면 HTML, CSS, Javascript, Images, Font 등 많은 파일들이 필요하죠. 이 파일 하나하나가 모두 모듈입니다.

## 모듈 번들링이란?

아래 그림과 같이 웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축 해주는 동작을 모듈 번들링이라고 합니다.

![웹팩 번들링 구조도](../.vuepress/public/images/webpack-bundling.png)

:::tip
빌드, 번들링, 변환 이 세 단어 모두 같은 의미입니다.
:::

## 온라인 강의로 쉽게 배우기

글보다 영상으로 쉽고 재밌게 배워보고 싶다면 아래 온라인 강의를 수강해 보세요 :)

[![webpack-online-course](../.vuepress/public/images/webpack-course.png)](https://inf.run/3Kxv)