import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
	routes:Routes,
	mode:'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
