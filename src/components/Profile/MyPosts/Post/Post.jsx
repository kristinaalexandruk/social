import React from 'react';
// import c from './Post.module.css'

const Post = (props) => {
	return (
		<div>
			<div>{props.message}</div> {props.likesCount}
		</div>
	)
}

export default Post;