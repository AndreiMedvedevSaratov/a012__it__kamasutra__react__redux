import React from 'react';
import Preloader from '../../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../../assets/images/user1.jpg';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  } 

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        avatar + description
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo;