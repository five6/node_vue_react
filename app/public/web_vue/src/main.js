import Vue from 'vue';
import App from './App';
import store from './store/store';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-teal.css';
import VueRouter from 'vue-router';
Vue.use(MuseUI);
Vue.use(VueRouter);
const app = new Vue({
	el:"#vue-app",
	store,
	render:(h)=> h(App)
});