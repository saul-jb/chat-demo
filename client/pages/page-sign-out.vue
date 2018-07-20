<template>
	<div class="page">
		<h2>Signout successful!</h2>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		created () {
			this.signOut();
		},

		methods: {
			...mapActions("user", [
				"signOut"
			])
		}
	};
</script>

<style scoped>
	.page{
		display: flex;
		align-items: center;
	}

	h2 {
		text-align: center;
		width: 100%;
	}
</style>
