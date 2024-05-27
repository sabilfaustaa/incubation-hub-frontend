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

const authRoutes = [
  {
    path: '/sign-in',
    name: 'auth.sign-in',
    meta: {
      title: 'Incubation Hub - Sign In'
    },
    component: () => import('@/views/auth/SignIn.vue')
  },
  {
    path: '/forgot-password',
    name: 'auth.forgot-password',
    meta: {
      title: 'Incubation Hub - Forgot Password'
    },
    component: () => import('@/views/auth/ForgotPassword.vue')
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
  {
    path: '/admin',
    name: 'admin',
    meta: { authRequired: false },
    children: [
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        meta: {
          title: 'Incubation Hub - Dashboard'
        },
        component: () => import('@/views/admin/Dashboard.vue')
      },
      {
        path: 'profil',
        name: 'admin.profil',
        meta: {
          title: 'Incubation Hub - Profil'
        },
        component: () => import('@/views/admin/Profil.vue')
      },
      {
        path: 'pengajuan-inkubasi',
        name: 'admin.pengajuan-inkubasi',
        meta: {
          title: 'Incubation Hub - Pengajuan Inkubasi'
        },
        component: () => import('@/views/admin/PengajuanInkubasi.vue')
      },
      {
        path: 'detail-pengajuan-inkubasi',
        name: 'admin.detail-pengajuan-inkubasi',
        meta: {
          title: 'Incubation Hub - Pengajuan Inkubasi'
        },
        component: () => import('@/views/admin/DetailPengajuanInkubasi.vue')
      },
      {
        path: 'form-pengajuan-inkubasi',
        name: 'admin.form-pengajuan-inkubasi',
        meta: {
          title: 'Incubation Hub - Pengajuan Inkubasi'
        },
        component: () => import('@/views/admin/FormPengajuanInkubasi.vue')
      },
      {
        path: 'history',
        name: 'admin.history',
        meta: {
          title: 'Incubation Hub - History Pengajuan'
        },
        component: () => import('@/views/admin/History.vue')
      },
      {
        path: 'notifikasi',
        name: 'admin.notifikasi',
        meta: {
          title: 'Incubation Hub - Notifikasi'
        },
        component: () => import('@/views/admin/Notifikasi.vue')
      }
    ]
  }
]

export const allRoutes = [...errorPageRoutes, ...landingRoute, ...authRoutes, ...adminRoutes]
