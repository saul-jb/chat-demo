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
			component: Register,
			meta: {
				authHidden: true
			}
		},
		{
			path: "/signin",
			name: "SignIn",
			component: SignIn,
			beforeEnter (to, from, next) {
				// Attempt a sign in with jwt before we request details
				store.dispatch("user/signIn", {}).then(() => {
					next("/chat");
				}).catch(() => {
					next();
				});
			},
			meta: {
				authHidden: true
			}
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

	if (to.meta.auth && !store.state.user.id) {
		// Needs auth and not authenticated
		next("/signin");
	} else if (to.meta.authHidden && store.state.user.id) {
		// Needs to be signed out but we are signed in
		next("/chat");
	} else {
		next();
	}
});

export default router;
