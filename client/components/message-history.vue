<template>
	<div>
		message history
		<div v-for="message in messages">
			{{ message.text }}
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from "vuex";
	import client from "@/libs/client";

	export default {
		data () {
			return {
				messages: []
			};
		},

		created () {
			client.service("messages").on("created", message => {
				if (message.channel === this.currentChannel._id) {
					this.messages.push(message);
				}
			});
		},

		computed: {
			...mapState("channels", ["currentChannel"])
		},

		watch: {
			currentChannel (newChannel, oldChannel) {
				console.log(newChannel._id);
				this.getMessages({channel: newChannel._id}).then(res => {
					this.messages = res.data;
				}).catch(err => {
					console.error(err);
				});
			}
		},

		methods: {
			...mapActions("messages", ["getMessages"])
		}
	};
</script>

<style scoped>

</style>
