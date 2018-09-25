import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import experience from './views/experience.vue'
import blog from './views/blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/daria-kriukova/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
