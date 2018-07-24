<template>
	<div class="options-container">
		<div class="options-button" @click="scrollToBottom">
			Jump To Bottom
		</div>
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
	.options-container {
		display: flex;
	}

	.options-button {
		cursor: pointer;

		text-align: center;

		margin: auto;
		padding: 5px;

		color: #0066cc;
	}

	@media only screen and (max-width: 800px) {
		.options-container {
			height: 50px;
		}
	}
</style>
