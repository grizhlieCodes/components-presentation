<script>
	import Input from './Input.svelte';
	import { fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import FinalButton from './FinalButton.svelte';
	import OtherSignInOption from './OtherSignInOption.svelte';
	export let formData;

	$: console.log(formData);
	//Defaults Form Inputs Data
	const formInputs = formData.formInputs;
	//Form Other Sign ins
	const thirdPartyOptions = formData.thirdPartyOptions;

	//Data
	let formInputValues = {};

	formInputs.forEach((i) => {
		formInputValues[i.name] = '';
	});

	//State
	let formStateSignUp = true;

	const submitForm = (e) => {
		let data = { ...formInputValues };
		//Once you sign up/in we dispatch the data + the state of sign up/in
		dispatch('authFormSubmitted', { ...data, formStateSignUp });
	};

	//Update data on input
	const updateValues = (e) => {
		let inputEl = e.target;
		let value = inputEl.value;
		let name = `${inputEl.dataset.name}`;
		formInputValues[name] = value;
	};

	const toggleFormStateSignUp = () => {
		formStateSignUp = !formStateSignUp;
	};

	const handleThirdPartySignIn = (e) => {
		const optionSelected = e.detail; //'github' or 'google' or 'other option'
		dispatch('thirdPartySignIn', `${optionSelected}`);
	};
</script>

{#if formData && formData.formInputs.length}

	<form
		transition:fly={{ duration: 300, x: 300 }}
		action="submit"
		autocomplete="off"
		class=" w-11/12 max-w-[43rem] bg-gray-50 dark:bg-gray-900 dark:border-[0.1rem]
		dark:border-gray-900 flex flex-col items-center justify-center py-28 px-8 rounded-lg gap-[5rem]
		shadow-lg"
		on:submit|preventDefault={submitForm}>

		{#each thirdPartyOptions as option}
			<OtherSignInOption
				{formStateSignUp}
				{...option}
				on:otherSignInOptionClicked={handleThirdPartySignIn} />
		{/each}

		<div class="h-[0.1rem] w-full bg-gray-200 dark:bg-gray-600" />

		{#each formInputs as input}
			<Input {...input} on:input={updateValues} />
		{/each}

		<div id="buttons-container" class="flex flex-col gap-8 w-full max-w-[28rem] phablet:flex-row">
			<FinalButton type="submit" {formStateSignUp} />
			<FinalButton type="toggle" {formStateSignUp} on:toggleState={toggleFormStateSignUp} />
		</div>
	</form>
{/if}
