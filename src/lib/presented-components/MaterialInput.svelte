<script>
	import MaterialInput from '$lib/inputs/materialInputs/filledTextField/TextInput.svelte';

	const dataExampleForBelowExports = {
		name: 'name',
		type: 'text',
		placeholder: ' ',
		label: 'Name',
		value: '',
		valid: true,
		errorMessage: '',
		helpText: 'Required *'
	};

	let input = {
		name: 'name',
		type: 'text',
		placeholder: ' ',
		label: 'Name',
		value: '',
		valid: true,
		errorMessage: '',
		helpText: 'Required *', //Change this to '' if you want to hide help text
		// helpText: '',
		// maxLength: 100,
		maxLength: 20
	};

	let dataToSend = { name: '' }; //just for test purposes

	const isEmpty = (val) => {
		return val.trim().length === 0;
	};

	const updateInputValidity = (inputEmpty) => {
		if (inputEmpty) {
			input.valid = false;
			input.errorMessage = "Can't be empty.";
		} else {
			input.valid = true;
			input.errorMessage = '';
		}
	};

	const updateInputdata = (inputValue, inputName) => {
		dataToSend[inputName] = inputValue;
		input.value = inputValue;
	};

	const handleInput = (e) => {
		let element = e.target;
		let inputValue = element.value;
		let inputName = element.dataset.name;
		let inputEmpty = isEmpty(inputValue);
		updateInputValidity(inputEmpty);
		updateInputdata(inputValue, inputName);
	};
</script>

<MaterialInput {...input} on:input={handleInput} />

<style>

</style>
