(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(t,s,a){t.exports=a.p+"assets/img/cors-error.e6e73b68.png"},210:function(t,s,a){t.exports=a.p+"assets/img/proxy.dce9d87c.png"},238:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"webpack-dev-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack Dev Server")]),t._v(" "),n("p",[t._v("웹팩 데브 서버는 웹 애플리케이션을 개발하는 과정에서 유용하게 쓰이는 도구입니다. 웹팩의 빌드 대상 파일이 변경 되었을 때 매번 웹팩 명령어를 실행하지 않아도 코드만 변경하고 저장하면 웹팩으로 빌드한 후 브라우저를 새로고침 해줍니다.")]),t._v(" "),n("p",[t._v("매번 명령어를 치는 시간과 브라우저를 새로 고침하는 시간 뿐만 아니라 웹팩 빌드 시간 또한 줄여주기 때문에 웹팩 기반의 웹 애플리케이션 개발에 필수로 사용됩니다.")]),t._v(" "),n("h2",{attrs:{id:"웹팩-데브-서버의-특징"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#웹팩-데브-서버의-특징","aria-hidden":"true"}},[t._v("#")]),t._v(" 웹팩 데브 서버의 특징")]),t._v(" "),n("p",[t._v("웹팩 데브 서버는 일반 웹팩 빌드와 다른점이 있습니다. 먼저 명령어를 보겠습니다.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack serve"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("웹팩 데브 서버를 실행하여 웹팩 빌드를 하는 경우에는 빌드한 결과물이 파일 탐색기나 프로젝트 폴더에서 보이지 않습니다. 좀 더 구체적으로 얘기하자면 웹팩 데브 서버로 빌드한 결과물은 메모리에 저장되고 파일로 생성하지는 않기 때문에 컴퓨터 내부적으로는 접근할 수 있지만 사람이 직접 눈으로 보고 파일을 조작할 순 없습니다.")]),t._v(" "),n("p",[t._v("따라서, 웹팩 데브 서버는 개발할 때만 사용하다가 개발이 완료되면 웹팩 명령어를 이용해 결과물을 파일로 생성해야 합니다.")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[t._v("컴퓨터 구조 관점에서 파일 입출력보다 메모리 입출력이 더 빠르고 컴퓨터 자원이 덜 소모됩니다 😄")])]),t._v(" "),n("p",[t._v("위 설명이 잘 이해가 안 간다면 "),n("router-link",{attrs:{to:"/tutorials/webpack-dev-server.html"}},[t._v("튜토리얼")]),t._v("을 직접 해보면서 확인해보세요.")],1),t._v(" "),n("h2",{attrs:{id:"프록시-proxy-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#프록시-proxy-설정","aria-hidden":"true"}},[t._v("#")]),t._v(" 프록시(Proxy) 설정")]),t._v(" "),n("p",[t._v("프록시 설정은 실무에서 가장 흔하게 사용하는 속성입니다. 아래와 같이 선언합니다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  devServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3000'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("위와 같이 설정하고 나면 로컬 웹팩 데브 서버에서 발생하는 API 요청에 변화가 생깁니다. 그림으로 살펴보겠습니다. 먼저 프록시를 쓰지 않았을 때의 기본적인 웹팩 데브 서버와 API 서버의 통신 구조입니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(209),alt:"웹팩 도식"}})]),t._v(" "),n("p",[t._v("여기서 "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS"),n("OutboundLink")],1),t._v("라는 용어가 나옵니다. 이 용어는 브라우저 보안과 관계가 있는데요. 쉽게 얘기하면 다른 도메인 간에는 자바스크립트로 자원을 요청할 수 없다는 의미입니다. 위 그림에서도 서버에 로그인 관련 API 요청을 했는데 CORS 오류가 나는 걸 볼 수 있습니다.")]),t._v(" "),n("p",[t._v("뷰, 리액트와 같은 프런트엔드 프레임워크를 쓰면 개발 편의상 로컬에 웹팩 데브 서버를 띄워놓고 개발하는 경우가 많습니다. 이 때, 이러한 문제를 해결하기 위해서 아래와 같이 프록시 속성을 설정하면 서버에서 해당 요청을 받아줍니다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  devServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'domain.com'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(210),alt:"웹팩 도식"}})]),t._v(" "),n("p",[t._v("CORS가 브라우저 보안과 관련있기 때문에 브라우저에서 벗어나 서버에서 서버로 요청합니다. 실제로 브라우저에서는 "),n("code",[t._v("localhost:8080/api/login")]),t._v(" 으로 요청했지만 중간에 프록시 서버의 활약으로 "),n("code",[t._v("domain.com")]),t._v(" 서버에서는 같은 도메인(domain.com)에서 온 요청으로 인식하여 CORS 에러가 나지 않습니다.")]),t._v(" "),n("div",{staticClass:"danger custom-block"},[n("p",[t._v("위 프록시 설정은 최대한 간단히 설명하기 위해 옵션을 하나 뺐습니다. 위와 같이 도메인 이름이 IP 주소가 아니라 가상 이름(domain.com)으로 되어 있는 경우 아래 옵션을 추가해 주셔야 합니다.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  devServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'domain.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        changeOrigin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);