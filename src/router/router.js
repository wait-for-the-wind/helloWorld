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
  // 后台
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue'),
    children: [
      { path: 'tool', name: 'tool', component: () => import('../views/AdminPages/toolAdmin.vue') },
      { path: 'blog', name: 'blog', component: () => import('../views/AdminPages/blogAdmin.vue') }
    ]
  }, // 路由懒加载
  { path: '*', name: 'home', component: () => import('../views/Home.vue') } // 路由懒加载
]
