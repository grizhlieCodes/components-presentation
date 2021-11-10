<script>
	export let formStateSignUp,
		name = 'fix',
		image;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const handleClick = (e) => {
		let el = e.target.closest('button');
		let optionName = el.dataset.name;
		dispatch('otherSignInOptionClicked', `${optionName}`);
	};
</script>

<button
	type="button"
	class="outline-none px-8 py-8 w-full border-[0.1rem] border-gray-300 bg-gray-50 dark:bg-gray-900
	rounded-lg flex gap-4 items-center text-[1.8rem] max-w-[28rem] focus:scale-105 hover:scale-105
	transition-all text-center justify-center focus:border-4 focus:border-indigo-500
    
    dark:border-[0.1rem] dark:border-gray-400
	dark:text-gray-100 dark:focus:border-4 dark:focus:border-indigo-600 dark:hover:border-4
	dark:hover:border-indigo-400 "
	data-name={name}
	on:click={handleClick}>
	<img src={image} alt="" class="w-[3rem] " />
	<p class="">{formStateSignUp ? 'sign up' : 'sign in'} with {name}</p>
</button>

<style>

</style>
