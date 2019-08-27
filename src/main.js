// vue libraries
import Vue from 'vue';

// third-party libraries
import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

// components
import App from './App.vue';
import router from './routes/router';

// helper functions
import store from './store';

Vue.config.productionTip = false;

window.toastr = require('toastr');

Vue.use(VueToastr2);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
