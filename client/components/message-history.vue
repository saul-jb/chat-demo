<template>
	<div>
		message history
	</div>
</template>

<script>
	import client from "@libs/client";

	export default {
		created () {
			client.service("messages").on("created", message => {
				console.log("Message CREATED!", message);
			});
		}
	};
</script>

<style scoped>

</style>
