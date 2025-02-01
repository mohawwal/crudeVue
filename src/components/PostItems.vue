<script setup>
    defineProps({
        post: {
            type: Object,
            required: true
        }
    })
</script>

<template>
	<div>
		<div>
			<span>Written by {{ post.author }}</span>
			<div>
				<button class="del material-icons">delete</button>
				<button class="save material-icons">save</button>
			</div>
		</div>
		<div>
			<h1>{{ post.title }}</h1>
			<p>{{ post.body }}</p>
		</div>
	</div>
</template>
