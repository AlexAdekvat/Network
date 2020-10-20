import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';
import sea from './../../assets/images/sea.jpg'

const Profile = (props) => {
    
    return (
        <div >
            <div className={s.background}>
                <img src={sea}/>
            </div >
            <ProfileInfo 
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                saveProfile={props.saveProfile}
                updateStatus={props.updateStatus} />
            <MyPostsContainer {...props}/> 
        </div>
    )
}

export default Profile;