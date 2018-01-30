import Vue from 'vue'
import Router from 'vue-router'
// import MHeader from '@/components/m-header/m-header'
import Recommend from '@/components/recommend/recommend'
import Search from '@/components/search/search'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: Recommend
    },
    {
      path: '/recommend',
      name: 'MHeader',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
