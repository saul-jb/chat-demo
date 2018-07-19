<template>
	<div>
		message history
	</div>
</template>

<script>
	import {mapState} from "vuex";
	import client from "@/libs/client";

	export default {
		created () {
			client.service("messages").on("created", message => {
				console.log("Message CREATED!", message);
			});
		},

		computed: {
			...mapState("channels", ["currentChannel"])
		},

		watch: {
			currentChannel (newChannel, oldChannel) {
				console.log(newChannel._id);
			}
		}
	};
</script>

<style scoped>

</style>
