import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/state';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={store.getState()}
				addPost={store.addPost}
				updateNewPostText={store.updateNewPostText}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);