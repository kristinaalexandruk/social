import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

	let posts = [
		{ id: 1, message: 'Hello guys!', likesCount: 20 },
		{ id: 2, message: 'How are you?', likesCount: 50 },
	]
	let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

	return (
		<div className={c.postsBlock}>
			<h3>My posts</h3>
			<div>New post</div>
			<div>
				{postsElements}
			</div>
		</div >
	)
}

export default MyPosts;