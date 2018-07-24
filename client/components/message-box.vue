<template>
	<div class="message-box">
		<textarea-autosize
			class="input-field"
			placeholder="Type something here..."
			v-model="text"
			:min-height="40"
			:max-height="100"
			@keydown.exact.enter.prevent.native="send"
		></textarea-autosize>
		<SendButton class="send-button" @clicked="send" />
	</div>
</template>

<script>
	import {mapState, mapActions} from "vuex";
	import SendButton from "./send-button";

	export default {
		props: {
			parentRefs: {
				required: true
			}
		},

		data () {
			return {
				text: ""
			};
		},

		computed: {
			...mapState({
				currentChannel: state => state.channels.currentChannel,
				id: state => state.user.id
			})
		},

		methods: {
			scrollToBottom () {

			},

			send () {
				if (this.currentChannel) {
					this.createMessage({
						text: this.text.replace(/\r\n|\r|\n/g, "<br />"),
						userId: this.id,
						channelId: this.currentChannel._id
					}).then(() => {
						this.text = "";

						// Scroll to the bottom
						if (this.parentRefs.messageHistory) {
							this.parentRefs.messageHistory.scrollToBottom();
						}
					}).catch(err => {
						console.error(err);
					});
				}
			},

			...mapActions("messages", ["createMessage"])
		},

		components: {
			SendButton
		}
	};
</script>

<style scoped>
	.message-box {
		display: flex;
	}

	.input-field {
		flex: 1;

		resize: none;

		padding: 0;
		margin: 0;
	}

	.send-button {
		max-height: 40px;
		height: 40px;
		width: 40px;

		margin-top: auto;
	}
</style>
