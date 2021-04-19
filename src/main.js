import { createApp } from 'vue';
import App from './App.vue';

import ComponentLibrary from '../lib/main';

import './assets/css/app.css';
import './assets/css/index.css';

const app = createApp(App);

app.use(ComponentLibrary);

app.mount('#app');
