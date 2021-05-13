import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://im0-tub-ru.yandex.net/i?id=3d1eb54f6f662965c44b1205113bb44a&ref=rim&n=33&w=327&h=150"></img>
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        avatar + description
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo;