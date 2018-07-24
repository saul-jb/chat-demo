<template>
	<div class="chat-page">
		<Channels class="blue-border" id="channels" />
		<div class="message-container">
			<ChannelOptions :parentRefs="this.$refs" />
			<MessageHistory ref="messageHistory" id="message-history" />
			<MessageBox id="message-box" :parentRefs="this.$refs" />
		</div>
		<Users class="blue-border" id="users" />
		<!-- < -->
	</div>
</template>

<script>
	import Channels from "@/components/channels";
	import ChannelOptions from "@/components/channel-options";
	import MessageBox from "@/components/message-box";
	import MessageHistory from "@/components/message-history";
	import Users from "@/components/users";

	export default {
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
		grid-template-columns: repeat(7, minmax(80px, 1fr));
		grid-template-rows: repeat(1, minmax(1px, 1fr));

		height: 100%;

		background-color: #cce6ff;
	}

	.blue-border {
		border: 1px solid #3399ff;
	}

	#channels {
		overflow-y: auto;
		overflow-x: hidden;

		grid-row-start: 1;
		grid-row-end: 1;
		grid-column-start: 1;
		grid-column-end: 2;
	}

	.message-container {
		grid-row-start: 1;
		grid-row-end: 1;
		grid-column-start: 2;
		grid-column-end: 7;

		display: flex;
		flex-direction: column;
	}

	#message-history {
		height: 100%;
	}

	#message-box {
  		flex: 1;
		height: 40px;
	}

	#users {
		overflow-y: auto;
		overflow-x: hidden;

		grid-row-start: 1;
		grid-row-end: 1;
		grid-column-start: 7;
		grid-column-end: 8;
	}

</style>
