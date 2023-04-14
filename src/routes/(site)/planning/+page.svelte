<script>
	import AssignmentDetails from '../../../components/AssignmentDetails.svelte';
	import { assignments } from './assignments';

	let selectedGroup = "";

</script>

<div class="container">
	{#each assignments as assignment}
		<AssignmentDetails {assignment} />
	{/each}
</div>

<style>
	.container {
		height: 100%;
		margin-left: 15px;
		margin-right: 15px;
		border-left: 2px solid var(--ink-color);
	}

	@media screen and (min-width: 600px) {
		.container {
			border-top: 2px solid var(--ink-color);
			border-right: 2px solid var(--ink-color);
            max-width: 720px;
            margin: auto;
		}
		article {
            border-top: 2px solid var(--ink-color);
			margin-bottom: 10px;
		}
	}
</style>
