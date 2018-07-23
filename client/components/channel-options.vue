<template>
	<div>
		<button class="options-button" @click="scrollToBottom">
			Jump To Bottom
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			parentRefs: {
				required: true
			}
		},

		methods: {
			scrollToBottom () {
				if (this.parentRefs.messageHistory) {
					this.parentRefs.messageHistory.scrollToBottom();
				}
			}
		}
	};
</script>

<style scoped>
	.options-button {
		cursor: pointer;
		height: 100%;
	}
</style>
