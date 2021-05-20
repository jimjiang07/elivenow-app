import Amplify from 'aws-amplify';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';
import { createApp } from 'vue';
import aws_exports from './aws-exports';
import App from './App.vue';

import 'vue-datetime/dist/vue-datetime.css'
import './main.css';


Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});

const app = createApp(App);
app.mount('#app');
