<script>
	import Footer from '../../components/Footer.svelte';
	import Navigation from '../../components/Navigation.svelte';

</script>


<div class="nav">
	<Navigation />
</div>

<div class="container">
	
	<div class="slot">
		<slot />
	</div>

</div>
<!-- <Footer></Footer> -->


<style>
	@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	:root{
		--ink-color: #473e2c;
		--primary-color: #9a221e;
	}

	.container{
		margin: 1rem;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;		
		font-family: 'Courier Prime', monospace;
	}

	:global(body) {
		height: 100vh;
		max-width: 100vw;
		font-family: sans-serif;
		background: url(/newspaper.jpg);
		object-fit: cover;
	}

	:global(html) {
		height: 100vh;
		width: 100vw;
	}

	:global(h1, h2, h3, h4, h5, h6, p, a){
		color: var(--ink-color);
	}

	:global(a){
		line-height: 20px;
	}



	.nav{
		margin: 2rem 1rem;
	}

	@media screen and (max-width: 600px) {
		.nav{
			margin: 0;
		}
	}

	
</style>
