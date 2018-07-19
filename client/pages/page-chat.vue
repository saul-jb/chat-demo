<template>
	<div>
		Enjoy chat
		<Channels />
		<MessageHistory />
		<MessageBox />
		<Users />
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

</style>
