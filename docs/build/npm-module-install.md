---
title: NPM Module Install
---

## NPM 설치 명령어

NPM에서 가장 많이 사용되는 명령어인 `npm install`에 대해 알아보겠습니다.

## NPM 지역 설치

NPM 초기화 명령어로 `package.json` 파일을 생성하고 나면 해당 프로젝트에서 사용할 자바스크립트 라이브러리를 설치하게 됩니다. 이 때 명령어는 아래와 같습니다.

```bash
npm install jquery --save-prod
```

그리고 지역 설치 명령어의 경우 명령어 옵션으로 `--save-prod`를 붙이지 않아도 동일한 효과가 납니다. 또한, `install` 대신 `i`를 사용해도 됩니다.

```bash
# 위 명령어와 동일한 효과
npm i jquery
```

## NPM 지역 설치 경로

위 명령어로 라이브러리를 설치하면 해당 프로젝트의 `node_modules` 라는 폴더가 생깁니다. 그리고 그 폴더 아래에 해당 라이브러리 파일들이 설치되어 있는 것을 확인할 수 있습니다.

## NPM 전역 설치

NPM 전역 설치는 위와 같이 프로젝트에서 사용할 라이브러리를 불러올 때 사용하는 것이 아니라 시스템 레벨에서 사용할 자바스크립트 라이브러리를 설치할 때 사용합니다.

```bash
npm install gulp --global
```

라이브러리가 설치되고 나면 이제 명령어 실행 창에 해당 라이브러리 이름을 입력했을 때 명령어를 인식합니다.

```bash
gulp
```

:::tip
전역 설치 명령어 옵션 `--global` 대신 `-g`를 사용해도 됩니다.
:::

## NPM 전역 설치 경로

이렇게 설치된 자바스크립트 라이브러리는 어느 위치에서 해당 명령어를 실행했던지 간에 OS별로 아래와 같은 폴더 경로에 설치됩니다.

```bash
# window
%USERPROFILE%\AppData\Roaming\npm\node_modules

# mac
/usr/local/lib/node_modules
```

## NPM 지역 설치 옵션 2가지

NPM 지역 설치에 자주 사용되는 2가지 옵션은 다음과 같습니다.

```bash
npm install jquery --save-prod
npm install jquery --save-dev
```

위 명령어는 아래와 같이 각각 축약할 수 있습니다.

```bash
npm i jquery
npm i jquery -D
```

여기서 설치 옵션에 아무것도 넣지 않은 `npm i jquery`는 `package.json`의 `dependencies`에 등록됩니다.

```json
// package.json
{
  "dependencies": {
    "jquery": "^3.4.1"
  }
}
```

설치 옵션으로 `-D`를 넣은 경우에는 해당 라이브러리가 `package.json`의 `devDependencies`에 등록됩니다.

```json
// package.json
{
  "devDependencies": {
    "jquery": "^3.4.1"
  }
}
```

`-D`를 넣을 때와 넣지 않을 때의 차이점은 무엇일까요? 아래에서 살펴보겠습니다.

## 개발용 라이브러리와 배포용 라이브러리 구분하기

NPM 지역 설치를 할 때는 해당 라이브러리가 배포용(dependencies)인지 개발용(devDependencies)인지 꼭 구분해주어야 합니다.
예를 들어, `jquery`와 같이 화면 로직과 직접적으로 관련된 라이브러리는 배포용으로 설치해야 합니다. 아래와 같이 말이죠.

```bash
# 배포용 라이브러리 설치
npm i jquery
```

```json
{
  "dependencies": {
    "jquery": "^3.4.1"
  }
}
```

이렇게 설치된 배포용 라이브러리는 `npm run build`로 빌드를 하면 최종 애플리케이션 코드 안에 포함됩니다.

그런데 만약 반대로 설치 옵션에 `-D`를 주었다면 해당 라이브러리는 빌드하고 배포할 때 애플리케이션 코드에서 빠지게 됩니다. 따라서, 최종 애플리케이션에 포함되어야 하는 라이브러리는 `-D`로 설치하면 안 됩니다. 개발할 때만 사용하고 배포할 때는 빠져도 좋은 라이브러리의 예시는 다음과 같습니다.

- `webpack` : 빌드 도구
- `eslint` : 코드 문법 검사 도구
- `imagemin` : 이미지 압축 도구