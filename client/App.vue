<template>
	<div id="app">
		<nav>
			<ul v-if="id">
				<li>
					<router-link :to="{ name: 'Home', params: {} }">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Chat', params: {} }">Chat</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'SignOut', params: {} }">Sign Out</router-link>
				</li>
			</ul>
			<ul v-else>
				<li>
					<router-link :to="{ name: 'Home', params: {} }">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'SignIn', params: {} }">Sign In</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Register', params: {} }">Register</router-link>
				</li>
			</ul>
		</nav>

		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	import {mapState} from "vuex";

	export default {
		computed: {
			...mapState("user", ["id"])
		}
	};
</script>

<style>
	/* General */
	* {
		box-sizing: border-box;
	}

	html, body, #app {
		border: none;
		padding: 0;
		margin: 0;

		width:100%;
		height: 100%;
	}

	a {
		outline: 0;
	}

	/* Pages */

	/* Content */
	main {
		padding: 0px 10%;

		height: calc(100% - 30px);
	}

	.page {
		background-color: #cce6ff;

		height: 100%;

		padding: 4% 8%;
	}
</style>

<style scoped>
	/* Navigation */
	nav {
		display: flex;

		width:100%;
		height: 30px;

		background-color: #3399ff;
	}

	ul {
		list-style: none;

		width:100%;

		margin: 0;
    	padding-left:0;

		display: flex;
	}

	li {
		width: 20%;

		margin: 0 auto;

		display: flex;
		align-items: center;
	}

	a {
		height: 100%;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		text-decoration: none;
		background-color: #0066cc;
		color: white;
		font-weight: bold;
	}

	a:hover {
		background-color: #0080ff;
	}
</style>
