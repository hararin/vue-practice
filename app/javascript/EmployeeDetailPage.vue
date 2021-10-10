<template>
  <div>
    <transition name="fade">
      <div class="message" v-if="message">
        <p class="alert alert-success">{{ message }}</p>
      </div>
    </transition>
    <dl>
      <dt>ID</dt>
      <dd>{{ employee.id }}</dd>
      <dt>Name</dt>
      <dd>{{ employee.name }}</dd>
      <dt>Department</dt>
      <dd>{{ employee.department }}</dd>
      <dt>Gender</dt>
      <dd>{{ employee.gender }}</dd>
      <dt>Birth</dt>
      <dd>{{ employee.birth }}</dd>
      <dt>Joined Date</dt>
      <dd>{{ employee.joined_date }}</dd>
      <dt>Payment</dt>
      <dd>{{ employee.payment }}</dd>
      <dt>Note</dt>
      <dd>{{ employee.note }}</dd>
    </dl>
    <router-link :to="{ name: 'EmployeeEditPage', params: { id: employee.id } }">編集する</router-link>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props:['message'],
  data: function () {
    return {
      employee: {},
      message: null
    }
  },
  mounted () {
    axios
      .get(`/api/v1/employees/${this.$route.params.id}.json`)
      .then(response => {
        this.employee = response.data;
        setTimeout(() => {message = false;}, 800);
      })
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>