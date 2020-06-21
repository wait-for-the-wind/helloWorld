export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
    ]
  },
  // 主页
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') }, // 路由懒加载
  // 工具
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/Tools.vue'),
    children: [
      { path: 'goodWeb', name: 'goodWeb', component: () => import('../views/ToolsPage/GoodWeb.vue') },
      { path: 'goodTool', component: () => import('../views/ToolsPage/goodTool.vue') },
      { path: 'fronted', component: () => import('../views/ToolsPage/fronted.vue') },
      { path: 'backend', component: () => import('../views/ToolsPage/backend.vue') },
      { path: 'data', component: () => import('../views/ToolsPage/data.vue') }
    ]
  }, // 路由懒加载
  // 博客
  { path: '/blog', name: 'blog', component: () => import('../views/Blog.vue') }, // 路由懒加载
  // 成长
  {
    path: '/growUp',
    name: 'growUp',
    component: () => import('../views/GrowUp.vue'),
    children: [
      { path: 'novelCoronavirus', name: 'novelCoronavirus', component: () => import('../views/HotNews/novelCoronavirus.vue') },
      { path: 'timeOver', name: 'timeOver', component: () => import('../views/HotNews/timeOver.vue') }
      // { path: 'goodWeb', name: 'goodWeb', component: () => import('../views/ToolsPage/GoodWeb.vue') }
    ]
  }, // 路由懒加载
  { path: '*', name: 'home', component: () => import('../views/Home.vue') } // 路由懒加载
]
