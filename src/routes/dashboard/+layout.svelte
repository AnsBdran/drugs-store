<script>
	import { MessageSquareQuote, Pill, Settings2, SquarePlus } from 'lucide-svelte';
</script>

<div class="drawer lg:drawer-open">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
			<li><a href="/dashboard/create"><SquarePlus width={50} /> Create new</a></li>
			<li><a href="/dashboard/edit"><Settings2 width={5} /> Edit items</a></li>
			<li><a href="/dashboard/requests"><Pill /> Drug requests</a></li>
			<li><a href="/dashboard/messages"><MessageSquareQuote /> Messages</a></li>
		</ul>
	</div>
</div>
<section class="container">
	<h1>Dashboard</h1>

	<slot />
</section>
