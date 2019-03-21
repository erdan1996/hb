import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import success from './components/success.vue'
import fail from './components/fail.vue'
import redEnvelopes from './components/redEnvelopes.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: '',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld'
    },
    {
      path: '/success',
      component: success,
      name: 'success'
    },
    {
      path: '/fail',
      component: fail,
      name: 'fail'
    },
    {
      path: '/redEnvelopes',
      component: redEnvelopes,
      name: 'redEnvelopes'
    }
  ]
})
