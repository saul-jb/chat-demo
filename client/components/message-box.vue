<template>
	<div>
		message box
		<textarea v-model="text" />
		<button @click.prevent="send">Send</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				text: ""
			};
		},

		methods: {
			send () {
				console.log(this.text);
			}
		}
	};
</script>

<style scoped>

</style>
