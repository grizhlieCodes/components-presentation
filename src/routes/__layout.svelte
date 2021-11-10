<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import DarkMode from '$lib/stores/darkMode.js';

	onMount(() => {
		DarkMode.checkDarkmode();
	});


</script>

<slot />
