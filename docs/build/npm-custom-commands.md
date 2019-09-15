---
title: NPM Custom Commands
---

## NPM 커스텀 명령어

NPM 커스텀 명령어란 사용자가 임의로 명령어의 이름과 동작을 정의해서 사용할 수 있는 기능을 의미합니다. 아래 코드를 봅시다.

```json
// package.json
{
  ...
  "scripts": {
    "hello": "echo hi"
  }
}
```

NPM 패키지 관리 파일인 `package.json`에 위와 같이 `scripts`라는 속성을 추가할 수 있습니다. 그리고 아래의 명령어를 실행하면 콘솔에 *hi* 가 출력됩니다.

```bash
npm run hello
```

이처럼 명령어 실행 창에 매번 긴 명령어를 입력할 필요 없이 커스텀 명령어를 이용해 원하는 동작을 실행할 수 있습니다.

:::tip
NPM 커스텀 명령어는 모두 `npm run 명령어 이름` 형식으로 실행할 수 있습니다.
:::

## NPM 커스텀 명령어 실제 사례

NPM 커스텀 명령어는 웹팩 같은 도구 뿐만 아니라 Node.js 등을 사용할 때도 유용합니다.

앞에서 배운 내용으로 실제 커스텀 명령어 사례를 몇 가지 살펴보겠습니다.

```json
"scripts": {
  "dev": "node server.js",
  "build": "webpack --mode=none",
}
```

위 코드는 서버를 실행하는 `dev` 명령어와 웹팩으로 빌드하는 `build` 명령어를 정의한 코드입니다. 사용자는 매번 `node server.js`와 `webpack --mode=none`를 칠 필요 없이 `npm run dev`와 `npm run build`를 입력하면 됩니다.

아래와 같이 실행하려는 명령어가 길수록 더 빛을 발휘합니다.

```json
"scripts": {
  "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
}
```

매번 긴 명령어를 실행하는 것보다 커스텀 명령어를 사용하는 것이 더 편하겠죠? :)

## NPM 커스텀 명령어 실전 활용

커스텀 명령어의 또 다른 장점은 해당 명령어에 실행 옵션 뿐만 아니라 다른 커스텀 명령어를 조합할 수 있다는 점입니다.

```json
"scripts": {
  "build": "webpack",
  "deploy": "npm run build -- --mode production"
}
```

위와 같은 `scripts` 속성을 정의하고 아래 명령어를 입력하면 어떻게 될까요?

```bash
npm run deploy
```

먼저 `build`에 정의한 `webpack` 명령어가 실행되면서 명령어 뒤쪽에 붙은 실행 옵션들이 수행됩니다. 이후 웹팩 챕터에서 더 자세히 살펴보겠지만 여기서는 `webpack`이라는 도구의 `mode`에 `production`이라는 값을 넘겨준 것입니다.