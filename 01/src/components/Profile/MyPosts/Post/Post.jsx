import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.artfile.ru/1772x1182_621388_[www.ArtFile.ru].jpg"></img>
      { props.message }
      <div>
        { props.likesCount } <span> like</span>
      </div>
    </div> 
  )
}

export default Post;