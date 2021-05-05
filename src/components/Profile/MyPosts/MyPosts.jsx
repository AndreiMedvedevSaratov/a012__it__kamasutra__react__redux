import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;