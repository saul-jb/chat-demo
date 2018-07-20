<template>
	<div>
		<div v-for="message in messages">
			{{ message.username }}: {{ message.text }}
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions, mapMutations} from "vuex";
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
				} else {
					this.addUnreadMessage(message.channel);
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
			...mapActions("messages", ["getMessages"]),
			...mapMutations("channels", ["addUnreadMessage"])
		}
	};
</script>

<style scoped>
	#message-history {
		padding: 5px 30px;
	}
</style>
