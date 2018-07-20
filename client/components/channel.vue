<template>
	<div>
		<button @click="selectChannel">
			{{ channel.title }} <span v-if="unread">({{ unread }})</span>
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			channel: {
				type: Object,
				required: true,
				validator: value => {
					if (!value._id || typeof value._id !== "string") {
						console.error("Error _id field is required and must be a string");
						return false;
					}

					if (!value.admins || !value.admins[0] || typeof value.admins[0] !== "string") {
						console.error("Error channels must have a admin with type of string");
						return false;
					}

					return true;
				}
			},

			unread: {
				type: Number,
				required: false,
				validator: value => {
					if (value < 0) {
						console.error("Error, Unread count cannot be a negative number.");
						return false;
					}

					return true;
				}
			}
		},

		computed: {
			title () {
				return this.channel.title;
			}
		},

		methods: {
			selectChannel () {
				this.$emit("selectedChannel", this.channel);
			}
		}
	};
</script>

<style scoped>
	button {
		width: 100%;
	}
</style>
