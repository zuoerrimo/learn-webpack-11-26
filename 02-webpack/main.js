import Vue from './vue.js'
import App from  './App.js'
import Cal from './Cal.js'
console.log(Cal)
new Vue({
  el: '#app',
  components: {
    app: App,
  },
  template: '<app/>',
})
