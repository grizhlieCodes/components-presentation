<script>
	import Checkbox from '$lib/inputs/checkbox/Checkbox.svelte';
	let checkboxData = {
		name: 'test-checkbox',
		displayName: 'Subscribe',
		checked: false,
		label: true
	};

	const toggleChecked = (e) => {
		checkboxData.checked = !checkboxData.checked;
	};
</script>

<Checkbox {checkboxData} on:checked={toggleChecked} />
