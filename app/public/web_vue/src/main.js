import Vue from 'vue';
import App from './App';
import store from './store/store';

const app = new Vue({
	el:"#vue-app",
	store,
	render:(h)=> h(App)
});