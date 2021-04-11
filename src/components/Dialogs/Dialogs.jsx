import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {


	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)


	let messagesElements = props.state.messages.map(message => <MessageItem text={message.text} />)

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