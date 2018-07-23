<template>
	<div @scroll.passive="onScroll">
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
				this.setMessages([]);

				if (newChannel) {
					this.loadMessages();
				}
			}
		},

		methods: {
			scrollToBottom () {
				this.$el.scrollTop = this.$el.scrollHeight;
			},

			onScroll (e) {
				if (e.target.scrollTop === 0) {
					this.loadMessages(e.target.scrollHeight);
				}
			},

			loadMessages (oldHeight = 0) {
				this.getMessages({
					channel: this.currentChannel,
					$sort: {
						createdAt: -1
					},
					$skip: this.messages.length
				}).then(res => {
					// We need to check if there is any new data because we have an infinite loop if there is not enough messages to populate the screen
					if (res.data.length > 0) {
						this.setMessages([...res.data.reverse(), ...this.messages]);

						// We need to wait until the messages have loaded
						Vue.nextTick().then(() => {
							// Set the scroll bar back to where it was (so it doesn't just jump to the top of the page)
							this.$el.scrollTop = this.$el.scrollHeight - oldHeight;

							// Check if there is enough messages to populate the screen
							if (this.$el.clientHeight >= this.$el.scrollHeight) {
								this.loadMessages();
							}
						});
					}
				}).catch(err => {
					console.error(err);
				});
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
		overflow-wrap: break-word;
	}
</style>
