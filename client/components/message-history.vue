<template>
	<div>
		<div v-for="message in messages">
			{{ message.username }}: {{ message.text }}
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions, mapMutations} from "vuex";

	export default {
		created () {
			this.startListening();
		},

		computed: {
			...mapState("channels", ["currentChannel"]),
			...mapState("messages", ["messages"])
		},

		watch: {
			currentChannel (newChannel, oldChannel) {
				if (newChannel) {
					this.getMessages({
						channel: newChannel._id,
						$sort: {
							createdAt: -1
						}
					}).then(res => {
						this.setMessages(res.data.reverse());
					}).catch(err => {
						console.error(err);
					});
				} else {
					this.setMessages([]);
				}
			}
		},

		methods: {
			...mapActions("messages", ["getMessages", "startListening"]),
			...mapMutations("channels", ["addUnreadMessage"]),
			...mapMutations("messages", ["setMessages"])
		}
	};
</script>

<style scoped>
	#message-history {
		padding: 5px 30px;
		overflow-y: auto;
	}
</style>
