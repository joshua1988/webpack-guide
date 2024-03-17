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
    "revision": "329f42389c566b83d347d6c8f6dda24f"
  },
  {
    "url": "advanced/mode-config.html",
    "revision": "87782633e3136e9750319e2ce362e56e"
  },
  {
    "url": "advanced/tree-shaking.html",
    "revision": "504ecfaafe774b9b7c65067ce1e7af96"
  },
  {
    "url": "advanced/webpack-merge.html",
    "revision": "87b928394fbe5d4de42d8b50a6819fbf"
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
    "url": "assets/js/10.4ce9cddf.js",
    "revision": "4fcbab5d2ab536eeca9cb6ee16b39e0c"
  },
  {
    "url": "assets/js/11.af18816b.js",
    "revision": "ceab8dca27351ac609e6259f29096a09"
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
    "url": "assets/js/14.bc32f479.js",
    "revision": "27ba9601cafae9212df15ed4ef3cd921"
  },
  {
    "url": "assets/js/15.ca752f66.js",
    "revision": "4681127e476630a064e56e369539a2d0"
  },
  {
    "url": "assets/js/16.3f8fd479.js",
    "revision": "26b53f9176a238e9490e2ff038d5b662"
  },
  {
    "url": "assets/js/17.47460fed.js",
    "revision": "8b7c672c8a805feb962e33adea1f63d8"
  },
  {
    "url": "assets/js/18.4d55ea07.js",
    "revision": "3741c2384cd30b32bee34f6fc1798655"
  },
  {
    "url": "assets/js/19.e8f2066b.js",
    "revision": "1ce9605754c01be719da2a033eb18ab0"
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
    "url": "assets/js/23.ce964f2f.js",
    "revision": "95642258a0c7fda9f66aa140922da3cb"
  },
  {
    "url": "assets/js/24.15595eec.js",
    "revision": "763c7165dda0e7517b0b890521d0fd97"
  },
  {
    "url": "assets/js/25.19037c63.js",
    "revision": "d7629bb12506aba17360e73e4ae3827e"
  },
  {
    "url": "assets/js/26.b6c82cf5.js",
    "revision": "18fc664b4b680e45771940602986fe47"
  },
  {
    "url": "assets/js/27.3dab4144.js",
    "revision": "9be3e670d23f7e31409a5488cde76d28"
  },
  {
    "url": "assets/js/28.5e8a8823.js",
    "revision": "fcbef20523c696e55c6ec4558be9c37b"
  },
  {
    "url": "assets/js/29.80d0e8a0.js",
    "revision": "3fc8f139ac291acf7ec1e1b3602eb3c1"
  },
  {
    "url": "assets/js/3.ffdfab34.js",
    "revision": "1bf7241295682e6ba71499c1189d7ec9"
  },
  {
    "url": "assets/js/30.b2c643c7.js",
    "revision": "c7d6506f7f419dd270fad51ef546a815"
  },
  {
    "url": "assets/js/31.04c47330.js",
    "revision": "de6ec627845fd094a59b963801db94f8"
  },
  {
    "url": "assets/js/32.d38c875e.js",
    "revision": "b76cc77e66146fb0791ef61a915ee9e1"
  },
  {
    "url": "assets/js/33.af7e8512.js",
    "revision": "ade18ac5c800dadcca13fa62416c0f65"
  },
  {
    "url": "assets/js/34.0f692296.js",
    "revision": "523369db894049d8a9871582454273a7"
  },
  {
    "url": "assets/js/35.7f80cd77.js",
    "revision": "c825cee8e691cdaf06bee7fb1665b710"
  },
  {
    "url": "assets/js/36.ecc1e303.js",
    "revision": "9b86c16f6d7232d8bcff1939003f2e66"
  },
  {
    "url": "assets/js/37.bfce290e.js",
    "revision": "42e2772311afde072cdc193e8119edc2"
  },
  {
    "url": "assets/js/38.0fb233ea.js",
    "revision": "75aece16c4b2f4b3a29f0a575069e7a6"
  },
  {
    "url": "assets/js/39.9bdb483c.js",
    "revision": "77bdf95c09ab00cf5d171af7bf013491"
  },
  {
    "url": "assets/js/4.1c084300.js",
    "revision": "68f5f653a0f6f566484251d60b6ed4fd"
  },
  {
    "url": "assets/js/40.bff518f1.js",
    "revision": "6decfd3ced9e336b3662e7ebcd17083d"
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
    "url": "assets/js/7.c5eac5bd.js",
    "revision": "2309097027d73a973635ee04adf175ee"
  },
  {
    "url": "assets/js/8.1012060a.js",
    "revision": "7ef75b9c0912132d5806ea3349884c44"
  },
  {
    "url": "assets/js/9.04c43f36.js",
    "revision": "0f5ad2f9ce08ec4dbab6eb35d0410e44"
  },
  {
    "url": "assets/js/app.a64b6a99.js",
    "revision": "02cddfdf1c3ba51ff12517baf580229e"
  },
  {
    "url": "backup/flow.html",
    "revision": "dc68d21e0b16eadbb2ab3af579cd44ae"
  },
  {
    "url": "build/node-npm.html",
    "revision": "825b45741cc4497e66432566d6b1f92b"
  },
  {
    "url": "build/npm-custom-commands.html",
    "revision": "012e34b02d69403f7c4dd2e475289a06"
  },
  {
    "url": "build/npm-module-install.html",
    "revision": "1dc3874f82316218c271ce39bd7d9b55"
  },
  {
    "url": "build/npm-package-lock.html",
    "revision": "77e9d5cd91e4a0346537af084266d39b"
  },
  {
    "url": "concepts/entry.html",
    "revision": "06efd50d3cf07f8e71e8577aa089e104"
  },
  {
    "url": "concepts/loader.html",
    "revision": "9a7b703e7494ea5b4e31bae10521df76"
  },
  {
    "url": "concepts/output.html",
    "revision": "9c6ca44b34ec754e77c1c6bae3477f6c"
  },
  {
    "url": "concepts/overview.html",
    "revision": "8e43969de45cb94da5cb264275bad24f"
  },
  {
    "url": "concepts/plugin.html",
    "revision": "1ef955c05e21c91514872948d0b59918"
  },
  {
    "url": "concepts/wrapup.html",
    "revision": "69a758e4b484eb4a7a1857984d8d4736"
  },
  {
    "url": "contribution.html",
    "revision": "095df2932110c53c5d56ebcde37ca7b4"
  },
  {
    "url": "devtools/hot-module-replacement.html",
    "revision": "b025a6bf8bc1e03fec62748bb34bcc73"
  },
  {
    "url": "devtools/source-map.html",
    "revision": "61ae99bd929c75593e08eab8893f3fb2"
  },
  {
    "url": "devtools/webpack-dev-server.html",
    "revision": "c042b544916391ec8527708c18a3006f"
  },
  {
    "url": "faq.html",
    "revision": "52297f819e96c4e57eb978d085a7e730"
  },
  {
    "url": "from-scratch.html",
    "revision": "ceb99b386f2982e603db994223bc1be7"
  },
  {
    "url": "getting-started.html",
    "revision": "c4173a7d47696173f460cb8a22c6ec11"
  },
  {
    "url": "guide.html",
    "revision": "fba8188404565199d574b3ebc4c063b4"
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
    "revision": "4a5ff50f8c992fa7d3a1dee46c6a61c7"
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
    "revision": "6aa1a0f2d08b05552a29f6dec916c44c"
  },
  {
    "url": "motivation/problem-to-solve.html",
    "revision": "8aad76b749685f2ca3bbc75d28fa2955"
  },
  {
    "url": "motivation/why-webpack.html",
    "revision": "8c0336458597f8bdb078524b704e603e"
  },
  {
    "url": "roadmap.html",
    "revision": "6f22d7175ecb3b0d2a58e7adefa25018"
  },
  {
    "url": "tutorials/code-splitting.html",
    "revision": "9e967d7b9b27e3f2cc1c381fe504bf2c"
  },
  {
    "url": "tutorials/plugins.html",
    "revision": "74478220433e4116532695a7e2d99802"
  },
  {
    "url": "tutorials/webpack-dev-server.html",
    "revision": "0aa58afbe31ff3c661bfcc3b57676414"
  },
  {
    "url": "webpack/module-bundler.html",
    "revision": "2d0c1227fdffd8850b8c76458b1201ba"
  },
  {
    "url": "webpack/modules.html",
    "revision": "fe0ef2f4bde8eb28d7d2c6d9cbb39c02"
  },
  {
    "url": "webpack/web-task-manager.html",
    "revision": "2ee000d9cd59d158db6c0bdf58564f92"
  },
  {
    "url": "webpack/what-is-webpack.html",
    "revision": "e523b525e20c748984509e38634ae71a"
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
