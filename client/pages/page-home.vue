<template>
	<div class="page">
		<div class="home-content">
			<h2>Home</h2>
			This application is a demonstration of a realtime chat application without firebase.<br />
			The application was made in only a week and it is for demonstration purposes only and is not a polished product.<br />
			<br />
			The source code can be found on my github <a href="https://github.com/saul-avikar/chat-demo" target="_blank">here</a>.
			<h3>Features</h3>
			<ul class="grid-list">
				<li class="grid-list-item">
					Realtime messaging
				</li>
				<li class="grid-list-item">
					Authentication
				</li>
				<li class="grid-list-item">
					Lazy loads messages
				</li>
				<li class="grid-list-item">
					Channels
				</li>
				<li class="grid-list-item">
					Native desktop versions
				</li>
				<li class="grid-list-item">
					Mobile friendly
				</li>
			</ul>
			<h3>Download</h3>
			<ul class="grid-list">
				<li>
					<a href="windows.exe">Windows</a>
				</li>
				<li>
					<a href="linux.AppImage">Linux</a>
				</li>
			</ul>
			<h3>Built with:</h3>
			<ul class="grid-list">
				<li class="grid-list-item">
					<a href="https://vuejs.org/" target="_blank">Vue</a>
				</li>
				<li class="grid-list-item">
					<a href="https://nodejs.org/en/" target="_blank">Node.js</a>
				</li>
				<li class="grid-list-item">
					<a href="https://expressjs.com/" target="_blank">Express</a>
				</li>
				<li class="grid-list-item">
					<a href="https://socket.io/" target="_blank">Socket.IO</a>
				</li>
				<li class="grid-list-item">
					<a href="https://feathersjs.com/" target="_blank">Feathers</a>
				</li>
				<li class="grid-list-item">
					<a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
				</li>
				<li class="grid-list-item">
					<a href="https://webpack.js.org/" target="_blank">Webpack</a>
				</li>
				<li class="grid-list-item">
					<a href="https://electronjs.org/" target="_blank">Electron</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
	};
</script>

<style scoped>
	.page {
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 4% 20%;
	}

	.home-content {
		width: 100%;
	}

	.grid-list {
		display: grid;
		grid-template-columns: 33% 33% 33%;
		grid-template-rows: auto;
	}

	.grid-list-item {
		padding: 3px;
	}

	@media only screen and (min-width: 600px) and (max-width: 800px) {
		.page {
			padding: 4% 8%;
		}

		.grid-list {
			grid-template-columns: 50% 50%;
		}
	}

	@media only screen and (max-width: 600px) {
		.page {
			padding: 4% 4%;
		}

		.grid-list {
			grid-template-columns: 100%;
		}
	}
</style>
