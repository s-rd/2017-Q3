// Load application styles
import 'styles/index.scss';

import App from './App.vue';
import Vue from 'vue';

const vue = new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})
