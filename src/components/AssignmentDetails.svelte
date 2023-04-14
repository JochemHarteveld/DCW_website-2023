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
	<!-- <div class="requirements">
        {#each assignment.requirements as requirement}
            <li>{requirement}</li>
        {/each}
    </div> -->
	{#if assignment.schedule}
		<div class="controls">
			<button on:click={toggleSchedule}>{showSchedule ? 'Verberg schema' : 'Toon schema'}</button>
		</div>
		{#if showSchedule}
			<select name="disputen" id="disputen" on:change={selectGroup}>
				<option value="all">Alle disputen</option>
				<option value="mocca">M.O.C.C.A</option>
				<option value="taenia">T.A.E.N.I.A.</option>
				<option value="lucifer">L.U.C.I.F.E.R.</option>
				<option value="soixante-neuf">L.D.G. Soixante-Neuf</option>
				<option value="corduroy">Corduroy</option>
				<option value="9X7">9X7</option>
				<option value="bokkerijders">Bokkerijders</option>
				<option value="kinkid">K.I.N.K. ID</option>
				<option value="bloq">BLOQ</option>
				<option value="witte-wieven">Witte Wieven</option>
				<option value="zephyr">Zephyr</option>
				<option value="zoutkorrel">Zoutkorrel</option>
				<option value="terra-f">Terra F.</option>
				<option value="volante">Volante</option>
				<option value="amaryllis">Amaryllis</option>
				<option value="kobra">K.O.B.R.A.</option>
				<option value="perropates">Perropates</option>
				<option value="vinum">VINUM</option>
				<option value="supra-modum">Supra Modum</option>
				<option value="cupa">C.U.P.A.</option>
			</select>
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

	button, select {
		background-color: var(--ink-color);
		color: var(--background-color);
		padding: 10px;
		border: none;
	}

	@media screen and (min-width: 600px) {
	
		article {
			margin-bottom: 10px;
		}
	}
</style>
