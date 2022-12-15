import Vue from 'vue'
import Router from 'vue-router'

// import MyPage from '~/components/my-page'
import IndexView from "~/pages/index.vue"

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: IndexView
      },
      {
        path: '/2',
        component: IndexView
      }
    ]
  })
}
