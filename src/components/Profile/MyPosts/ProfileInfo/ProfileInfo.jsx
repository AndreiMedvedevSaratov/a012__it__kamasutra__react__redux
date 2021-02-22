import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://im0-tub-ru.yandex.net/i?id=3d1eb54f6f662965c44b1205113bb44a&ref=rim&n=33&w=327&h=150"></img>
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
      </div>
    </div>
  )
}

export default ProfileInfo;