<script>
	import '../app.css';
	import Header from '../ui/header.svelte';
	import Footer from '../ui/footer.svelte';
</script>

<div class="flex min-h-screen flex-col justify-between">
	<Header></Header>
	<main class="pt-[84px]">
		<slot></slot>
	</main>
	<Footer _class="mt-auto"></Footer>
</div>
