<script>
	export let data;
</script>

<div class="container">
	{#if data.title}
		<h1>{data.title}</h1>
	{/if}
	<div class="text">{@html data.content || "Yeet"}</div>
</div>

<style>
   .container {
		height: 100%;
		margin-left: 15px;
		border-left: 2px solid var(--ink-color);
	}


    h1{
        margin-bottom: 1rem;
        border-top: 2px solid var(--ink-color);
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.415);
        padding: 10px;
    }
	.text {
		font-family: 'Courier Prime', monospace;
        padding: 0 10px;
        padding-bottom: 25px;
	}
</style>
