export default [
  { path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
    ]
  },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') }, // 路由懒加载
  { path: '/tools', name: 'tools', component: () => import('../views/Tools.vue') }, // 路由懒加载
  { path: '/blog', name: 'blog', component: () => import('../views/Blog.vue') }, // 路由懒加载
  { path: '/growUp', name: 'growUp', component: () => import('../views/GrowUp.vue') }, // 路由懒加载
  { path: '*', name: 'home', component: () => import('../views/Home.vue') } // 路由懒加载
]
