<script>
	import Input from '$lib/forms/auth-form/Input.svelte';

	let data = {
		value: '',
		name: 'name',
		type: 'text'
	};

	let value = '';
	let name = 'name';
	let type = 'text';

    const updateValue = (e) => {
        let val = e.target.value
        data.value = val
    };
</script>

<div class="w-3/4 h-1/4 grid place-items-center dark:bg-gray-900 rounded-xl px-6">
	<Input {...data} on:input={updateValue} />
</div>

