<template>
	<div id="app">
		<TheNavBar />
		<main class="main">
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	import TheNavBar from "@/components/the-nav-bar";

	export default {
		components: {
			TheNavBar
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

	/* Main Content / Pages */
	.page {
		background-color: #cce6ff;

		height: 100%;

		padding: 4% 8%;
	}

	.flex-center {
		display: flex;
		align-items: center;
	}

	/* Forms */
	.form-main {
		width: 60%;
		max-width: 400px;

		margin: auto;

		display: flex;
		flex-direction: column;
	}

	.form-heading {
		text-align: center;
	}

	.form-label {
		align-items: center;

		width: 100%;

		padding: 8px 0;
	}

	.error {
		border: 1px solid red;
		padding: 10px;

		text-align: center;

		background-color: #ff9999;
	}

	.form-input {
		width: 100%;
	}

	.form-button {
		margin-top: 10px;
	}
</style>

<style scoped>
	.main {
		height: calc(100% - 30px);
	}
</style>
