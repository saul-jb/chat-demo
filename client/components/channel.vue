<template>
	<div>
		<button @click="selectChannel">
			{{ channel.title }}
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
			}
		},

		methods: {
			selectChannel () {

			}
		}
	};
</script>

<style scoped>

</style>
