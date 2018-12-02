import Vue from 'vue';
import App from './App.vue'

new Vue({
  el: '#app',
  render: creater=>creater(App),
  // components: {
  //   app: App,
  // },
  // template: `<app/>`,
})