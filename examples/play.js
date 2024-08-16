import Vue from 'vue';
import Element from 'main/index.js'; // 这个被alias了
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss';
console.log('🚀💥💥 ~ Element: --》》', Element);
Vue.use(Element);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
