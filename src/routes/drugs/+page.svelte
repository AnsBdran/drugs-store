<script>
	import { drugItems } from '$lib/mock-data';
	import DrugCard from '../../ui/drug-card.svelte';
</script>

<section class="container">
	<h1>All available drugs</h1>
	<ul
		class="md:gap-8+ grid grid-cols-1 justify-items-stretch gap-4 pt-12 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
	>
		{#each drugItems.slice(0, 20) as drug}
			<DrugCard {drug} />
		{/each}
	</ul>
</section>
