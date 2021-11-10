<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
    import Label from './CheckboxLabel.svelte'

	export let checkboxData

	$: name = checkboxData.name || 'checked'
	$: displayName = checkboxData.displayName || 'Check'
	$: checked = checkboxData.checked || false
	$: label = checkboxData.label || true

	$: console.log(checkboxData.checked)

	const handleClick = () => {
		dispatch('checked', name);
	};
</script>


<button
	class="flex gap-4 items-center hover:scale-105 transition-transform cursor-pointer tab outline-none border-none"
	tabindex="0"
	on:click={handleClick}
	aria-checked={checked}>

    <Label {label} {checked} {displayName} />

	<div
		class="w-7 h-7 {checked ? 'bg-teal-500' : 'bg-gray-300 dark:bg-gray-500 '} rounded-md grid
		place-items-center transition-all ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 13l4 4L19 7"
				class=" stroke-current transition-all origin-center {checked ? 'text-white rotate-[360deg]' : 'text-transparent rotate-0'}
				" />
		</svg>
	</div>

</button>

<style>

</style>
