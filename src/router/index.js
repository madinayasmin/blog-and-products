import Vue from 'vue';
import VueRouter from 'vue-router';

import Blog from '../views/Blog.vue';
import Products from '../views/Products.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/blog' },
  { path: '/blog', component: Blog },
  { path: '/products', component: Products },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
