<li class="border-base-400 card flex max-w-72 border-2 border-red-500 shadow-xl">
	<figure class="aspect-square">
		<img src={drug.image_url} class="aspect-square" alt={drug.brand_name} />
	</figure>
	<div class="card-body flex-1 p-3">
		<h2 class="card-title line-clamp-1 text-pretty">
			{drug.brand_name}
		</h2>
		<p class="line-clamp-2 max-h-[80px] text-sm">{drug.description}</p>

		<div class="card-actions">
			<button>read more</button>
		</div>
	</div>
</li>


<script>
    export let drug;
</script>