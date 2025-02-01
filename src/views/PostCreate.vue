<script setup>
import { reactive, computed } from "vue";
import { usePostsStore } from "@/stores/Post";
import { useRouter } from "vue-router";

const postStore = usePostsStore()
const router = useRouter()

const post = reactive({
	author: "",
	title: "",
	body: "",
});

const isFormInvalid = computed(() => {
	return post.title === "" || post.body === "" || post.author === "";
});

const submit = () => {
    postStore.addPost(post)
	router.push({name: 'home'})
}
</script>

<template>
	<div className="bg-amber-50 h-[100vh] flex items-center justify-center">
		<div className="bg-white flex rounded-3xl p-3 min-w-[300px]">
			<form @submit.prevent="submit">
				<h3 class="text-center font-extrabold">create a new post</h3>
				<div class="flex flex-col justify-center gap-3.5">
					<div class="flex flex-col">
						<label>Book Author</label>
						<input
							class="w-[100%] border"
							type="text"
							v-model="post.author"
						/>
					</div>
					<div class="flex flex-col">
						<label>Book Title</label>
						<input
							class="w-[100%] border"
							type="text"
							v-model="post.title"
						/>
					</div>
					<div class="flex flex-col">
						<label>Book Body</label>
						<textarea
							class="w-[100%] border-e-black border"
							rows="10"
							v-model="post.body"
						></textarea>
					</div>
					<div>
						<button
							class="w-[100%] bg-blue-400 text-center rounded-2xl"
							:disabled="isFormInvalid"
						>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
