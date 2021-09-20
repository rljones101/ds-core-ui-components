import Vue from 'vue'
import Router from 'vue-router'
import DsButtonPage from '@/pages/DsButtonPage'
import DsAdvancedSelectPage from '@/pages/DsAdvancedSelectPage'
import DsCardPage from '@/pages/DsCardPage'
import HomePage from '@/pages/HomePage'
import DsPaginationPage from '@/pages/DsPaginationPage'
import DsBreadcrumbsPage from '@/pages/DsBreadcrumbsPage'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ds-button',
    name: 'DsButton',
    component: DsButtonPage
  },
  {
    path: '/ds-card',
    name: 'DsCard',
    component: DsCardPage
  },
  {
    path: '/ds-advanced-select',
    name: 'DsAdvancedSelect',
    component: DsAdvancedSelectPage
  },
  {
    path: '/ds-pagination',
    name: 'DsPagination',
    component: DsPaginationPage
  },
  {
    path: '/ds-breadcrumbs',
    name: 'DsBreadcrumbs',
    component: DsBreadcrumbsPage
  }
]

const router = new Router({
  routes
})

export default router
