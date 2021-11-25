<script>
	import MultipleInputs from '$lib/inputs/materialInputs/filledTextField/MultipleInputs.svelte';
	
	let inputsArray = [
		{
			name: 'email',
			type: 'email',
			placeholder: ' ',
			label: 'Email',
			value: '',
			valid: true,
			errorMessage: '',
			// helpText: '',
			helpText: 'Required *',
		},
		{
			name: 'password',
			type: 'password',
			placeholder: ' ',
			label: 'Password',
			value: '',
			valid: true,
			errorMessage: '',
			// maxLength: 100,
			maxLength: 25,
			helpText: 'Required *',
		},
		{
			name: 'username',
			type: 'text',
			placeholder: ' ',
			label: 'Username',
			value: '',
			valid: true,
			errorMessage: '',
			// maxLength: 100,
			maxLength: 15,
			helpText: 'Required *',
		}
	]

	let localData; // we bind this component to the data component in the child.
</script>

<!-- 
	Validated themselves without my further input 
	Update all the data by themselves
	So they can send a final 'dataObject' to the parent
-->

<MultipleInputs {inputsArray} bind:dataToSend={localData}/>

<style>

</style>
