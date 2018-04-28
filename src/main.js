import Vue from 'vue'
import App from './App.vue'

import Navigation from './components/Navigation.vue';
import Search from './components/Search.vue';


Vue.component('Navigation', Navigation);
Vue.component('Search', Search);



new Vue({
  el: '#app',
  render: h => h(App)
})
