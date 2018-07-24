<template>
	<div class="send-button" @click="clicked">
		<div class="send-arrow">&#8594;</div>
	</div>
</template>

<script>
	export default {
		methods: {
			clicked () {
				this.$emit("clicked");
			}
		}
	};
</script>

<style scoped>
	.send-button {
		cursor: pointer;

		font-size: 25px;
		color: #0066cc;

		border-radius: 3px;
		border: 1px solid #3399ff;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.send-button > .send-arrow:hover {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}

	.send-button > .send-arrow {
		-webkit-transition: -webkit-transform .4s ease-in-out;
		transition: transform .4s ease-in-out;
	}
</style>
