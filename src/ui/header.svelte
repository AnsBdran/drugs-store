<script>
	import { navLinks } from '$lib';
	import ThemeSwitcher from './theme-switcher.svelte';
	import { onMount } from 'svelte';

	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<header class="drawer glass z-10">
	<input type="checkbox" class="drawer-toggle" id="my-drawer-3" />
	<section class="drawer-content flex flex-col">
		<div class="navbar w-full bg-base-300">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path></svg
					>
				</label>
			</div>
			<span class="mx-2 flex-1 px-2 text-2xl font-semibold tracking-wide"
				><a href="/">Store</a></span
			>
			<div class=" hidden flex-none lg:flex">
				<ul class="menu menu-horizontal items-center">
					{#each navLinks as navLink}
						<li><a href={navLink.href}>{navLink.title}</a></li>
					{/each}
				</ul>
			</div>
			<section class="ml-4 flex flex-none items-center space-x-3">
				<input type="text" class="input input-bordered" placeholder="search..." />
				<ThemeSwitcher />
				<a href="/login" class="btn btn-outline py-1">Login</a>
			</section>
			<slot />
		</div>
	</section>
	<slot />
	<section class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu min-h-full w-80 bg-base-200 p-4">
			{#each navLinks as navLink}
				<li><a href={navLink.href}>{navLink.title}</a></li>
			{/each}
		</ul>
	</section>
</header>
