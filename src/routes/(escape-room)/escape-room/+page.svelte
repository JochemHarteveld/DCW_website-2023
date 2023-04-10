<script>
	import { onMount } from 'svelte';

	let deny_sound;
	let accept_sound;
	let guess = ['', '', '', '', '', '', ''];
	let answer = ['41', '43', '55', '49', '56', '45'];
	let wrong_guess = false;
    let accepted = false;

	onMount(() => {
		deny_sound = new Audio('sounds/Panel Admin Card Deny.mp3');
		accept_sound = new Audio('/sounds/Task Complete.mp3');
	});

	function submit() {
		let all_correct = true;

		for (let i = 0; i < answer.length; i++) {
			if (guess[i] !== answer[i]) {
				all_correct = false;
				break;
			}
		}

		if (all_correct) {
			accept_sound.play();
            accepted = true;
		} else {
			deny_sound.play();
			wrong_guess = true;
			setTimeout(() => {
				wrong_guess = false;
			}, 1000);
		}
	}
</script>

<div class="background">
	{#if wrong_guess}
		<div class="error-overlay">
			<h2>ERROR!</h2>
		</div>
	{/if}
    {#if accepted}
    <div class="accept-overlay" on:click={() => accepted = false}>
        <h2>Noodsignaal verzonden!</h2>
    </div>
    {/if}
	<div class="fields">
		<div class="longitude">
			<input type="text" bind:value={guess[0]} />
			<h1>°</h1>
			<input type="text" bind:value={guess[1]} />
			<h1>'</h1>
			<input type="text" bind:value={guess[2]} />
			<h1>"N</h1>
		</div>
		<div class="latitude">
			<input type="text" bind:value={guess[3]} />
			<h1>°</h1>
			<input type="text" bind:value={guess[4]} />
			<h1>'</h1>
			<input type="text" bind:value={guess[5]} />
			<h1>"</h1>
		</div>
	</div>
	<div class="button-wrap">
		<button on:click={submit}> Verzend noodsignaal </button>
	</div>
</div>

<style>
	input,
	button {
		background-color: rgba(251, 244, 188, 0.736);
		border: 5px solid black;
		border-radius: 10px;
	}

	input {
		font-size: 4em;
		padding-left: 6px;
		width: 120px;
		font-weight: bold;
	}

	input:focus {
		outline: none;
	}

	.fields {
		padding: 10rem 0;
		margin: auto 0;
		display: flex;
		justify-content: space-around;
	}

	.longitude,
	.latitude {
		display: flex;
	}

	button {
		font-size: 4em;
		font-weight: bold;
		cursor: pointer;
		transition: all 300ms ease;
		padding: 1rem;
	}

	button:hover {
		background-color: rgba(223, 208, 108, 0.649);
	}

	.button-wrap {
		width: 100%;
		text-align: center;
	}

	h1 {
		font-size: 4em;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Courier Prime', monospace;
	}

	:global(body) {
		background: url(/images/escape-room-wallpaper.jpg) no-repeat center center fixed;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}

	.error-overlay, .accept-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		font-weight: bold;
		color: white;
	}

    .error-overlay{
		background-color: rgba(255, 0, 0, 0.5); /* semi-red/transparent */
    }

    .accept-overlay{
		background-color: rgba(0, 255, 13, 0.5); /* semi-red/transparent */
    }
</style>
