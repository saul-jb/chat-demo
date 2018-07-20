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

		<router-view></router-view>
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
</style>

<style scoped>
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
