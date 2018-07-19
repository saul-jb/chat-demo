<template>
	<div>
		<form @sumbit.prevent="newChannel">
			<label for="name">Channel Name</label>
			<input type="text" v-model="name" id="name" />
		</form>
		create a channel
		<button @click="newChannel">newChannel</button>
	</div>
</template>

<script>
	import {mapActions, mapState} from "vuex";

	export default {
		data () {
			return {
				name: ""
			};
		},

		computed: {
			...mapState("user", {
				userId: "id"
			})
		},

		methods: {
			newChannel () {
				this.createChannel({title: this.name, userId: this.userId}).then(channel => {
					return this.getChannels({admins: this.userId});
				}).catch(err => {
					console.error(err);
				});
			},

			...mapActions("channels", ["createChannel", "getChannels"])
		}
	};
</script>

<style scoped>

</style>
