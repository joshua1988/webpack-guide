---
title: Node.js & NPM
---

## Node.js와 NPM

웹팩을 사용하기 위해서는 Node.js와 NPM이 컴퓨터에서 설치되어 있어야 합니다. 그리고 이 도구들에 대해 어느 정도 배경 지식이 있으면 웹팩을 다루는데 도움이 됩니다.

## Node.js

Node.js는 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경을 의미합니다. Node.js가 나오기 전까지는 자바스크립트가 브라우저의 동작을 제어하는데 사용되었고 브라우저에서만 실행할 수 있었지만 이제는 Node.js로 자바스크립트를 브라우저 밖에서도 실행할 수 있게 되었습니다.

### Node.js 맛보기

Node.js를 이해할 수 있는 가장 간단한 방법은 아래와 같은 파일을 만들고 실행해보는 것입니다.

```js
// app.js
console.log('hi');
```

위와 같이 `app.js`라는 파일을 하나 만들고 내용을 추가한 뒤 명령어 실행 창에서 아래 명령어를 입력합니다.

```bash
node app.js
```

그러면 자바스크립트 파일이 실행되면서 명령어 입력 창에 `hi`라는 텍스트가 출력됩니다.

## NPM

NPM(Node Package Manager)는 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지 매니저입니다. NPM 공식 사이트에서도 안내가 되어 있지만 전 세계 자바스크립트 개발자들이 모두 자바스크립트 라이브러리를 공개된 저장소에 올려놓고 npm 명령어로 편하게 다운로드 받을 수 있습니다.

:::tip
NPM은 Node.js를 설치하면 같이 설치됩니다.
:::

### NPM 맛보기

NPM을 맛보기 위해 새 폴더를 하나 만들고 그 폴더에서 아래의 명령어를 실행합니다.

```bash
npm init -y
```

명령어가 실행되면 `package.json` 파일이 생성됩니다. 그리고 생성된 파일의 모습은 아래와 같습니다.

```json
{
  "name": "demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

위 구조는 가장 기본적인 구조이며 실제 애플리케이션을 만들 때 자주 사용되는 속성은 다음과 같습니다.

- scripts
- dependencies
- devDependencies
