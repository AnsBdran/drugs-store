<script>
	import { createLinks } from '$lib';
</script>

<ul class="menu">
	{#each createLinks as link}
		<li>
			<a href={`/dashboard/create/${link.href}`}
				><svelte:component this={link.icon} /> {link.title}</a
			>
		</li>
	{/each}
</ul>
