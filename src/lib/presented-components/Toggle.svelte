<script>
	import Toggle from '$lib/toggles/Toggle.svelte';
    import DarkMode from '$lib/stores/darkMode.js';
	import {onMount } from 'svelte';

	onMount(() => {
		DarkMode.checkDarkmode();
	})

	$: darkmodeToggled = $DarkMode;

	const toggleDarkmode = (e) => {
		const toggleName = e.detail;
		darkmodeToggled = !darkmodeToggled;
        DarkMode.toggleDarkmode()
	};
</script>

<style>

</style>

<Toggle name="darkmodeToggle" toggledState={darkmodeToggled} on:toggled={toggleDarkmode} />
