<template>
	<nav class="nav">
		<ul class="nav-list" v-if="id">
			<li class="nav-item">
				<router-link class="nav-link" :to="{ name: 'Home', params: {} }">Home</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" :to="{ name: 'Chat', params: {} }">Chat</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" :to="{ name: 'SignOut', params: {} }">Sign Out</router-link>
			</li>
		</ul>
		<ul class="nav-list" v-else>
			<li class="nav-item">
				<router-link class="nav-link" :to="{ name: 'Home', params: {} }">Home</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" :to="{ name: 'SignIn', params: {} }">Sign In</router-link>
			</li>
			<li class="nav-item">
				<router-link class="nav-link" :to="{ name: 'Register', params: {} }">Register</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	import {mapState} from "vuex";

	export default {
		computed: {
			...mapState("user", ["id"])
		}
	};
</script>

<style scoped>
	/* Navigation */
	.nav {
		display: flex;

		width:100%;
		height: 30px;

		background-color: #3399ff;
	}

	.nav-list {
		list-style: none;

		width:100%;

		margin: 0;
    	padding-left:0;

		display: flex;
	}

	.nav-item {
		width: 20%;
		min-width: 80px;

		margin: 0 auto;

		display: flex;
		align-items: center;
	}

	.nav-link {
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

	.nav-link:hover {
		background-color: #0080ff;
	}
</style>
