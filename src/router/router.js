export default [
  {
    path: '/',
    name: '网站首页',
    component: () => import('../views/Home.vue'),
    children: [
    ]
  },
  // 主页
  { path: '/home', name: '网站首页', component: () => import('../views/Home.vue') }, // 路由懒加载
  // 工具
  {
    path: '/tools',
    name: '工具',
    component: () => import('../views/Tools.vue'),
    children: [
      { path: 'goodWeb', name: '好网站', component: () => import('../views/ToolsPage/GoodWeb.vue') },
      { path: 'goodTool', name: '好工具', component: () => import('../views/ToolsPage/goodTool.vue') },
      { path: 'html', name: 'html', component: () => import('../views/ToolsPage/html.vue') },
      { path: 'css', name: 'css', component: () => import('../views/ToolsPage/css.vue') },
      { path: 'js', name: 'js', component: () => import('../views/ToolsPage/js.vue') },
      { path: 'vue', name: 'vue', component: () => import('../views/ToolsPage/vue.vue') },
      { path: 'backend', name: 'backend', component: () => import('../views/ToolsPage/backend.vue') },
      { path: 'blogInfo', name: '博客详情', component: () => import('../views/ToolsPage/blog_info.vue') },
      { path: 'data', name: 'data', component: () => import('../views/ToolsPage/data.vue') }
    ]
  }, // 路由懒加载
  // 博客
  { path: '/blog', name: '鸡汤博文', component: () => import('../views/Blog.vue') }, // 路由懒加载
  // 成长
  {
    path: '/growUp',
    name: '岁月长河',
    component: () => import('../views/GrowUp.vue'),
    children: [
      { path: 'novelCoronavirus', name: '中国疫情图', component: () => import('../views/HotNews/novelCoronavirus.vue') },
      { path: 'timeOver', name: '白驹过隙', component: () => import('../views/HotNews/timeOver.vue') }
      // { path: 'goodWeb', name: 'goodWeb', component: () => import('../views/ToolsPage/GoodWeb.vue') }
    ]
  }, // 路由懒加载
  // 后台
  {
    path: '/admin',
    name: '后台',
    component: () => import('../views/admin.vue'),
    children: [
      { path: 'tool', name: '工具后台', component: () => import('../views/AdminPages/toolAdmin.vue') },
      { path: 'blog', name: '博文后台', component: () => import('../views/AdminPages/blogAdmin.vue') },
      { path: 'growUp', name: 'markdown', component: () => import('../views/markdown/index.vue') }
    ]
  }, // 路由懒加载
  { path: '*', name: '网站首页', component: () => import('../views/Home.vue') } // 路由懒加载
]
