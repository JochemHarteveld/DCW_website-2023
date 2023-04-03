<script>
	import { onMount } from 'svelte';

	let prevBtn, nextBtn, book;
	let paper1, paper2, paper3, paper4;

	let currentLocation = 1;
	let numOfPapers = 4;
	let maxLocation = numOfPapers + 1;

	$: isOpen = 1 < currentLocation && currentLocation < maxLocation;

	onMount(() => {
		//References
		book = document.querySelector('#book');

		paper1 = document.querySelector('#p1');
		paper2 = document.querySelector('#p2');
		paper3 = document.querySelector('#p3');
		paper4 = document.querySelector('#p4');
	});

	function openBook() {
		book.style.transform = 'translateX(50%)';
		prevBtn.style.transform = 'translateX(-180%)';
		nextBtn.style.transform = 'translateX(180%)';
	}

	function closeBook() {}

	function goNextPage() {
		if (1 < currentLocation < maxLocation) {
			currentLocation++;
		}
	}

	function goPrevPage() {
		if (currentLocation > 0) {
			currentLocation--;
		}
	}
</script>

<div class="container">
	<!-- Button -->
	<button id="prev-btn" on:click={goPrevPage} style={isOpen ? 'transform: translateX(-200%)' : ''}>
		<img src="/icons/arrow-left-square.svg" alt="" />
	</button>

	<!-- Prev Book -->
	<div id="book" class="book" style={isOpen ? 'transform: translateX(50%)' : ''}>
		<!-- Paper 1 -->
		<div id="p1" class="paper {currentLocation > 1 ? 'flipped' : ''} ">
			<div class="front">
				<div id="f1" class="front-content">
					<h1>Front 1</h1>
				</div>
			</div>
			<div class="back">
				<div id="b1" class="back-content">
					<h1>Back 1</h1>
				</div>
			</div>
		</div>
		<!-- Paper 2 -->
		<div id="p2" class="paper {currentLocation > 2 ? 'flipped' : ''}">
			<div class="front">
				<div id="f2" class="front-content">
					<h1>Front 2</h1>
				</div>
			</div>
			<div class="back">
				<div id="b2" class="back-content">
					<h1>Back 2</h1>
				</div>
			</div>
		</div>
		<!-- Paper 3 -->
		<div id="p3" class="paper {currentLocation > 3 ? 'flipped' : ''}">
			<div class="front">
				<div id="f3" class="front-content">
					<h1>Front 3</h1>
				</div>
			</div>
			<div class="back">
				<div id="b3" class="back-content">
					<h1>Back 3</h1>
				</div>
			</div>
		</div>
		<!-- Paper 4 -->
		<div id="p4" class="paper {currentLocation > 4 ? 'flipped' : ''}">
			<div class="front">
				<div id="f4" class="front-content">
					<h1>Front 4</h1>
				</div>
			</div>
			<div class="back">
				<div id="b4" class="back-content">
					<h1>Back 4</h1>
				</div>
			</div>
		</div>
	</div>

	<!-- Next button -->
	<button id="next-btn" on:click={goNextPage} style={isOpen ? 'transform: translateX(200%)' : ''}>
		<img src="/icons/arrow-right-square.svg" alt="" />
	</button>
</div>

<style>
	.container {
		display: flex;
		background-color: aquamarine;
	}

	.book {
		position: relative;
		width: 350px;
		height: 500px;
	}

	.paper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		perspective: 1500px;
	}

	.front,
	.back {
		background-color: white;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		transform-origin: left;
		transition: all 500ms;
	}

	.front {
		z-index: 1;
		backface-visibility: hidden;
		border-left: 3px solid powderblue;
	}

	.back {
		z-index: 0;
	}

	.front-content,
	.back-content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.back-content {
		transform: rotateY(180deg);
	}

	/* Paper flip effect */
	.flipped .front,
	.flipped .back {
		transform: rotateY(-180deg);
	}


	/* Paper stack order */

	#p1 {
		z-index: 4;
	}

	#p1 .flipped {
		z-index: 1;
	}

	#p2 {
		z-index: 3;
	}

	#p2 .flipped {
		z-index: 2;
	}

	#p3 {
		z-index: 2;
	}

	#p3 .flipped {
		z-index: 3;
	}

	#p4 {
		z-index: 1;
	}

	#p4 .flipped {
		z-index: 4;
	}

	/* Controller button */

	button {
        flex: 1;
		border: none;
		background-color: transparent;
		cursor: pointer;
		margin: 10px;
	}

	button:focus {
		outline: none;
	}

	/* Change to i? */

	button:hover img {
		color: #636363;
	}
</style>
