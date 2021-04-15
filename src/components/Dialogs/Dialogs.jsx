import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

	let messagesElements = props.state.messages.map(message => <MessageItem text={message.text} />)

	let newMessageElement = React.createRef();

	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}

	return (
		<div className={c.dialogs}>
			<div className={c.dialogsInner}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messagesElements}
				<div>
					<textarea ref={newMessageElement}></textarea>
				</div>
				<button onClick={addMessage}>Add message</button>
			</div>
		</div>
	)
}

export default Dialogs;