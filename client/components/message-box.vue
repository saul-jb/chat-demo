<template>
	<div>
		message box
		<textarea v-model="text" />
		<button @click.prevent="send">Send</button>
	</div>
</template>

<script>
	import {mapState} from "vuex";
	import client from "@libs/client";

	export default {
		data () {
			return {
				text: ""
			};
		},

		computed: {
			...mapState("channels", ["currentChannel"])
		},

		watch: {
			currentChannel (newChannel, oldChannel) {
				console.log(newChannel._id);
			}
		},

		created () {
			client.service("messages").on("created", message => {
				console.log("Message CREATED!", message);
			});
		}
	};
</script>

<style scoped>

</style>
