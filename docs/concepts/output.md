---
title: Output
---

## Output

`output` 속성은 웹팩을 돌리고 난 결과물의 파일 경로를 의미합니다.

```js
// webpack.config.js
module.exports = {
  output: {
    filename: 'bundle.js'
  }
}
```

앞에서 배운 `entry` 속성과는 다르게 객체 형태로 옵션들을 추가해야 합니다.

## Output 속성 옵션 형태

최소한 `filename`은 지정해줘야 하며 일반적으로 아래와 같이 `path` 속성을 함께 정의합니다.

```js
// webpack.config.js
var path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
```

여기서 `filename` 속성은 웹팩으로 빌드한 파일의 이름을 의미하고, `path` 속성은 해당 파일의 경로를 의미합니다. 그리고 `path` 속성에서 사용된 `path.resolve()` 코드는 인자로 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js API입니다. 

이 API가 하는 역할을 좀 더 이해하기 쉽게 표현하면 아래와 같습니다.

```js
output: './dist/bundle.js'
```

:::tip
위 코드에서 사용한 `path` 라이브러리의 자세한 사용법은 [여기](https://nodejs.org/api/path.html)를 참고하세요.
:::

## Output 파일 이름 옵션

앞에서 살펴본 `filename` 속성에 여러 가지 옵션을 넣을 수 있습니다.

1. 결과 파일 이름에 `entry` 속성을 포함하는 옵션

```js
module.exports = {
  output: {
    filename: '[name].bundle.js'
  }
};
```

2. 결과 파일 이름에 웹팩 내부적으로 사용하는 모듈 ID를 포함하는 옵션

```js
module.exports = {
  output: {
    filename: '[id].bundle.js'
  }
};
```

3. 매 빌드시 마다 고유 해시 값을 붙이는 옵션

```js
module.exports = {
  output: {
    filename: '[name].[hash].bundle.js'
  }
};
```

4. 웹팩의 각 모듈 내용을 기준으로 생생된 해시 값을 붙이는 옵션

```js
module.exports = {
  output: {
    filename: '[chunkhash].bundle.js'
  }
};
```

이렇게 생성된 결과 파일의 이름에는 각각 엔트리 이름, 모듈 아이디, 해시 값 등이 포함됩니다.