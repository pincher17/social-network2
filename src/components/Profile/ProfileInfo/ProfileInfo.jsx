import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  let avatar = 'https://it-tehnik.ru/wp-content/uploads/matureman.png';
  
  if(!props.profile){
    return <div><img src="./830.gif" alt=""/></div>
  }
  return ( 
    <div className={s.profile_info}>
          <div>
          <img className={s.profile_info_img} src={props.profile.photos.large ? props.profile.photos.large : avatar } />
          </div>
          <div>{props.profile.fullName}</div>
          <ProfileStatus />
    </div>
    )
  
}

export default ProfileInfo;