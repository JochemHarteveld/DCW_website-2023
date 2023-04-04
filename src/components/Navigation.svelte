<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';

</script>

<img src="{base}/icons/dcw-cropped.svg" alt="">
<nav>
	<a href="{base}/" class:active={$page.url.pathname == "/"}>
		<p>HOME</p>
	</a>
	<a href="{base}/planning" class:active={$page.url.pathname == "/planning"}>
		<p>PLANNING</p>
	</a>
	<a href="{base}/jokers" class:active={$page.url.pathname == "/jokers"}>
		<p>JOKERS</p></a
	>
	<a href="{base}/tussenstand" class:active={$page.url.pathname == "/tussenstand"}>
		<p>SCOREBORD</p>
	</a>
	<a href="{base}/disputen" class:active={$page.url.pathname == "/disputen"}>
		<p>DISPUTEN</p>
	</a>
	<div class="space">
		
	</div>
</nav>

<style>
	.active{
		border-left: 2px solid var(--ink-color);
		border-right: 2px solid var(--ink-color);
		font-weight: bold;
		color: brown;
	}

	nav {
		display: flex;
		align-items: center;
		border-top: 2px solid var(--ink-color);
		border-bottom: 2px solid var(--ink-color);
		margin-left: 40px;
	}

	a {
        text-align: center;
        text-decoration: none;
        color: var(--ink-color);
        flex: 1;
		transition: all 0.3s ease;
		padding: 20px;
	}

	img{
		position: absolute;
		height: 80px;
		top: 20px;
		background-color: brown;
		border-radius: 50%;
	}


</style>
