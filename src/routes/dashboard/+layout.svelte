<script>
	import { dashboardLinks } from '$lib';
	import { Link, MessageSquareQuote, Pill, Settings2, SquarePlus } from 'lucide-svelte';
	import { SvelteComponent } from 'svelte';
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle hidden" />
	<div class="drawer-content lg:pl-56">
		<!-- Page content here -->
		<h1>Dashboard</h1>
		<slot />
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu fixed bottom-0 top-[64px] w-56 bg-base-300 text-base-content">
			{#each dashboardLinks as link}
				<li>
					<a href={`/dashboard/${link.href}`}><svelte:component this={link.icon} /> {link.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
<section class="container"></section>
