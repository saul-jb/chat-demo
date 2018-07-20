<template>
	<div class="chat-page">
		<Channels class="blue-border" id="channels" />
		<div id="message">
			<MessageHistory id="message-history" />
			<MessageBox id="message-box" />
		</div>
		<Users class="blue-border" id="users" />
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

<style>
</style>

<style scoped>
	.chat-page {
		display: flex;
		height: 100%;
		background-color: #cce6ff;
	}

	.blue-border {
		border: 1px solid #3399ff;
	}

	#channels {
		width: 10%;
		height: 100%;

		overflow-y: auto;
		overflow-x: hidden;
	}

	#users {
		width: 10%;
		height: 100%;

		overflow-y: auto;
		overflow-x: hidden;
	}

	#message {
		width: 80%;
	}

	#message-history {
		width: 100%;
		height: 90%;
	}

	#message-box {
		width: 100%;
		height: 10%;
		display: flex;
	}
</style>
