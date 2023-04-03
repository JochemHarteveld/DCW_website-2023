<script>
	import Footer from '../components/Footer.svelte';
import Navigation from '../components/Navigation.svelte';
</script>

<div class="container">
	<div class="nav">
		<Navigation />
	</div>

	<div class="slot">
		<slot />
	</div>

	<Footer></Footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	.container{
		margin: 2rem;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Courier Prime', monospace;
	}

	:global(body) {
		height: 100vh;
		font-family: sans-serif;
		background: url(/newspaper.png);
	}

	:global(html) {
		height: 100vh;
		width: 100vw;
	}

	:root{
		--ink-color: #473e2c;
	}

	
</style>
