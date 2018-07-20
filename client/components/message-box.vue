<template>
	<div>
		<textarea @keydown.enter="send" v-model="text" /><button @click.prevent="send" :disabled="!currentChannel">Send</button>
	</div>
</template>

<script>
	import {mapState, mapActions} from "vuex";

	export default {
		data () {
			return {
				text: ""
			};
		},

		computed: {
			...mapState("channels", ["currentChannel"]),
			...mapState("user", ["id"])
		},

		methods: {
			send () {
				this.createMessage({
					text: this.text,
					userId: this.id,
					channelId: this.currentChannel._id
				}).then(res => {
					console.log(res);
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("messages", ["createMessage"])
		}
	};
</script>

<style scoped>
	textarea {
		resize: none;
		width:90%;
		height: 98%;
	}

	button {
		width:10%;
		height: 98%;
	}
</style>
