<script>
	import disputen from '../../../disputen';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div class="container">
	<div class="list">
		{#each disputen as dispuut}
			<div class="list-item">
				<a href="{base}{dispuut.dispuutPath}">
					<!-- <p>{dispuut.name}</p> -->
					<img
						class="cover"
						class:active={$page.url.pathname == dispuut.dispuutPath}
						src="{base}{dispuut.logoUrl}"
						alt=""
					/>
				</a>
			</div>
		{/each}
	</div>
	<slot />
</div>

<style>
	.container {
		min-height: 100vh;
		height: 100%;
		border-left: 2px solid var(--ink-color);
		margin: 0 15px;
	}

	.list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		padding: 10px;
	}

	.cover {
		object-fit: contain;
		height: 60px;
		width: 60px;
		padding: 5px;
		border: 3px double var(--ink-color);
	}

	.active {
		border: 3px solid var(--ink-color);
	}

	@media screen and (min-width: 600px) {
		.container {
			border-top: 2px solid var(--ink-color);
			border-right: 2px solid var(--ink-color);
		}
		.list {
			grid-template-columns: repeat(10, 1fr);
		}
	}

	@media screen and (min-width: 1200px) {

		.list {
			grid-template-columns: repeat(20, 1fr);
		}
	}
</style>
