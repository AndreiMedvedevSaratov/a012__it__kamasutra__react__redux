const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
		},
		sideBar: {
		},
	},
	_callSubscriber() {
		console.log('State changed');
	},
	_addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};

		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) { // { type: 'ADD-POST'} action is object
		if (action.type === 'ADD-POST') {
			this._addPost();
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._updateNewPostText(action.newText);
		}
	}
}

export const addPostActionCreator = () => {
	return {
		type: ADD_POST,
	}
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	}
}

export default store;
