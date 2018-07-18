<template>
	<div>
		Signout successful!
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

</style>
