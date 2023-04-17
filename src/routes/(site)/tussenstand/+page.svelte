<script>
	import disputen from '../../../disputen';
</script>

<div class="container">
	<h1>SCOREBORD</h1>
	<div class="list">
		{#each disputen as dispuut, index}
			<div class="item {index == 0 ? 'first' : '' } {index==1 ? 'second':''} {index==2 ? 'third':''}">
				<h3 class="position">{index + 1}.</h3>
				<h2 class="dispuut-name">{dispuut.name}</h2>
				<h4 class="score">
					{dispuut.score}
				</h4>
			</div>
		{/each}
	</div>
</div>

<style>
	.list {
        max-width: 600px;
        margin: auto;
		border: 3px double var(--ink-color);
	}

	h1 {
		text-align: center;
		margin: 10px;
	}

	.item {
		height: 60px;
		border: 2px dotted var(--ink-color);
		margin: 12px;
		display: flex;
		gap: 4px;
	}

	.position {
		padding: 10px;
		display: flex;
		align-items: center;
	}

	.dispuut-name {
		font-size: 1.2em;
		flex-grow: 3;
		text-align: left;
		border-left: 2px dotted var(--ink-color);
		display: flex;
		align-items: center;
		padding-left: 5px;
	}

	.score {
		border-left: 2px dotted var(--ink-color);
		min-width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.first {
		border: 6px double;
	}

    .second{
        border: 2px solid;
    }

    .third{
        border: 3px dashed;
    }
</style>
