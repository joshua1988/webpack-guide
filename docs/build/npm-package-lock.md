---
title: NPM package-lock
---

> [npm package-locks page](https://docs.npmjs.com/files/package-locks)을 번역하고, 이에 추가될 케이스를 게시한 글입니다.

## package-locks
* 개념상으로, `npm install`의 기준은 `package.json`이고 결과는 `node_modules` 폴더입니다.
* 이상적인 패키지 설치 과정은 특정 `package.json` 파일이 항상 동일한 `node_modules` 폴더를 생성하는 것입니다.
* 이러한 설치 과정이 몇몇의 경우에는 의도된 대로 동작하지만, 꽤 많은 경우에 의도한 대로 동작하지 않습니다. 그 이유는 다음과 같습니다.
	1. npm 버전이 다르거나 다른 종류의 패키지 매니저 사용 (다른 설치 알고리즘 사용)
	2. 이미 설치된 패키지의 새 버전이 출시된 경우. 즉, 이미 설치된 버전과 다른 버전을 사용하는 경우
	3. 특정 패키지에 의존하는 라이브러리 중 해당 라이브러리의 새 버전이 올라간 경우. 설치할때 `^1.2.3` 대신 `1.2.3`처럼 의존 라이브러리의 버전을 명시해 주더라도 업데이트됨

## 1) package-lock에 개념에 대해 알아보기
어떤 개발자가 A라는 package를 개발하고 있다고 가정합니다. 해당 package에서는 B라는 플러그인 디펜던시를 사용하고 있으며, B package에는 C package를 디펜던시로 가지고 있습니다. 각각의 package를 개발한 개발자는 다릅니다.

* package A
```json
{
  "name": "A",
  "version": "0.1.0",
  "dependencies": {
    "B": "<0.1.0"
  }
}
```
* package B
```json
{
  "name": "B",
  "version": "0.0.1",
  "dependencies": {
    "C": "<0.1.0"
  }
}
```
* package C
```json
{
  "name": "C",
  "version": "0.0.1"
}
```

위 세개의 모듈이 레지스트리에서 A,B,C의 유일한 버전인 경우, 보통의 npm install A가 설치되며, node_modules의 output 트리는 다음과 같이 출력됩니다.
```bash
A@0.1.0
`-- B@0.0.1
    `-- C@0.0.1
```

그러나, package B의 버전이 0.0.2 버전으로 publish 되면, npm install A는 다음과 같이 설치가 되며, node_modules의 트리가 생성됩니다.
```bash
A@0.1.0
`-- B@0.0.2
    `-- C@0.0.1
```

새 버전이 B의 종속성을 수정하지 않는다고 가정합니다. 물론 B의 새 버전에는 새로운 버전의 C와 여러가지 새로운 종속성이 포함될 수 있습니다. 그러한 변경이 문제가 발생하는 경우, A의 작성자는 B@0.0.1에 대한 의존성을 지정할 수 있습니다.
그러나, A와 B의 작성자가 동일한 사람이 아닌 경우 A의 작성자는 B가 전혀 변경되지 않은 경우 새로 게시된 버전의 C를 가져오지 않겠다고 공표할 수 없게됩니다.
이러한 잠재적 문제를 방지하기 위해서 npm은 `package-lock.json` 또는 `npm-shrinkwrap.json`을 사용하도록 업데이트 되었습니다. 이러한 파일을 패키지 잠금 또는 잠금 파일이라고 명칭합니다.

예를들어, npm install을 할 경우 npm은 package lock을 생성하고, 다음과 같은 package-lock.json 또는 npm-shrinkwrap.json이 작성됩니다.

```json
{
  "name": "A",
  "version": "0.1.0",
  ...metadata fields...
  "dependencies": {
    "B": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/B/-/B-0.0.1.tgz",
      "integrity": "sha512-DeAdb33F+"
      "dependencies": {
        "C": {
          "version": "git://github.com/org/C.git#5c380ae319fc4efe9e7f2d9c78b0faa588fd99b4"
        }
      }
    }
  }
}
```

해당 파일은 정확하게 재현할 수 있는 node_modules 트리를 설명합니다. 일단 존재하게 되면 이후의 모든 설치는 package.json의 종속성을 다시 계산하지 않고 파일에서 작업을 시작합니다.

패키지 잠금이 있으면, 다음과 같은 설치 동작이 변경됩니다.
1. 패키지 잠금에 의해 설명된 모듈 트리가 재생산됩니다. resolved에서 사용 가능한 경우 참조된 특정 파일을 사용하여 파일에 설명된 구조를 재현합니다. 그렇지 않은 경우 version을 사용하여 정상적인 패키지 버전으로 회귀하게 됩니다.
2. 트리가 이동하고 누락된 종속성이 일반적인 방식으로 설치됩니다.

`preshrinkwrap` ,`shrinkwrap`,`postshrinkwrap`이 package.json의 scripts 프로퍼티에 존재하는 경우, 순서대로 실행됩니다.
preshrinkwrap 및 shinktwrap은 shrinkwrap 전에 실행되고, postshrinkwrap은 나중에 실행됨. 이 스크립트는 package-lock.json 및 npm-shrinkwrap.json에서 실행됩니다.
```json
"scripts": {
  "postshrinkwrap": "json -I -e \"this.myMetadata = $MY_APP_METADATA\""
}
```

## 2) 잠긴 패키지 사용하기
잠긴 패키지를 사용하는 것은 잠기지 않은 패키지 사용법과 다르지는 않습니다.
node_modules 및 / 또는 package.json의 종속성을 업데이트 하는 명령은 자동으로 기존 잠금 파일을 동기화하게 됩니다.. 해당 사항은 npm install, npm rm, npm update등이 포함됩니다.

해당 업데이트가 발생하지 않도록 하려면 --no-save옵션을 사용하여 모두 저장하지 못하도록 하거나, --no-shrinkwrap, -no-pacakge-lock(추가됨) 옵션을 사용하여 package.json을 업데이트 할 수 있습니다.

## 3) package-lock 관련 case study
* 배포시에는 package에 관련된 종속성을 고정시키기 위해 package-lock.json을 사용해야할 때가 있습니다.
* 따라서, 운영에 있는 개발자는 package lock을 건 후, package-lock.json을 git에 업데이트 하게 됩니다.
* 개발자들이 일일이 npm install을 한 후 실행하는 것이 어려우므로, npm install 및 빌드 command를 package.json의 scripts에 포함시키는 경우가 있습니다.
* 하지만, 해당 프로젝트를 개발하는 개발자들은 개발자들 각자의 pc에서 npm install을 설치시에, package-lock.json이 자동으로 생성됩니다.
* 자동으로 생성되는 package-lock.json으로 인해 git에 업데이트 항목으로 계속해서 노출됩니다.
* 이러한 상황에서 개발자들은 두가지 옵션을 사용하고 있었습니다.
	1. npm config package-lock false를 통해 package-lock을 실행하지 못하도록 하거나, npmrc에 해당 property를 추가합니다.
	2. git에 push를 할 때마다 package-lock.json을 삭제합니다.
* 해당 사항을 수정하기 위해 개발모드인 경우 scripts 또는 command 실행시에 npm install에 관련되어 —no-package-lock command를 같이 추가합니다.

----
# Reference
* [npm package-locks page](https://docs.npmjs.com/files/package-locks)