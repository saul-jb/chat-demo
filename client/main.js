import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTextareaAutosize from "vue-textarea-autosize";
import VueTouch from "vue-touch";

Vue.use(VueTouch, {name: "v-touch"});
Vue.use(VueTextareaAutosize);

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	store,
	template: "<App/>",
	components: { App }
});
