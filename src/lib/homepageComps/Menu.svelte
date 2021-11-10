<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let buttonsData = [],
		showThisComponent;

	const toggleUpdateShowThisComponent = (e) => {
		dispatch('toggleUpdateShowThisComponent', e);
	};
    //Sidebar toggle
    let sidebarToggled = false;
	const toggleSidebar = (e) => {
		if (e.target.id === 'left') sidebarToggled = !sidebarToggled;
	};
</script>

<div
	id="left"
	class="w-[3rem] border-r-[0.1rem] border-gray-300 dark:border-gray-700 flex flex-col align-center justify-center gap-6
	hover:w-[30rem] transition-all overflow-hidden h-full {sidebarToggled ? 'w-[30rem] bg-gray-100 dark:bg-gray-900 ' : ''}"
	on:click={toggleSidebar}>
	{#each buttonsData as { name, data }}
		<button
			data-name={data}
			class=" text-3xl hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600
			transition-all {showThisComponent === data ? 'text-orange-600' : 'text-gray-400 dark:text-gray-400'}"
			on:click={toggleUpdateShowThisComponent}>
			{name}
		</button>
	{/each}
</div>
