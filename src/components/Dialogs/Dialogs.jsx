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
	return (
		<div className={c.dialogs}>
			<div className={c.dialogsInner}>
				<DialogItem name='Kris' id='1' />
				<DialogItem name='Alex' id='2' />
				<DialogItem name='Dimych' id='3' />
				<DialogItem name='Misha' id='4' />
				<DialogItem name='Makkey' id='5' />
			</div>
			<div className={c.messages}>
				<MessageItem text='Hello guys!' />
				<MessageItem text='How are yuor it-kamasutra!' />
				<MessageItem text='Yo!' />
			</div>
		</div>
	)
}

export default Dialogs;