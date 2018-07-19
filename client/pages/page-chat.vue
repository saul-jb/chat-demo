<template>
	<div>
		Enjoy chat
		<Channels />
		<MessageBox />
		<Users />
	</div>
</template>

<script>
	import Channels from "@/components/channels";
	import MessageBox from "@/components/message-box";
	import Users from "@/components/users";

	export default {
		components: {
			Channels,
			MessageBox,
			Users
		}
	};
</script>

<style scoped>

</style>
