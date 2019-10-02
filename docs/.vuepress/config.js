module.exports = {
  title: '웹팩 핸드북',
  description: '웹팩을 가장 쉽고 빠르게 배우는 방법',
  base: '/webpack-guide/',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#8dd6f9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/icons/152.png' }],
    ['link', { rel: 'mask-icon', href: '/images/icons/logo.svg', color: '#8dd6f9' }],
    ['meta', { name: 'msapplication-TileImage', content: '/images/icons/144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#8dd6f9' }],
  ],
  themeConfig: {
    sidebar: [
      '/guide',
      {
        title: 'Webpack',
        collapsable: false,
        children: ['/webpack/what-is-webpack'],
      },
      {
        title: 'Motivation',
        collapsable: false,
        children: ['/motivation/why-webpack', '/motivation/problem-to-solve'],
      },
      {
        title: 'Node.js & NPM',
        collapsable: false,
        children: [
          '/build/node-npm',
          '/build/npm-module-install',
          '/build/npm-custom-commands',
        ],
      },
      {
        title: 'Getting Started',
        collapsable: false,
        children: ['/getting-started'],
      },
      {
        title: 'Concepts',
        collapsable: false,
        children: [
          '/concepts/overview',
          '/concepts/entry',
          '/concepts/output',
          '/concepts/loader',
          '/concepts/plugin',
          '/concepts/wrapup',
        ],
      },
      {
        title: 'Tutorials',
        collapsable: false,
        children: [
          '/tutorials/code-splitting',
          '/tutorials/plugins',
          '/tutorials/webpack-dev-server',
        ],
      },
      // TODO: Sean Larkin 방식의 제작 방법을 어디다가 넣을지 고민해보기
      {
        title: 'Building from scratch',
        collapsable: false,
        children: ['/from-scratch'],
      },
      {
        title: 'Developer Tools',
        collapsable: false,
        children: [
          '/devtools/webpack-dev-server',
          '/devtools/hot-module-replacement',
          '/devtools/source-map',
        ],
      },
      {
        title: 'Advanced',
        collapsable: false,
        children: [
          '/advanced/mode-config',
          '/advanced/tree-shaking',
          '/advanced/webpack-merge',
        ],
      },
      {
        title: 'FAQ',
        collapsable: false,
        children: [
          '/faq',
        ],
      }
    ],
    nav: [
      {
        text: 'Guide',
        link: '/guide',
      },
      {
        text: 'Online Courses',
        link:
          'https://www.inflearn.com/instructors/54224/courses',
      },
      {
        text: 'Offline Courses',
        link:
          'https://www.fastcampus.co.kr/dev_camp_vue/',
      },
      {
        text: 'More Articles',
        link: 'https://joshua1988.github.io/',
      },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': './images',
      },
    },
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요 😄',
        buttonText: '새로고침',
      },
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-148087262-2'
    }
  },
};
