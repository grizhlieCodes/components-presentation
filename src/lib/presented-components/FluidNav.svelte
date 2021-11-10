<script>
    import FluidNav from "$lib/headers/fluid-nav/FluidNav.svelte";


	let links = [
		{
			name: 'Home',
			path: '/',
			smallName: 'home'
		},
		{
			name: 'About',
			path: '/about',
			smallName: 'about'
		},
		{
			name: 'Services',
			path: '/services',
			smallName: 'services'
		}
	];

</script>

<FluidNav {links}>
    <img src="/logo.png" alt="" slot="logo" class="h-full" />
</FluidNav>

<style>
    
</style>