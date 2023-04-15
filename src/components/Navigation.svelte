<script>
	import { page } from '$app/stores';
	let menuOpen = false;
	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	const links = [
		{ label: 'HOME', route: '/' },
		{ label: 'PLANNING', route: '/planning' },
		{ label: 'DISPUTEN', route: '/disputen' },
		{ label: 'JOKERS', route: '/jokers' },
		{ label: 'SCOREBORD', route: '/tussenstand' },
		{ label: 'REGELS', route: '/regels' }

	];
</script>

<div class="topnav {menuOpen ? 'responsive' : ''}">
	<!-- Logo hier -->

	
	{#each links as link}
		<a
			href={link.route}
			class="link {$page.route.id.split('/')[2] == link.route.split('/')[1] ? 'active' : ''}"
			>{link.label}</a
		>
	{/each}
	<a href="#" class="icon " on:click={toggleMenu}>
		<!-- <i class="fa fa-bars" /> -->
		<div id="nav-icon3" class="{menuOpen ? "open" : ""}">
			<span />
			<span />
			<span />
			<span />
		</div>
	</a>
</div>

<style>
	.topnav {
		position: relative;
		overflow: hidden;
		border-top: 2px solid var(--ink-color);
		border-bottom: 2px solid var(--ink-color);
	}

	/* Style the links inside the navigation bar */
	.topnav a {
		float: left;
		display: block;
		text-align: center;
		text-decoration: none;
		transition: all 300ms ease;
	}

	.link {
		padding: 14px 16px;
		font-size: .9em;
	}

	/* Change the color of links on hover */
	.topnav a:hover {
		background-color: rgba(0, 0, 0, 0.08);
		color: black;
	}

	/* Add an active class to highlight the current page */
	.topnav a.active {
		border-left: 1px solid var(--ink-color);
		border-right: 1px solid var(--ink-color);
		background-color: var(--primary-color);
		color: white;
	}

	.topnav .logo {
		display: grid;
		place-items: center;
	}

	.topnav .logo img {
		height: 30px;
	}

	/* Hide the link that should open and close the topnav on small screens */
	.topnav .icon {
		display: none;
	}

	/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
	@media screen and (max-width: 600px) {
		.topnav {
			justify-content: space-between;
		}

		.topnav a:not(:first-child) {
			display: none;
		}
		.topnav a.icon {
			float: right;
			display: block;
		}
	}

	/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
	@media screen and (max-width: 600px) {
		.topnav {
			position: relative;
		}
		.topnav a.icon {
			position: absolute;
			right: 0;
			top: 0;
		}
		.topnav.responsive a {
			float: none;
			display: block;
			text-align: left;
		}
	}

	/* hamburger */

	#nav-icon3 {
		width: 32px;
		height: 26px;
		position: relative;
		margin: 11px 14px;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.5s ease-in-out;
		-moz-transition: 0.5s ease-in-out;
		-o-transition: 0.5s ease-in-out;
		transition: 0.5s ease-in-out;
		cursor: pointer;
	}

	#nav-icon3 span {
		display: block;
		position: absolute;
		height: 5px;
		width: 100%;
		background: var(--primary-color);
		border-radius: 5px;
		opacity: 1;
		left: 0;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-transition: 0.25s ease-in-out;
		-moz-transition: 0.25s ease-in-out;
		-o-transition: 0.25s ease-in-out;
		transition: 0.25s ease-in-out;
	}

	/* Icon 3 */

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 10px;
}

#nav-icon3 span:nth-child(4) {
  top: 22px;
}

#nav-icon3.open span:nth-child(1) {
  top: 10px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 10px;
  width: 0%;
  left: 50%;
}
</style>
