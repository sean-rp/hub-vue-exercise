import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import CreateContact from './components/CreateContact'
import EditContact from './components/EditContact'
import ViewContacts from './components/ViewContacts'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: ViewContacts },
  { path: '/create', component: CreateContact },
  // TODO can these be combined since they're the same form and then conditionally render create or edit?
  { path: '/edit/:id', component: EditContact },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  data () {
    return {
      contacts: null
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => (this.contacts = response))
  },
  router,
  render: h => h(App),
}).$mount('#app')
