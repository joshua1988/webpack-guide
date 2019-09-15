---
title: NPM Module Install
---

## NPM 설치 명령어

NPM에서 가장 많이 사용되는 명령어인 `npm install`에 대해 알아보겠습니다.

## NPM 지역 설치

NPM 초기화 명령어로 `package.json` 파일을 생성하고 나면 해당 프로젝트에서 사용할 자바스크립트 라이브러리를 설치하게 됩니다. 이 때 명령어는 아래와 같습니다.

```bash
npm install jquery --dev
```

그리고 지역 설치 명령어의 경우 명령어 옵션으로 `--dev`를 붙이지 않아도 동일한 효과가 납니다. 또한, `install` 대신 `i`를 사용해도 됩니다.

```bash
# 위 명령어와 동일한 효과
npm i jquery
```

## NPM 지역 설치 경로

위 명령어로 라이브러리를 설치하면 해당 프로젝트의 `node_modules` 라는 폴더가 생깁니다. 그리고 그 폴더 아래에 해당 라이브러리 파일들이 설치되어 있는 것을 확인할 수 있습니다.

## NPM 전역 설치

NPM 전역 설치는 위와 같이 프로젝트에서 사용할 라이브러리를 불러올 때 사용하는 것이 아니라 시스템 레벨에서 사용할 자바스크립트 라이브러리를 설치할 때 사용합니다.

```bash
npm install gulp --save-dev
```

라이브러리가 설치되고 나면 이제 명령어 실행 창에 해당 라이브러리 이름을 입력했을 때 명령어를 인식합니다.

```bash
gulp
```

:::tip
전역 설치 명령어 옵션 `--save-dev` 대신 `-D`를 사용해도 됩니다.
:::

## NPM 전역 설치 경로

이렇게 설치된 자바스크립트 라이브러리는 어느 위치에서 해당 명령어를 실행했던지 간에 OS별로 아래와 같은 폴더 경로에 설치됩니다.

```bash
# window
%USERPROFILE%\AppData\Roaming\npm\node_modules

# mac
/usr/local/lib/node_modules
```
