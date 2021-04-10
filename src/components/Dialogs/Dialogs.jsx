import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = `/dialogs/${props.id}`;
	return (
		<div className={c.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const MessageItem = (props) => {
	return (
		<div className={c.message}>{props.text}</div>
	)
}

const Dialogs = () => {

	let dialogs = [
		{ id: 1, name: 'Kris' },
		{ id: 2, name: 'Alex' },
		{ id: 3, name: 'Dimych' },
		{ id: 4, name: 'Misha' },
		{ id: 5, name: 'Makkey' }
	]
	let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

	let messages = [
		{ id: 1, text: 'Hello guys!' },
		{ id: 2, text: 'How are yuor it-kamasutra!' },
		{ id: 3, text: 'Yo!' },
		{ id: 4, text: 'Yo!' }
	]
	let messagesElements = messages.map(message => <MessageItem text={message.text} />)

	return (
		<div className={c.dialogs}>
			<div className={c.dialogsInner}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messagesElements}
			</div>
		</div>
	)
}

export default Dialogs;