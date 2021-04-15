import { rerenderEntireTree } from "./../render";

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hello guys!", likesCount: 20 },
			{ id: 2, message: "How are you?", likesCount: 50 },
		],
		newPostText: "it-kamasutra",
	},
	dialogsPage: {
		dialogs: [
			{ id: 1, name: "Kris" },
			{ id: 2, name: "Alex" },
			{ id: 3, name: "Dimych" },
			{ id: 4, name: "Misha" },
			{ id: 5, name: "Makkey" },
		],
		messages: [
			{ id: 1, text: "Hello guys!" },
			{ id: 2, text: "How are yuor it-kamasutra!" },
			{ id: 3, text: "Yo!" },
			{ id: 4, text: "Yo!" },
		],
	},
};

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = "";
	rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};

export default state;
