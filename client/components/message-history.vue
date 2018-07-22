<template>
	<div>
		<div v-for="message in messages">
			{{ message.username }}: {{ message.text }}
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import {mapState, mapActions, mapMutations} from "vuex";

	export default {
		created () {
			this.startListening();
		},

		computed: {
			...mapState({
				currentChannel: state => state.channels.currentChannel,
				messages: state => state.messages.messages
			})
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
			},

			messages () {
				Vue.nextTick().then(() => {
					this.scrollToBottom();
				});
			}
		},

		methods: {
			scrollToBottom () {
				this.$el.scrollTop = this.$el.scrollHeight;
			},

			...mapActions("messages", ["getMessages", "startListening"]),
			...mapMutations({
				addUnreadMessage: "channels/addUnreadMessage",
				setMessages: "messages/setMessages"
			})
		}
	};
</script>

<style scoped>
	#message-history {
		padding: 5px 30px;
		overflow-y: auto;
	}
</style>
