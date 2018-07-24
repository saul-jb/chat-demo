<template>
	<div class="page flex-center">
		<form class="form-main">
			<h2 class="form-heading">Create A Channel</h2>
			<div class="error" v-if="error">
				{{error}}
			</div>
			<label class="form-label" for="name">
				Channel Name:
				<input class="form-input" required v-model="name" type="text" id="name" />
			</label>
			<div @click.prevent="newChannel" class="form-button">Create</div>
		</form>
	</div>
</template>

<script>
	import {mapActions, mapState} from "vuex";

	export default {
		data () {
			return {
				name: "",
				error: ""
			};
		},

		computed: {
			...mapState("user", {
				userId: "id"
			})
		},

		methods: {
			newChannel () {
				this.error = "";
				this.createChannel({title: this.name, userId: this.userId}).then(channel => {
					this.$router.push({name: "Chat"});
				}).catch(err => {
					this.error = err.message;
				});
			},

			...mapActions("channels", ["createChannel"])
		}
	};
</script>

<style scoped>

</style>
