<script>
	import disputen from '../../../disputen';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

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

<style>
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
        height: 100%;
        padding: 10px;
		margin-left: 15px;
		margin-right: 15px;
		border-left: 2px solid var(--ink-color);
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
</style>
