import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props) =>{
 
    return (
      <div className={s.main_content}>
        Main content
        <ProfileInfo profile = {props.profile} />
        <MyPostsContainer />
      </div>
    )
}

export default Profile;