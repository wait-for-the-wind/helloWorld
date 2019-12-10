export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
    ]
  },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') }
]
