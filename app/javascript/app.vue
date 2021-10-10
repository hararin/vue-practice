<template>
  <div>
    <div>
      <ul>
        <li><router-link :to="{ name: 'EmployeeIndexPage' }">HOME</router-link></li>
        <li><router-link :to="{ name: 'EmployeeNewPage' }">新規作成</router-link></li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  import EmployeeIndexPage from 'EmployeeIndexPage.vue'
  import EmployeeDetailPage from 'EmployeeDetailPage.vue'
  import EmployeeNewPage from 'EmployeeNewPage.vue'
  import EmployeeEditPage from 'EmployeeEditPage.vue'

  const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'EmployeeIndexPage',
        component: EmployeeIndexPage
      },
      {
        path: '/employees/:id(\\d+)',
        name: 'EmployeeDetailPage',
        component: EmployeeDetailPage,
        props: true
      },
      {
        path: '/employees/new',
        name: 'EmployeeNewPage',
        component: EmployeeNewPage
      },
      {
        path: '/employees/:id(\\d+)/edit',
        name: 'EmployeeEditPage',
        component: EmployeeEditPage
      }
    ]
  })

  Vue.use(VueRouter)

  export default {
    router
  }
</script>

<style scoped>
div {
  margin-top: 50px;
}
p {
  font-size: 2em;
  text-align: center;
}
</style>