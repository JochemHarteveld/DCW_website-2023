<script>
	export let assignment;

	let showSchedule = false;

	function toggleSchedule() {
		showSchedule = !showSchedule;
	}

	function selectGroup(event) {
		console.log('Changed');
		console.log(event.target.value);
	}
</script>

<article>
	<h1>
		{assignment.daypart}
	</h1>
	<h2>{assignment.title}</h2>
	<div class="info">
		<li>Tijd: {assignment.startTime}</li>
		{#if assignment.endTime}
			<li>Deadline: {assignment.endTime}</li>
		{/if}
		{#if assignment.recommendedNumberOfParticipants}
			<li>Personen: {assignment.recommendedNumberOfParticipants}</li>
		{/if}
		{#if assignment.location}
			<li>Locatie: {assignment.location}</li>
		{/if}
		{#if assignment.deliverMethod}
			<li>Oplevering: {assignment.deliverMethod}</li>
		{/if}
		{#if assignment.compensation}
			<li>Vergoeding: {assignment.compensation}</li>
		{/if}
	</div>
	<p>
		{assignment.description}
	</p>
	<div class="requirements">
		{#if assignment.requirements != null}

			<ul class="requirements">
				{#each assignment.requirements as requirement}
					<li >{requirement}</li>
				{/each}
			</ul>
		{/if}
	</div>
	{#if assignment.daypart == "Woensdagavond"}
		<a href="https://forms.gle/3CTKQcN4sTi6uaSH8">Aanmelden</a>
	{/if}
	{#if assignment.schedule}
		<div class="controls">
			<button on:click={toggleSchedule}>{showSchedule ? 'Verberg schema' : 'Toon schema'}</button>
		</div>
		{#if showSchedule}
			
			<div class="schedule">
				<table>
					{#each assignment.schedule as row}
						<tr>
							{#each row as cell}
								<td>{cell}</td>
							{/each}
						</tr>
					{/each}
				</table>
			</div>
		{/if}
	{/if}
</article>

<style>
	article {
		padding-left: 15px;
		padding-bottom: 25px;
		border-bottom: 2px solid var(--ink-color);
	}

	h1 {
		padding: 20px 0;
	}
	h2 {
		padding: 10px 0;
		font-weight: bold;
	}
	h4 {
		margin-bottom: 20px;
	}
	.info,
	.requirements {
		margin: 10px;
	}
	.info li {
		font-weight: bold;
		color: var(--ink-color);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
	}

	.schedule {
		overflow-x: auto;
	}

	th,
	td {
		border: 1px solid black;
		font-size: 0.8em;
		padding: 2px;
	}

	.controls {
		margin: 16px 0;
	}

	button,
	select, a {
		background-color: var(--ink-color);
		color: var(--background-color);
		padding: 10px;
		border: none;
	}

	.requirements{
		
	}

	@media screen and (min-width: 600px) {
		article {
			margin-bottom: 10px;
		}
	}
</style>
