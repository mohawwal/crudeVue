<script setup></script>

<template>
	<div className="m-auto w-[90%]">
		<header className="flex">
			<div class="bg-amber-900 w-[100%]">
				<nav class="flex gap-4 text-white">
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/createPost">New Post</RouterLink>
				</nav>
			</div>
		</header>
		<RouterView />
	</div>
</template>
