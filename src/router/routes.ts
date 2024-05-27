const errorPageRoutes = [
  {
    path: '/error-404',
    name: 'pages.error-404',
    meta: {
      title: 'Incubation Hub - Error 404'
    },
    component: () => import('@/views/error-404/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'pages.error-404'
  }
]

const landingRoute = [
  {
    path: '',
    name: 'landing',
    meta: {
      title: 'Incubation Hub - Jakarta Smart City',
      authRequired: false
    },
    component: () => import('@/views/landing/index.vue')
  }
]

const landingsRoutes = [
  // {
  //   path: '',
  //   name: 'landings',
  //   meta: { authRequired: false },
  //   children: [
  //     {
  //       path: '/test',
  //       name: 'landings.test',
  //       meta: {
  //         title: 'Incubation Hub - Jakarta Smart City'
  //       },
  //       component: () => import('s//index.vue')
  //     }
  //   ]
  // }
]

const adminRoutes = [
  // {
  //   path: '',
  //   name: 'landings',
  //   meta: { authRequired: false },
  //   children: [
  //     {
  //       path: '/test',
  //       name: 'landings.test',
  //       meta: {
  //         title: 'Incubation Hub - Jakarta Smart City'
  //       },
  //       component: () => import('s//index.vue')
  //     }
  //   ]
  // }
]

export const allRoutes = [...errorPageRoutes, ...landingRoute, ...adminRoutes]
