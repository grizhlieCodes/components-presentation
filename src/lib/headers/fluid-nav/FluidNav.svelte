<script>
	import { fly } from 'svelte/transition';
	import BurgerMenu from './BurgerMenu.svelte';
	import NavModal from './NavModal.svelte';
	import MobileLink from './MobileLink.svelte';

	//Import an array of links, 
	//Each item in the array is the following object 
	//{	name: 'Home',path: '/',	smallName: 'home'}
	export let links = []

	let burgerMenuClicked = false;

	const handleBurgerClick = () => {
		burgerMenuClicked = !burgerMenuClicked;
	};

	let scrollY;
	$: fluidOn = scrollY > 0 ? true : false;

	let innerWidth
	$: desktopSize = innerWidth >= 950
</script>

<svelte:window bind:scrollY bind:innerWidth/>

<header
	class="transition-all w-full flex justify-between items-center dark:border-gray-700 
	
		{fluidOn && desktopSize

		? 'fixed translate-y-[2rem] bg-white max-w-[36rem] phone-wide:max-w-[42rem] tablet-small:max-w-[60rem] tablet:max-w-[72rem] tablet-wide:max-w-[80rem] px-16 rounded-full py-4 dark:bg-gray-900' 	
		
		: 'relative py-12 px-10 border-b-[1px] border-gray-200 max-w-[111rem]'
		}
	">

	<div class="h-[5rem]">
		<slot name="logo" />
	</div>

	<BurgerMenu {burgerMenuClicked} on:burgerClicked={handleBurgerClick} />

	{#if burgerMenuClicked}
		<NavModal>
			{#each links as link}
				<MobileLink {link} />
			{/each}
		</NavModal>
	{/if}
	<nav class="hidden sm:flex flex-row w-full justify-end items-center">
		{#each links as { path, name, smallName }}
			<a href={path} class="flex flex-row items-center justify-start gap-10">
				<p
					class="text-[1.5rem] text-gray-800 hover:bg-gray-200 dark:text-gray-300 px-8 py-4
					dark:hover:bg-gray-700 rounded-lg">
					{name}
				</p>
			</a>
		{/each}
	</nav>

</header>
