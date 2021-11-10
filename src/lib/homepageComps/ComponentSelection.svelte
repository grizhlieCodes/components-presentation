<script>
    export let showThisComponent, selectedComponent;
</script>

<div class="flex-grow flex flex-col min-h-[110vh] w-full items-center justify-center ">
	{#if showThisComponent !== ''}
		<svelte:component this={selectedComponent} />
	{/if}
</div>
