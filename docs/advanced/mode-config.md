---
title: Mode Config
---

## 웹팩 실행 모드 - mode

웹팩 버전 4부터 `mode`라는 개념이 추가되었습니다. 아래 코드를 보겠습니다.

```js {2}
module.exports = {
  mode: 'none',
  entry: '',
  // ...
}
```

웹팩 설정을 정의할 때 위와 같이 `mode`라는 속성을 정의하면 웹팩의 실행 모드가 설정됩니다. 웹팩의 실행 모드에는 다음 3가지가 있습니다.

- `none` : 모드 설정 안함
- `development` : 개발 모드
- `production` : 배포 모드

각 실행 모드에 따라 웹팩의 결과물 모습이 달라집니다. 개발 모드인 경우에는 개발자들이 좀 더 보기 편하게 웹팩 로그나 결과물이 보여지고, 배포 모드인 경우에는 성능 최적화를 위해 기본적인 파일 압축 등의 빌드 과정이 추가됩니다.

:::tip
모드의 기본 값을 설정하지 않으면 `production` 모드로 자동 설정됩니다.
:::

## 실행 모드에 따라 웹팩 설정 달리하기

웹팩으로 실제 웹 애플리케이션을 개발할 때는 보통 아래와 같이 2가지 케이스로 구분하여 작업해야 합니다.

- 개발할 때 사용할 웹팩 설정
- 개발이 끝나고 배포할 때 사용할 웹팩 설정

웹팩 설정 파일이 1개인 상태에서 실행 모드에 따라 특정 설정을 적용하는 방법은 다음과 같습니다.

```js
// webpack.config.js
module.exports = (env) => {
  let entryPath = env.mode === 'production'
    ? './public/index.js'
    : './src/index.js';

  return {
    entry: entryPath,
    output: {},
    // ...
  }
}
```

```json
// package.json
{
  "build": "webpack",
  "development": "npm run build -- --env.mode=development",
  "production": "npm run build -- --env.mode=production"
}
```

위 코드를 보면 먼저 웹팩 설정 파일의 방식은 객체에서 함수 형식으로 바뀌었습니다.

```js
// 기존
module.exports = {};
// 현재
module.exports = () => {};
```

그리고 함수에 넘겨준 `env` 인자는 환경 변수를 의미하며 웹팩을 실행할 때 실행 옵션으로 넘겨줄 수 있습니다.

```bash
webpack --env.a=10
```

만약 NPM 커스텀 명령어로 관리를 한다면 아래와 같이 할 수 있습니다.

```json
{
  "build": "webpack --env.a=10"
}
```

위와 같은 방식으로 실행 모드에 따라 웹팩의 설정을 각각 다르게 적용할 수 있습니다.
