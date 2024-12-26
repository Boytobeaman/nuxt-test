<template>
	<nav class="bg-gray-800 p-4">
		<div class="container mx-auto flex justify-between items-center">
			<div class="text-white text-lg font-bold">MyApp</div>
			<ul class="flex space-x-4">
				<li>
					<NuxtLink to="/" class="text-gray-300 hover:text-white">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about" class="text-gray-300 hover:text-white">About us</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact" class="text-gray-300 hover:text-white">Contact</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/call-api" class="text-gray-300 hover:text-white">Call API</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>

</script>