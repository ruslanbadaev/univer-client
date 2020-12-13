import Vue from 'vue'
import VueRouter from 'vue-router'
import guard from './guard'
import Home from '@/views/common/Home'
import NotFound from '@/views/common/NotFound'
import Feed from '@/views/common/Feed'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import('@/views/common/Auth')
  },
  {
/*     path: '/edu/:route',
    name: 'edu', */

    path: '/sveden/:route',
    name: 'sveden',
    component: () => import('@/views/common/Edu')
  },
  {
    path: '/student',
    name: 'lk-student',
    component: () => import('@/views/person/student/Student'),
    redirect: { name: 'student-schedule' },
    children: [
      {
        path: 'schedule',
        name: 'student-schedule',
        component: () => import('@/views/person/student/Schedule'),
        alias: '/lk/schedule'
      },
      {
        path: 'progress',
        name: 'student-progress',
        component: () => import('@/views/person/student/Progress')
      }
    ],
    beforeEnter: guard
  },
  {
    path: '/lecturer',
    name: 'lk-lecturer',
    component: () => import('@/views/person/lecturer/Lecturer'),
    // redirect: { name: 'lecturer-schedule' },
    children: [
      {
        path: 'schedule',
        name: 'lecturer-schedule',
        component: () => import('@/views/person/student/Schedule')
      },
      {
        path: 'mrs',
        name: 'lecturer-mrs',
        component: () => import('@/views/person/lecturer/Mrs')
      }
    ],
    beforeEnter: guard
  },
  {
    path: '/admin',
    name: 'lk-admin',
    component: () => import('@/views/person/admin/Admin')
  },
  {
    path: '/admin/:path',
    name: 'lk-admin-view',
    component: () => import('@/views/person/admin/View')
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
