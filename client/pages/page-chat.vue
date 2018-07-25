<template>
	<v-touch
		class="chat-page"
		:class="mobileClasses"
		@swipeleft="onSwipe('right')"
		@swiperight="onSwipe('left')"
	>
		<Channels v-show="leftVisible" class="blue-border channels" />

		<ChannelOptions
			v-show="centerVisible"
			class="channel-options"
			:parentRefs="this.$refs"
		/>
		<MessageHistory
			v-show="centerVisible"
			ref="messageHistory"
			class="message-history"
		/>
		<MessageBox
			v-show="centerVisible"
			class="message-box"
			:parentRefs="this.$refs"
		/>

		<Users v-show="rightVisible" class="blue-border users" />
	</v-touch>
</template>

<script>
	import Channels from "@/components/channels";
	import ChannelOptions from "@/components/channel-options";
	import MessageBox from "@/components/message-box";
	import MessageHistory from "@/components/message-history";
	import Users from "@/components/users";

	export default {
		/* MOBILE ONLY */

		data () {
			return {
				mobileClasses: {},
				leftVisible: true,
				rightVisible: true,
				centerVisible: true
			};
		},

		computed: {
			isPhone () {
				return (screen.width <= 600);
			},

			isTablet () {
				return (screen.width >= 600) && (screen.width <= 800);
			}
		},

		created () {
			if (this.isPhone || this.isTablet) {
				this.leftVisible = !this.isPhone && this.isTablet;
				this.rightVisible = false;
			}
		},

		methods: {
			setMobilePageClass (classes) {
				this.mobileClasses = classes;
			},

			onSwipe (direction) {
				// check we are mobile
				if (screen.width <= 800) {
					// Ensure that we are not swiping to an area already shown
					if (
						(direction === "left" && !this.leftVisible) ||
						(direction === "right" && !this.rightVisible)
					) {
						if ((!this.leftVisible && !this.rightVisible) || !this.isPhone) {
							direction === "left" ? this.setLeft() : this.setRight();
						} else {
							this.setCenter();
						}

						// Reset scroll
						this.$refs.messageHistory.scrollToBottom();
					}
				}
			},

			setLeft () {
				this.setMobilePageClass("mobile-left");
				this.leftVisible = true;
				this.centerVisible = !this.isPhone;
				this.rightVisible = false;
			},

			setCenter () {
				this.setMobilePageClass("mobile-center");
				this.leftVisible = false;
				this.centerVisible = this.isPhone;
				this.rightVisible = false;
			},

			setRight () {
				this.setMobilePageClass("mobile-right");
				this.leftVisible = false;
				this.centerVisible = !this.isPhone;
				this.rightVisible = true;
			}
		},

		/* END MOBILE ONLY */

		components: {
			Channels,
			ChannelOptions,
			MessageBox,
			Users,
			MessageHistory
		}
	};
</script>

<style>
</style>

<style scoped>
	.chat-page {
		display: grid;
		grid-template-columns: 20% 60% 20%;
		grid-template-rows: 40px calc(100% - 80px) 40px;
		grid-template-areas:	"channels	options		users"
								"channels	messages	users"
								"channels	input		users";

		height: 100%;

		background-color: #cce6ff;
	}

	.blue-border {
		border: 1px solid #3399ff;
	}

	.channels {
		overflow-y: auto;
		overflow-x: hidden;

		grid-area: channels;
	}

	.channel-options {
		grid-area: options;
	}

	.message-history {
		grid-area: messages;
		height: 100%;
	}

	.message-box {
		grid-area: input;
	}

	.users {
		overflow-y: auto;
		overflow-x: hidden;

		grid-area: users;
	}

	/* Mobile only */
	@media only screen and (min-width: 600px) and (max-width: 800px) {
		.chat-page {
			grid-template-columns: 20% 80%;
			grid-template-areas:	"channels	options"
									"channels	messages"
									"channels	input";

			overflow: hidden;
		}
	}

	@media only screen and (max-width: 600px) {
		.chat-page {
			grid-template-columns: 100%;
			grid-template-areas:	"options"
									"messages"
									"input";

			overflow: hidden;
		}
	}

	/* Dynamic mobile only */
	@media only screen and (min-width: 600px) and (max-width: 800px) {
		.chat-page.mobile-left {
			grid-template-columns: 20% 80%;
			grid-template-areas:	"channels	options"
									"channels	messages"
									"channels	input";
		}

		.chat-page.mobile-right {
			grid-template-columns: 80% 20%;
			grid-template-areas:	"options	users"
									"messages	users"
									"input		users";
		}
	}

	@media only screen and (max-width: 600px) {
		.chat-page {
			grid-template-columns: 100%;
		}

		.chat-page.mobile-left {
			grid-template-areas:	"channels"
									"channels"
									"channels";
		}

		.chat-page.mobile-center {
			grid-template-areas:	"options"
									"messages"
									"input";
		}

		.chat-page.mobile-right {
			grid-template-areas:	"users"
									"users"
									"users";
		}
	}
</style>
