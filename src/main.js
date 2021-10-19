import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import axiosPlugin from '@/plugins/axios'

const app = createApp(App);
app.use(axiosPlugin);

app.use(store);
app.mount('#app');