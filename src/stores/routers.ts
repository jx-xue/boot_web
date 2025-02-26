import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useRoutersStore = defineStore('routers', () => {
  const routers = ref<MyRouter[]>([
    {
      path: '/',
      name: 'Home',
      description: '主页'
    },
    {
      path: '/net',
      name: 'Net',
      description: '网络相关'

    },
    {
      path: '/page',
      name: 'Page',
      description: '页面相关'
    },
  ])
  return { routers }
})
