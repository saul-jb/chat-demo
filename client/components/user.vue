<template>
	<div class="user">
		{{user.username}}
	</div>
</template>

<script>
	export default {
		props: {
			user: {
				required: true,
				type: Object
			}
		}
	};
</script>

<style scoped>
	.user {
		padding: 1px;
		width: 100%;
	}
</style>
