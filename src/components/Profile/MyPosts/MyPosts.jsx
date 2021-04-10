import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={c.postsBlock}>
			<h3>My posts</h3>
			<div>New post</div>
			<div>
				<Post message='Hello guys!' />
				<Post message='How are you?' />
			</div>
		</div >
	)
}

export default MyPosts;