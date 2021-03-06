import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

	let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();
	let addPost = () => {
		props.addPost();
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={c.postsBlock}>
			<h3>My posts</h3>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
			<div>New post</div>
			<div>
				{postsElements}
			</div>
		</div >
	)
}

export default MyPosts;