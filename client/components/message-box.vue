<template>
	<div>
		message box
		<textarea v-model="text" />
		<button @click.prevent="send">Send</button>
	</div>
</template>

<script>
	import {mapState} from "vuex";

	export default {
		data () {
			return {
				text: ""
			};
		},

		computed: {
			...mapState("channels", ["currentChannel"])
		},

		watch: {
			currentChannel (newChannel, oldChannel) {
				console.log(newChannel._id);
			}
		}
	};
</script>

<style scoped>

</style>
