import sidebarReducer from './sidebar-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
				{ id: 2, message: 'It\'s my first post', likesCount: 25 },
				{ id: 3, message: 'It\'s my first post', likesCount: 25 },
			],
			newPostText: 'it-kamasutra.com',
		},
		dialogsPage: {
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
		},
		sideBar: {
		},
	},
	_callSubscriber() {
		console.log('State changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) { 
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}

export default store;