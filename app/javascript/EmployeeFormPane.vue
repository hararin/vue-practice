<template>
  <form @submit.prevent="$emit('submit')">
    <div v-if="errors.length != 0">
      <ul v-for="e in errors" :key="e">
        <li><font color="red">{{ e }}</font></li>
      </ul>
    </div>
    <div>
      <label>Name</label>
      <input type="text" v-model="employee.name">
    </div>
    <div>
      <label>Department</label>
      <input type="text" v-model="employee.department">
    </div>
    <div>
      <label>Gender</label>
      <select v-model="employee.gender">
        <option>other</option>
        <option>male</option>
        <option>female</option>
      </select>
    </div>
    <div>
      <label>Birth</label>
      <input type="date" v-model="employee.birth">
    </div>
    <div>
      <label>Joined Date</label>
      <input type="date" v-model="employee.joined_date">
    </div>
    <div>
      <label>Payment</label>
      <input type="number" v-model="employee.payment" min="0">
    </div>
    <div>
      <label>Note</label>
      <input v-model="employee.note" type="text">
    </div>
    <button type="submit">Commit</button>
  </form>
</template>

<script>
export default {
  props: {
    employee: {},
    errors: ''
  }
}
</script>