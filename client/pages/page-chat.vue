<template>
	<v-touch class="chat-page" :class="mobileClasses" @swipeleft="onSwipe('right')" @swiperight="onSwipe('left')">
		<Channels class="blue-border channels" />
		<div class="message-container">
			<ChannelOptions :parentRefs="this.$refs" />
			<MessageHistory ref="messageHistory" class="message-history" />
			<MessageBox class="message-box" :parentRefs="this.$refs" />
		</div>
		<Users class="blue-border users" />
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
				leftVisible: false,
				rightVisible: false
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
			this.leftVisible = !this.isPhone && this.isTablet;
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
					}
				}
			},

			setLeft () {
				this.setMobilePageClass("mobile-left");
				this.rightVisible = false;
				this.leftVisible = true;
			},

			setCenter () {
				this.setMobilePageClass("mobile-center");
				this.rightVisible = false;
				this.leftVisible = false;
			},

			setRight () {
				this.setMobilePageClass("mobile-right");
				this.rightVisible = true;
				this.leftVisible = false;
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
		grid-template-rows: 100%;
		grid-template-areas:
			"channels messages users"
			"channels messages users";

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

	.message-container {
		grid-area: messages;

		display: flex;
		flex-direction: column;
	}

	.message-history {
		height: 100%;
	}

	.message-box {
  		flex: 1;
		height: 40px;
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
			grid-template-areas: "channels messages";

			overflow: hidden;
		}
	}

	@media only screen and (max-width: 600px) {
		.chat-page {
			grid-template-columns: 100%;
			grid-template-areas: "messages";

			overflow: hidden;
		}
	}

	/* Dynamic mobile only */
	@media only screen and (min-width: 600px) and (max-width: 800px) {
		.chat-page.mobile-left {
			grid-template-columns: 20% 80%;
			grid-template-areas: "channels messages";
		}

		.chat-page.mobile-right {
			grid-template-columns: 80% 20%;
			grid-template-areas: "messages users";
		}
	}

	@media only screen and (max-width: 600px) {
		.chat-page {
			grid-template-columns: 100%;
		}

		.chat-page.mobile-left {
			grid-template-areas: "channels";
		}

		.chat-page.mobile-center {
			grid-template-areas: "messages";
		}

		.chat-page.mobile-right {
			grid-template-areas: "users";
		}
	}
</style>
