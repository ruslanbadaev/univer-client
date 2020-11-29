import cookie from '@/cookie'

export default function (to, from, next) {
  if (cookie.getCookie('user') !== undefined && cookie.getCookie('user').role === to.path.split('/')[1]) {
    next()
  } else {
    next('/404')
  }
}
