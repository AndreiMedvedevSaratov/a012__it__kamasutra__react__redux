const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrei' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valera' },
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'You' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Privet' },
		{ id: 5, message: 'Message' },
	],
	newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
	let stateCopy;

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body,
			};

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, { id: 7, message: body }],
			};

		default:
			return state;
	}
}

export const sendMessageCreator = () => {
	return {
		type: SEND_MESSAGE,
	}
}

export const updateNewMessageBodyCreator = (body) => {
	return {
		type: UPDATE_NEW_MESSAGE_BODY,
		body: body,
	}
}

export default dialogsReducer;