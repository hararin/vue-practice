import Vue from "vue"
import App from "./components/App.vue"
import vuetify from "./plugins/vuetify.js"

const VueApp = Vue.extend(App)

console.log('Hello!')

const app = new VueApp({
  el: '#app',
  vuetify
})