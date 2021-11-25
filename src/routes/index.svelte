<script>
	import AuthForm from '$lib/presented-components/AuthForm.svelte';
	import Checkbox from '$lib/presented-components/Checkbox.svelte';
	import FluidNav from '$lib/presented-components/FluidNav.svelte';
	import Toggle from '$lib/presented-components/Toggle.svelte';
	import Input from '$lib/presented-components/Input.svelte';
	import SizeObserver from '$lib/presented-components/SizeObserver.svelte';
	import MaterialInput from '$lib/presented-components/MaterialInput.svelte';
	import MultipleInputs from '$lib/presented-components/MultipleInputs.svelte';
	
	//Data for components
	import { buttonsData } from '$lib/dataScripts/buttonsData.js';

	//Main Page Components
	import Menu from '$lib/homepageComps/Menu.svelte';
	import ComponentSelection from '$lib/homepageComps/ComponentSelection.svelte';

	const components = {
		authform: { component: AuthForm},
		checkbox: { component: Checkbox},
		fluidheader: { component: FluidNav},
		input: { component: Input},
		toggle: { component: Toggle},
		sizeobserver: { component: SizeObserver},
		materialinput: { component: MaterialInput},
		multipleinputs: { component: MultipleInputs}
	};

	let showThisComponent = 'materialinput'; //Change this to empty as default.
	$: selectedComponent = showThisComponent !== '' ? components[showThisComponent].component : '';

	const updateShowThisComponent = (e) => {
		let event = e.detail;
		let componentName = event.target.closest('button').dataset.name;
		showThisComponent = componentName;
	};
</script>

<div id="components-container" class="w-full h-full">

	<Menu
		on:toggleUpdateShowThisComponent={updateShowThisComponent}
		{showThisComponent}
		{buttonsData} />
	
	<ComponentSelection 
		{showThisComponent} 
		{selectedComponent} />

</div>

<style>
	#components-container {
		display: grid;
		grid-template-columns: max-content 1fr;
	}
</style>
