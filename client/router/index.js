import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import Chat from "@/pages/page-chat";
import Home from "@/pages/page-home";
import Register from "@/pages/page-register";
import SignIn from "@/pages/page-sign-in";
import SignOut from "@/pages/page-sign-out";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home
		},
		{
			path: "/chat",
			name: "Chat",
			component: Chat,
			meta: {
				auth: true
			}
		},
		{
			path: "/register",
			name: "Register",
			component: Register
		},
		{
			path: "/signin",
			name: "SignIn",
			component: SignIn
		},
		{
			path: "/signout",
			name: "SignOut",
			component: SignOut
		},
		{
			path: "*",
			redirect: "/"
		}
	]
});

router.beforeEach((to, from, next) => {
	document.title = to.name;

	if (to.meta.auth && !store.state.user.authenticated) {
		next("/signin");
	} else {
		next();
	}
});

export default router;
