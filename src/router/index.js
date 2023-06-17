import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import VentureView from '../views/Venture.vue'
import ProductView from '../views/Product.vue'
import ContactView from '../views/Contactus.vue'
import BlogView from '../views/blog.vue'
import fView from '../views/404.vue'
import SingleBlog from '../views/SingleBlog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/venture',
    name: 'venture',
    component: VentureView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/blog/:id',
    name: 'SingleBlog',
    component: SingleBlog
  },
  {
    path: '/:catchall(.*)*',
    name: "404",
    component: fView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
