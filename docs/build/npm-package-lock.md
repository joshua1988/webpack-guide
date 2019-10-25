---
title: NPM package-lock
---

> [npm package-locks page](https://docs.npmjs.com/files/package-locks)을 번역하고, 이에 추가될 케이스를 게시한 글입니다.

## package-locks
* 개념상으로, `npm install`의 기준은 `package.json`이고 결과는 `node_modules` 폴더입니다.
* 이상적인 패키지 설치 과정은 특정 `package.json` 파일이 항상 동일한 `node_modules` 폴더를 생성합니다.
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

위 세개의 모듈이 레지스트리에서 A,B,C의 유일한 버전인 경우, `npm install A`를 하게되면, `node_modules`의 트리는 다음과 같이 생성됩니다.
```bash
A@0.1.0
`-- B@0.0.1
    `-- C@0.0.1
```

그러나, package B의 버전이 0.0.2 버전으로 게시되면, `npm install A`는 다음과 같은 `node_modules` 트리를 생성합니다.
```bash
A@0.1.0
`-- B@0.0.2
    `-- C@0.0.1
```

새 버전이 B의 의존성을 수정하지 않는다고 가정합니다. 물론 `B` 의 새 버전에는 새로운 버전의 `C`와 여러가지 새로운 패키지의 의존성이 포함될 수 있습니다.
그러한 의존성 변경에 문제가 발생하는 경우, `A`의 작성자는 `B@0.0.1`에 대한 의존성을 지정할 수 있습니다. 그러나, A와 B의 작성자가 동일한 사람이 아닌 경우 A의 작성자는 B가 전혀 변경되지 않은 경우 새로 게시된 버전의 C를 가져오지 않겠다고 공표할 수 없게됩니다.
이와 같은 잠재적 문제를 방지하기 위해서 npm은 `package-lock.json` 또는 `npm-shrinkwrap.json`을 사용하도록 업데이트 되었습니다. 이러한 파일을 패키지 잠금 또는 잠금 파일이라고 명칭합니다.

예를들어, `npm install`을 할 경우 npm은 package lock을 생성하고, 다음과 같은 `package-lock.json` 또는 `npm-shrinkwrap.json`이 작성됩니다.

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

위 파일은 항상 같은 `node_modules` 트리를 생성합니다. 위와같이 `dependencies`를 명시하게 되면, 패키지를 설치할때마다 의존성을 일일이 계산하는 것이 아니라 명시된 버전을 바로 설치합니다.

`package-lock.json`파일은 설치 동작을 다음과 같이 변경합니다.
1. `package-lock.json` 파일에 명시된 대로 모듈 트리 (라이브러리 의존성 구조)가 생성됩니다. 이는 파일에 명시된 모듈이 존재하면 해당 파일을 사용하고, 존재하지 않는 경우 `version`에 맞는 파일을 사용합니다.
2. 누락된 의존성 라이브러리가 있으면 일반적인 방식으로 설치합니다.

`preshrinkwrap` ,`shrinkwrap`,`postshrinkwrap`이 `package.json` 파일의 `scripts` 속성에 있으면 순서대로 실행됩니다.
`preshrinkwrap` 및 `shinktwrap`은 `shrinkwrap` 전에 실행되고, `postshrinkwrap`은 나중에 실행됩니다.

그리고 이 스크립트는 `package-lock.json` 파일과 `npm-shrinkwrap.json` 파일을 대상으로 실행됩니다.

```json
"scripts": {
  "postshrinkwrap": "json -I -e \"this.myMetadata = $MY_APP_METADATA\""
}
```

## 2) 잠긴 패키지 사용하기
잠긴 패키지와 잠기지 않은 패키지는 다음 맥락에서 크게 차이가 없습니다.

"`npm install`, `npm rm`, `npm update` 등의 명령어로 `node_modules` 폴더와 `package.json` 파일의 의존성을 업데이트하면 자동으로 `package-lock.json` 파일을 업데이트 한다."

만약 업데이트를 막으려면 `--no-save` 옵션으로 모두 저장하지 않거나, `--no-shrinkwrap` 옵션으로 `package-lock.json` 파일과 `shrinkwrap.json` 파일을 건드리지 않고 `package.json` 파일만 업데이트 할 수 있습니다.

----

## package-lock 관련 case study

프로젝트 소스 형상 관리 차원에서는 `package-lock.json` 파일을 커밋하는 걸 권고합니다. 이렇게 하면 개발자, 배포, CI 모두 `npm install` 명령어를 실행했을때 항상 같은 의존성 구조를 가진 파일이 설치됩니다.
또한, git에 `package-lock.json` 파일의 의존성이 관리되므로 변경사항이 있는 경우 `diff`로 편하게 변경 내용을 확인할 수 있는 이점이 생깁니다.

다수의 개발자가 참여하는 프로젝트에서 package-lock.json 파일을 생성하지 말아야 할 때가 있습니다. 이러한 경우 두가지 방법으로 수정하는 방법이 존재했습니다.

* `npm config set package-lock false`를 통해 package-lock을 실행하지 못하도록 하거나, `.npmrc`에 `package-lock=false`를 추가합니다.
* git에 push를 할 때마다 package-lock.json을 삭제합니다.
1번, 2번의 경우 소스 배포 관리자는 package-lock.json을 갱신해서 git에 push하기 위해서는 옵션을 수동으로 재설정 해줘야 하는 번거로움이 있었습니다.

이러한 이슈를 수정하기 위해서 package.json 파일내 script 속성 또는 npm install 명령어에 no-package-lock 옵션을 추가하여 실행해줄 수 있도록 하여 이슈를 해결하였습니다.

----
# Reference
* [npm package-locks page](https://docs.npmjs.com/files/package-locks)