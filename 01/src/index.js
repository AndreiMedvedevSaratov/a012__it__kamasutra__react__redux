import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './StoreContext';

// import store from './redux/store';
import store from './redux/redux-store';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			{/* <App state={state}
				dispatch={store.dispatch.bind(store)}
				store={store}
				/> */}
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});