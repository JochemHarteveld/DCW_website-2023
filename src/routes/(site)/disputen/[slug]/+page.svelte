<script>
	export let data;
</script>

<div class="container">
	{#if data.title}
		<h1>{data.title}</h1>
	{/if}
	<div class="text">{@html data.content}</div>
</div>

<style>
    .container{
        margin: 2rem;
		padding: 2rem;
		border: 1px solid black;
        max-width: 900px;
        margin: auto;
        margin-top: 2rem;

    }

    h1{
        margin-bottom: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.458) ;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.415);
        padding: 10px;
    }
	.text {
		font-family: 'Courier Prime', monospace;
        column-count: 2;
	}
</style>
