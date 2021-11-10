<script>
    export let label, checked, displayName
</script>

{#if label}
	<p
		class="text-[1.5rem] transition-colors {checked ? 'text-gray-700 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'}">
		{displayName}
	</p>
{:else}
	<span class="sr-only">{displayName}</span>
{/if}

<style>

</style>
