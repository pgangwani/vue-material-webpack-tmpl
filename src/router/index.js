import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'TestPage',
      component: Test
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
