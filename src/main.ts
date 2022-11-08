import { createApp } from 'vue';
import App from './App.vue';
import SpecificationsList from './components/SpecificationsList.vue';
import Specification from './components/Specification.vue';
import ConfigurationsList from './components/ConfigurationsList.vue';
import Configuration from './components/Configuration.vue';
import NewConfigurationWindow from './components/NewConfigurationWindow.vue';

import './assets/main.css'

const app = createApp(App);
app.component('SpecificationsList', SpecificationsList);
app.component('SpecificationElement', Specification);
app.component('ConfigurationsList', ConfigurationsList);
app.component('ConfigurationElement', Configuration);
app.component('NewConfigurationWindow', NewConfigurationWindow);
const mountedApp = app.mount('#app');
