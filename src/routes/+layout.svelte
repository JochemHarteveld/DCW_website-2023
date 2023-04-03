<script>
	import Banner from '../components/Banner.svelte';
import Navigation from '../components/Navigation.svelte';
</script>

<div class="container">
	<div class="media">
		<a href="https://www.instagram.com/dcw_2023/">
			<img src="/icons/Instagram.png" alt="" />
			<p>@dcw_2023</p>
		</a>

		<div class="email">
			<a href="">
				<img src="/icons/email.png" alt="" />
				<p>dcw@ssr-leiden.nl</p>
			</a>
		</div>
		<!-- <a href="/trek-een-bak">
			<img src="/icons/whatsapp.png" alt="" />
			<p>Whatsapp</p>
		</a> -->
	</div>
	<Banner></Banner>
	<div class="slot">
		<slot />
	</div>

	<div class="nav">
		<Navigation />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

	.media {
		margin: 2rem 0;
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		border-bottom: 1px solid black;
		border-top: 1px solid black;

	}

	.media p {
		margin: auto;
		margin-left: 1rem;
	}

	a{
		display: flex;
		padding: 1rem;
		text-decoration: none;
		color: black;

	}

	.slot {
		min-height: 100vh;
	}

	.nav {
		position: sticky;
		bottom: 0;
		width: 100%;
		bottom: 0;
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
		background-color: #fff8ea;
	}

	:global(html){
		height: 100vh;
		width: 100vw;
	}

	img {
		height: 24px;
	}
</style>
