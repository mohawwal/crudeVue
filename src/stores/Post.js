import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts-store", {
	//Data
	state: () => ({
		posts: [
			{
				id: 1,
				author: "Alice Johnson",
				created_at: "2025-01-30",
				title: "The Future of AI",
				body: "Artificial Intelligence is rapidly evolving and changing the way we live and work...",
				isBookmarked: true,
			},
			{
				id: 2,
				author: "John Doe",
				created_at: "2025-01-29",
				title: "Top 10 Programming Languages",
				body: "Python, JavaScript, and Rust are among the top programming languages in 2025...",
				isBookmarked: false,
			},
			{
				id: 3,
				author: "Emma Smith",
				created_at: "2025-01-28",
				title: "Healthy Eating Tips",
				body: "A balanced diet is essential for maintaining good health and well-being...",
				isBookmarked: true,
			},
			{
				id: 4,
				author: "David Lee",
				created_at: "2025-01-27",
				title: "Best Travel Destinations",
				body: "Looking for your next travel adventure? Here are some must-visit places in 2025...",
				isBookmarked: false,
			},
			{
				id: 5,
				author: "Sophia Martinez",
				created_at: "2025-01-26",
				title: "Investing for Beginners",
				body: "Investing can seem overwhelming, but starting with the basics can make all the difference...",
				isBookmarked: true,
			},
			{
				id: 6,
				author: "Michael Brown",
				created_at: "2025-01-25",
				title: "The Rise of Electric Vehicles",
				body: "EVs are becoming the norm as more companies invest in sustainable transportation...",
				isBookmarked: false,
			},
			{
				id: 7,
				author: "Olivia Wilson",
				created_at: "2025-01-24",
				title: "How to Stay Productive",
				body: "Productivity is all about managing time efficiently and minimizing distractions...",
				isBookmarked: true,
			},
			{
				id: 8,
				author: "William Taylor",
				created_at: "2025-01-23",
				title: "Learning a New Language",
				body: "Mastering a new language requires consistency, practice, and immersion...",
				isBookmarked: false,
			},
			{
				id: 9,
				author: "Emily Davis",
				created_at: "2025-01-22",
				title: "The Benefits of Meditation",
				body: "Meditation helps reduce stress, improve focus, and boost overall mental health...",
				isBookmarked: true,
			},
			{
				id: 10,
				author: "Daniel Harris",
				created_at: "2025-01-21",
				title: "How to Start a Side Hustle",
				body: "A side hustle can help you generate extra income and explore your passions...",
				isBookmarked: false,
			},
		],
	}),

	//Computed
	getters: {
		sorted(state) {
			return state.posts.slice().sort(
				(a, b) => new Date(b.created_at) - new Date(a.created_at)
			);
		}
	},

	//Methods
	actions: {
		addPost(post) {
			this.posts.push({
				id: this.posts.length + 1,
				author: post.author,
				title: post.title,
				created_at: new Date().toLocaleDateString(),
				isBookmarked: false,
			});
		},
	},
});
