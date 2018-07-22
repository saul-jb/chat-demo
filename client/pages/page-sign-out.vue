<template>
	<div class="page flex-center">
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
			...mapActions("user", ["signOut"])
		}
	};
</script>

<style scoped>
	h2 {
		text-align: center;
		width: 100%;
	}
</style>
