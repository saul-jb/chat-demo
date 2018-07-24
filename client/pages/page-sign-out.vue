<template>
	<div class="page flex-center">
		<h2>Signout successful!</h2>
	</div>
</template>

<script>
	import {mapActions, mapMutations} from "vuex";

	export default {
		created () {
			this.signOut();
			this.setCurrentChannel(null);
			this.setMessages([]);
		},

		methods: {
			...mapActions("user", ["signOut"]),
			...mapMutations({
				setCurrentChannel: "channels/setCurrentChannel",
				setMessages: "messages/setMessages"
			})
		}
	};
</script>

<style scoped>
	h2 {
		text-align: center;
		width: 100%;
	}
</style>
