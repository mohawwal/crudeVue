<script setup>
import PostItems from "@/components/PostItems.vue";
import MyWrapper from "@/components/MyWrapper.vue";
import { usePostsStore } from "@/stores/Post";

const postStore = usePostsStore()
</script>

<template>
	<div
		v-for="post in postStore.posts"
		:key="post.id"
	>
		<MyWrapper>
			<PostItems
				:post="post"
			/>
		</MyWrapper>
	</div>
</template>
