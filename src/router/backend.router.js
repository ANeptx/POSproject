export default [
  {
    path: '/',
    name: 'dashboard-analytics',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Home',
      breadcrumb: [
        {
          text: 'Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/void',
    name: 'void-report',
    component: () => import('@/views/Void.vue'),
    meta: {
      pageTitle: 'Void Report',
      breadcrumb: [
        {
          text: 'Void Report',
          active: true,
        },
      ],
    },
  },

  {
    path: '/option',
    name: 'option',
    component: () => import('@/views/Option.vue'),
    meta: {
      pageTitle: 'Option',
      breadcrumb: [
        {
          text: 'Option',
          active: true,
        },
      ],
    },
  },
  {
    path: '/transaction',
    name: 'transaction',
    component: () => import('@/views/Transaction.vue'),
    meta: {
      pageTitle: 'Transaction',
      breadcrumb: [
        {
          text: 'Transaction',
          active: true,
        },
      ],
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]
