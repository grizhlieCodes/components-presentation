<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let name,
		toggledState = false,
		description = 'toggle for something';
	
	const dispatchToggle = () => {
		dispatch('toggled', name); //'dmToggle'
	};

	export function handle(compObject){
		let name = 'toggle'
		console.trace(compObject[name].props)
		compObject[name].props.toggledState  = !compObject[name].props.toggledState 
		console.trace(compObject[name].props)
	}

</script>

<button
	class="w-[7.4rem]
	h-[3.8rem] rounded-full cursor-pointer border-2 border-l-[4px] border-transparent flex items-center
	transition-colors duration-200 ease-in-out {!toggledState ? 'bg-teal-400' : 'bg-teal-700'}
	
	"
	role="switch"
	tabindex="0"
	aria-checked="{toggledState}"
	on:click={dispatchToggle}>
	<span class="sr-only">{description}</span>
	<span
		class="
		w-[3.4rem]
		h-[3.4rem] bg-white rounded-full transition inline-block duration-200 ease-in-out {!toggledState ? 'translate-x-0' : 'translate-x-[3.5rem]'}" />
</button>
