export default [
  { path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
    ]
  },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') }, // 路由懒加载
  { path: '/about', name: 'about', component: () => import('../views/About.vue') }, // 路由懒加载
  { path: '/earth', name: 'earth', component: () => import('../views/Earth.vue') }, // 路由懒加载
  { path: '/jquery', name: 'jquery', component: () => import('../views/JQuery.vue') } // 路由懒加载
]
