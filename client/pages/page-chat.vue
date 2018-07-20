<template>
	<div class="chat-page">
		<Channels id="channels" />
		<div id="message">
			<MessageHistory id="message-history" />
			<MessageBox id="message-box" />
		</div>
		<Users id="users" />
	</div>
</template>

<script>
	import Channels from "@/components/channels";
	import MessageBox from "@/components/message-box";
	import MessageHistory from "@/components/message-history";
	import Users from "@/components/users";

	export default {
		components: {
			Channels,
			MessageBox,
			Users,
			MessageHistory
		}
	};
</script>

<style scoped>
	.chat-page {
		display: flex;
		height: 100%;
	}

	#channels {
		background-color: red;

		width: 10%;
		height: 100%;

		overflow-y: auto;
		overflow-x: hidden;
	}

	#users {
		background-color: blue;

		width: 10%;
		height: 100%;

		overflow-y: auto;
		overflow-x: hidden;
	}

	#message {
		width: 80%;
	}

	#message-history {
		background-color: yellow;

		width: 100%;
		height: 80%;
	}

	#message-box {
		background-color: green;

		width: 100%;
		height: 20%;
	}
</style>
