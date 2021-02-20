import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from './../../../StoreContext';

const MyPostsContainer = () => {
  // let state = props.store.getState();

  // let addPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // }

  // let onPostChange = (text) => {
  //   props.store.dispatch(updateNewPostTextActionCreator(text));
  // }

  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        }
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        )
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;