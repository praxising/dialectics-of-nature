import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "自然辩证法 2026",
  description: "当代科学视野下的唯物辩证法重塑",
  base: '/2026/', // 完美匹配你改名后的新仓库 2026
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [{ text: '首页', link: '/' }],
        sidebar: [
          {
            text: '第一部分：导言与历史',
            items: [
              { text: '第一章：导言 (原文与当代评注)', link: '/chapter-1' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [{ text: 'Home', link: '/en/' }],
        sidebar: [
          {
            text: 'Part 1: Intro',
            items: [
              { text: 'Chapter 1: Intro (with 21st-C Commentary)', link: '/en/chapter-1' }
            ]
          }
        ]
      }
    }
  }
})
