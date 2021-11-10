<script>
	export let value = '',
		name = '',
		type = 'text';
</script>



<label for="{type}-input" class="relative group text-[1.8rem] w-full max-w-[28rem]">

	<input
		data-name={name}
		{type}
		{value}
		on:input
		id="{type}-input"
		name="{type}-input"
		placeholder=" "
		class="px-8 py-8 placeholder-gray-400::placeholder w-full bg-gray-50 dark:bg-gray-900 rounded-lg outline-none
		transition-all border-[0.1rem] border-gray-300 dark:border-gray-600 group-focus-within:border-4
		group-focus-within:border-indigo-500 dark:group-focus-within:border-indigo-400 caret-auto dark:caret-gray-50 text-gray-600 dark:text-gray-50" />
	<p
		class="bg-gray-50 dark:bg-gray-900 absolute left-8 top-10 -translate-y-1/4 transition-all text-left
		group-focus-within:translate-y-[-4.2rem] group-focus-within:text-[1.1rem] group-focus-within:left-4 text-gray-400
		group-focus-within:text-gray-400 group-focus-within:opacity-0.5 outline-none border-0
		group-focus-within:p-4">
		{name}
	</p>
</label>

<style>
    input:not(:placeholder-shown):not(:focus-within) {
        border: 0.1rem solid rgba(107, 114, 128, 1);
    }
	input:not(:placeholder-shown) ~ p {
		transform: translate(0, -4.2rem);
        font-size: 1.1rem;
        padding: 1rem;
        left: 1rem;
	}
</style>