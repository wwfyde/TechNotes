import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "技术笔记",
  description: "Kayn的个人技术笔记",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // search: {
    //   provider: 'local'
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'AI', link: '/AI' }
    ],
    outline: {
      level: [1,2],
      label: "目录",

    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
  },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        collapsed: true,
      },
      {
        text: 'AI',
        items: [
          { text: 'AI', link: '/AI' },
          { text: 'AI最佳实践', link: '/AI最佳实践' }
        ],
        collapsed: true,
      },
      {
        text: '系统设计',
        items: [
          { text: '系统设计', link: '/系统设计' },
          { text: 'AI最佳实践', link: '/AI最佳实践' }
        ],
        collapsed: true,
      },
      {
        text: 'Python',
        items: [
          { text: 'Python', link: '/Python程序设计语言' },
          { text: 'AI最佳实践', link: '/AI最佳实践' }
        ],
        collapsed: true,
      },
      {
        text: 'Infra',
        items: [
          { text: 'Python', link: '/Python程序设计语言' },
          { text: 'AI最佳实践', link: '/AI最佳实践' }
        ],
        collapsed: true,
      },
      {
        text: '计算机科学',
        items: [
          { text: 'Python', link: '/Python程序设计语言' },
          { text: 'AI最佳实践', link: '/AI最佳实践' }
        ],
        collapsed: true,
      }
    ],
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wwfyde/TechNotes' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
