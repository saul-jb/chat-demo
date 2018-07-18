<template>
	<div id="app">
		<router-link :to="{ name: 'Home', params: {} }">Home</router-link>
		<router-link :to="{ name: 'Register', params: {} }">Register</router-link>
		<router-link :to="{ name: 'Chat', params: {} }">Chat</router-link>
		<router-link :to="{ name: 'SignIn', params: {} }">SignIn</router-link>
		<router-link :to="{ name: 'SignOut', params: {} }">SignOut</router-link>
		<router-view></router-view>
	</div>
</template>

<script>

</script>

<style>

</style>
