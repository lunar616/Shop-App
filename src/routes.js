// default
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// pages
import Home from '@/pages/Home/Home'
import Shop from '@/pages/Shop/Shop'
import Product from '@/pages/Product/Product'
import NotFound from '@/pages/404/404'

// routering
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/shop/:id',
      name: 'product',
      component: Product,
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});