import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../common/preloader/Loader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/user.png';



const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

    // if (!profile) {
    //     return <Loader />
    // }

    const onMainPhotoSelected = (e) => {
        if (!e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                {/* photos.large is not undefinded */}
                <img src={profile||userPhoto} className={s.mainPhoto} />
                {isOwner && <input onChange={onMainPhotoSelected} type={"file"}  />}
                <ProfileStatusHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;