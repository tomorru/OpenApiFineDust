import Vue from 'vue'
import Router from 'vue-router'
import DataList from '../components/datalist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataList',
      component: DataList
    }
  ]
})
