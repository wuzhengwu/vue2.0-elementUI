import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Index from '../views/index/index'
import Table from '../views/table/table'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {path: '/index', component: Index, name: '首页', class: 'el-icon-tickets', meta: []},
      {path: '/table', component: Table, name: '表格', class: 'el-icon-tickets', meta: ['表格']}
    ]
  }
]

export default new Router({
  mode: 'history',
  routes
})
