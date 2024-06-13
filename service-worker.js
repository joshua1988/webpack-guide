/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "69549c7d2f62042fc2757cffe3919d6c"
  },
  {
    "url": "advanced/mode-config.html",
    "revision": "ccf96754c6849bab82d7ca3cc8439447"
  },
  {
    "url": "advanced/tree-shaking.html",
    "revision": "1324f954eb088bf2af37b54aa53ba3f2"
  },
  {
    "url": "advanced/webpack-merge.html",
    "revision": "6995004c0d069cafb0219ea6a625b4d2"
  },
  {
    "url": "assets/css/0.styles.df9f423e.css",
    "revision": "61a107a1abc236510cf5809c439129e1"
  },
  {
    "url": "assets/img/cors-error.e6e73b68.png",
    "revision": "e6e73b68846dc931253946c837f0fadb"
  },
  {
    "url": "assets/img/css-loading-error.a03a18eb.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "assets/img/diagram.519da03f.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "assets/img/proxy.dce9d87c.png",
    "revision": "dce9d87ccc0ef3ea6d8458f85f57ec91"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ts-book-cover.a872d304.png",
    "revision": "a872d3043642f92af03fa88149ff1a80"
  },
  {
    "url": "assets/img/wds.8baa2312.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "assets/img/webpack-bundling.e79747a1.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "assets/img/webpack-course.a31e825a.png",
    "revision": "a31e825a931d85e19e435e519baf74c2"
  },
  {
    "url": "assets/img/webpack-entry.90e26197.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "assets/js/10.dd6751a4.js",
    "revision": "2b3afcb100fb85949620e6afebec90f2"
  },
  {
    "url": "assets/js/11.2e7c160d.js",
    "revision": "9e52cc72590a7b0114804d34d8df3f65"
  },
  {
    "url": "assets/js/12.0e325e21.js",
    "revision": "f3eeb8f6c16ed5f057b4a0facccc5f20"
  },
  {
    "url": "assets/js/13.bc67150f.js",
    "revision": "39ce5b4909c506a6195674c0b24a5c03"
  },
  {
    "url": "assets/js/14.b7997252.js",
    "revision": "aa16b9bf559396488ccd7455016a41e5"
  },
  {
    "url": "assets/js/15.db34844a.js",
    "revision": "16d4f4c7e881f02479f8e43f33ea2e37"
  },
  {
    "url": "assets/js/16.da162a9b.js",
    "revision": "a992c9a9e799992d5810917ac33f063b"
  },
  {
    "url": "assets/js/17.ee770321.js",
    "revision": "9185c8a26ef830a575b71bfcc5f732cb"
  },
  {
    "url": "assets/js/18.d2e73313.js",
    "revision": "2c52a9222c2ca1cf89943b3fa59916e9"
  },
  {
    "url": "assets/js/19.5e4f2e4f.js",
    "revision": "54240b9412628092caddebc43eec0649"
  },
  {
    "url": "assets/js/2.5d89aa71.js",
    "revision": "2edaab3fdae12fc1a7f0acea1f655de3"
  },
  {
    "url": "assets/js/20.39180646.js",
    "revision": "2f62a99eb3124d3114db281892d59df8"
  },
  {
    "url": "assets/js/21.a3eb7466.js",
    "revision": "4d3479439b62549d94b7e14a80ebc586"
  },
  {
    "url": "assets/js/22.c4ae654b.js",
    "revision": "b20ae685d640992740e63e695c2d9f69"
  },
  {
    "url": "assets/js/23.25175cd5.js",
    "revision": "82d28c461e25acc92455facbb2dade4b"
  },
  {
    "url": "assets/js/24.cfd7578f.js",
    "revision": "98d19a4f004363ffb370b49bb17f8c9a"
  },
  {
    "url": "assets/js/25.00d2d27e.js",
    "revision": "20756be16dd2f001e03e053452871941"
  },
  {
    "url": "assets/js/26.98693df6.js",
    "revision": "8acb30c5f1d0da649d122e4c9e9930a3"
  },
  {
    "url": "assets/js/27.3dab4144.js",
    "revision": "9be3e670d23f7e31409a5488cde76d28"
  },
  {
    "url": "assets/js/28.29590574.js",
    "revision": "9a270b1cae6c090ba337f4e07dc6daa9"
  },
  {
    "url": "assets/js/29.02165e1b.js",
    "revision": "407ef3ecc11eef82ab265b3540fd90cc"
  },
  {
    "url": "assets/js/3.ffdfab34.js",
    "revision": "1bf7241295682e6ba71499c1189d7ec9"
  },
  {
    "url": "assets/js/30.f9791278.js",
    "revision": "8fc8fea589d60ea3c2a02fb8d7c40904"
  },
  {
    "url": "assets/js/31.8fa64eff.js",
    "revision": "424815fd1a1b641e54106995b25e93ea"
  },
  {
    "url": "assets/js/32.b055b306.js",
    "revision": "e2da931126edd8e0db229b02b03dd44b"
  },
  {
    "url": "assets/js/33.efe0b8d4.js",
    "revision": "635b7bf907b1dbe5aaa299daf1ea12f0"
  },
  {
    "url": "assets/js/34.0f692296.js",
    "revision": "523369db894049d8a9871582454273a7"
  },
  {
    "url": "assets/js/35.b5c99b1c.js",
    "revision": "97b39d9e55c7ee4f8f93989347adc45f"
  },
  {
    "url": "assets/js/36.fadb30bc.js",
    "revision": "5807564d9e06e52a91426c70b555a9a7"
  },
  {
    "url": "assets/js/37.3427a7f8.js",
    "revision": "80dc92e41d817aded7988b9aaa40f59a"
  },
  {
    "url": "assets/js/38.0fb233ea.js",
    "revision": "75aece16c4b2f4b3a29f0a575069e7a6"
  },
  {
    "url": "assets/js/39.5353c63a.js",
    "revision": "03de366601b2bdfacdd6e33c90e43445"
  },
  {
    "url": "assets/js/4.1c084300.js",
    "revision": "68f5f653a0f6f566484251d60b6ed4fd"
  },
  {
    "url": "assets/js/40.ee80bbb6.js",
    "revision": "a3f1c6470ac525e68b84471c1aae0c88"
  },
  {
    "url": "assets/js/41.95610ad1.js",
    "revision": "898b5c2ee66282d2dd70e727e98702ff"
  },
  {
    "url": "assets/js/5.1ca74930.js",
    "revision": "44c266033a21d90af856f10f291bad25"
  },
  {
    "url": "assets/js/6.18d6994b.js",
    "revision": "5a3bbb77dc63efa0cbd5d5d303a50357"
  },
  {
    "url": "assets/js/7.ec464827.js",
    "revision": "9b079aea7f322a5bb8eab7ee13fcbe78"
  },
  {
    "url": "assets/js/8.ce27477d.js",
    "revision": "cfd392a5fe76638f05d5ed3727afe300"
  },
  {
    "url": "assets/js/9.04fe735f.js",
    "revision": "05fb9fb3c5af735f941a75bfe6827a8d"
  },
  {
    "url": "assets/js/app.e601b2b3.js",
    "revision": "47f256c925bd7270282039a9536a2865"
  },
  {
    "url": "backup/flow.html",
    "revision": "0c09a57bb3f1b8ca3e0bf3bfc5a7b5a5"
  },
  {
    "url": "build/node-npm.html",
    "revision": "6d79e9b533f6473a2be36ecca85e1321"
  },
  {
    "url": "build/npm-custom-commands.html",
    "revision": "2a1403e4756c50914251771195b432d4"
  },
  {
    "url": "build/npm-module-install.html",
    "revision": "9eb7b99571d0420d7e7bf48fabcf2f4f"
  },
  {
    "url": "build/npm-package-lock.html",
    "revision": "8a41a53c178957b9190d03d12189118d"
  },
  {
    "url": "concepts/entry.html",
    "revision": "e7895a5344380f0d1cdae4939dd514ac"
  },
  {
    "url": "concepts/loader.html",
    "revision": "c4ccabd5485411e8f780284369717c27"
  },
  {
    "url": "concepts/output.html",
    "revision": "5a420d36ba1e983902108a539ca38f26"
  },
  {
    "url": "concepts/overview.html",
    "revision": "97aec09b9002f64ec94cceb986837677"
  },
  {
    "url": "concepts/plugin.html",
    "revision": "35b88cec3862e64827de0de589978919"
  },
  {
    "url": "concepts/wrapup.html",
    "revision": "18c457403b883bbd2ca543dbc7e246c7"
  },
  {
    "url": "contribution.html",
    "revision": "b35e366228cadb1479cd36de11aa9166"
  },
  {
    "url": "devtools/hot-module-replacement.html",
    "revision": "f199e52fcb9860ad5e19444aa59183ae"
  },
  {
    "url": "devtools/source-map.html",
    "revision": "fd8b37100c16f2a86c61da7d255e7646"
  },
  {
    "url": "devtools/webpack-dev-server.html",
    "revision": "63e83524d81958cbed7f26df03234c21"
  },
  {
    "url": "faq.html",
    "revision": "2bc905966abe55a422290370a04d9b8c"
  },
  {
    "url": "from-scratch.html",
    "revision": "574c73d0fa2e09629a488598e1c5c675"
  },
  {
    "url": "getting-started.html",
    "revision": "2d5b4b6585a036143bf5c459a64c5de4"
  },
  {
    "url": "guide.html",
    "revision": "345fc1ea8084112ad192c885928d5839"
  },
  {
    "url": "images/cors-error.png",
    "revision": "e6e73b68846dc931253946c837f0fadb"
  },
  {
    "url": "images/css-loading-error.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "images/diagram.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "images/favicon.png",
    "revision": "9144652d53e2cb1f58b31434be1754dc"
  },
  {
    "url": "images/icons/120.png",
    "revision": "21d61a59a8b81e2f2b7c1c4498931403"
  },
  {
    "url": "images/icons/128.png",
    "revision": "52282522bbeedc203932501bae719d3d"
  },
  {
    "url": "images/icons/144.png",
    "revision": "c8e2ba305773c351de6ceb6f541fcda8"
  },
  {
    "url": "images/icons/152.png",
    "revision": "7020b01c65552daefc6a040e98799c3b"
  },
  {
    "url": "images/icons/180.png",
    "revision": "f01084a321ad9222b05b58e70f3a9169"
  },
  {
    "url": "images/icons/192.png",
    "revision": "5b857fb78e5c61ba0a654b8c84114e97"
  },
  {
    "url": "images/icons/384.png",
    "revision": "b5f35dedd751624d3cd125f4131e883e"
  },
  {
    "url": "images/icons/512.png",
    "revision": "e8c8cd801fd9cd4348e0fdd70aedaa07"
  },
  {
    "url": "images/icons/72.png",
    "revision": "6d6096aeb8339449afd43567dec8bcdb"
  },
  {
    "url": "images/icons/96.png",
    "revision": "26887d961394795c8f14b086148c0e61"
  },
  {
    "url": "images/patron-button.png",
    "revision": "8b4321f782e84764e556af3dee32a131"
  },
  {
    "url": "images/proxy.png",
    "revision": "dce9d87ccc0ef3ea6d8458f85f57ec91"
  },
  {
    "url": "images/wds.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "images/webpack-bundling.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "images/webpack-course.png",
    "revision": "a31e825a931d85e19e435e519baf74c2"
  },
  {
    "url": "images/webpack-entry.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "index.html",
    "revision": "d5f85722c6693d4c16f417873488a873"
  },
  {
    "url": "logo.png",
    "revision": "81da10d7fe4e203f74c1fd5e2d316f5b"
  },
  {
    "url": "logo.svg",
    "revision": "96621d3c37d96ad3bf792fcc848d912f"
  },
  {
    "url": "motivation/fe-ecosystem.html",
    "revision": "0a6722868ff23f81e8208e832ac7a930"
  },
  {
    "url": "motivation/problem-to-solve.html",
    "revision": "458cc42962517afcc838be4c0dda6137"
  },
  {
    "url": "motivation/why-webpack.html",
    "revision": "35ea298e01ecb5ffcc1e299fdffc6c27"
  },
  {
    "url": "roadmap.html",
    "revision": "13297489ed720f180b5f59e223fc7f7a"
  },
  {
    "url": "tutorials/code-splitting.html",
    "revision": "5dc59b957a73f4f102a9b670e2042397"
  },
  {
    "url": "tutorials/plugins.html",
    "revision": "4b5ab79b4de03f508bcff94ed75d1df6"
  },
  {
    "url": "tutorials/webpack-dev-server.html",
    "revision": "182b2b4f75b86e68a0f05d897f9578ec"
  },
  {
    "url": "webpack/module-bundler.html",
    "revision": "4029f7e3597cc54bca467bf0bcf3640f"
  },
  {
    "url": "webpack/modules.html",
    "revision": "c892c7b4ace833fe43190f0e7debcdeb"
  },
  {
    "url": "webpack/web-task-manager.html",
    "revision": "f38456d40169ca524f2ffd620a0db1ec"
  },
  {
    "url": "webpack/what-is-webpack.html",
    "revision": "0f0005667ff73232417bd1335e15c4a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
