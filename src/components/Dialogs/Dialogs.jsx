import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

const Message = (props) => {
	return (
		<div className={s.message}>
			{props.message}
		</div>
	);
}

const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
	
	let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div> {messagesElements} </div>
				<div>
					<div>
						<textarea placeholder='Enter your message'
							value={newMessageBody}
							onChange={onNewMessageChange}
						></textarea>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;