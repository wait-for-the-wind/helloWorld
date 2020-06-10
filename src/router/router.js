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
  { path: '/tools', name: 'tools', component: () => import('../views/Tools.vue') }, // 路由懒加载
  { path: '/tools/goodWeb', name: 'goodWeb', component: () => import('../views/GoodWeb.vue') }, // 路由懒加载
  // 博客
  { path: '/blog', name: 'blog', component: () => import('../views/Blog.vue') }, // 路由懒加载
  // 成长
  { path: '/growUp', name: 'growUp', component: () => import('../views/GrowUp.vue') }, // 路由懒加载
  { path: '*', name: 'home', component: () => import('../views/Home.vue') } // 路由懒加载
]
