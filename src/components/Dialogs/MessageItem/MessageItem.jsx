import React from 'react';
import c from './MessageItem.module.css';

const MessageItem = (props) => {
	return (
		<div className={c.message}>{props.text}</div>
	)
}

export default MessageItem;