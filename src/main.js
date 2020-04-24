import Vue from 'vue'
import App from './App.vue'
import FileSelector from 'vue-file-selector';

Vue.config.productionTip = false;
Vue.use(FileSelector);

new Vue({
  render: h => h(App),
}).$mount('#app')
