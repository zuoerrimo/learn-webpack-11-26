import App from  './App.js'
import './main.css'
import Vue from './vue.js'

new Vue({
  el: '#app',
  components: {
    app: App,
  },
  template: `<app/>`,
})

