import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import SpeedDial from 'primevue/speeddial';



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'      
import '/node_modules/primeflex/primeflex.css'
const app = createApp(App);
app.use(PrimeVue)

app.component('Button', Button)
app.component('AutoComplete',AutoComplete)
app.component('SpeedDial',SpeedDial)
app.component('InputText',InputText)
app.component('Password',Password)


app.use(createPinia());
app.use(router);

app.mount("#app");
