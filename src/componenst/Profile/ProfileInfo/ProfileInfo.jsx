import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Loader from '../../common/preloader/Loader';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataReduxForm from './ProfileFormData';




const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)

     if (!profile) {
         return <Loader />
     }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit=(FormData)=>{
         saveProfile(FormData).then(()=>{
            setEditMode(false)
         })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}  />}

                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

                <ProfileStatusHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

    return <div>
        <div>
            {isOwner && <button onClick={goToEditMode} >EDIT</button>}
        </div>
        <div>
            <b> Full Name</b>: {profile.fullName}
        </div>
        <div>
            <b> Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b> My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
        <div>
            <b>About Me</b> : {profile.aboutMe}
        </div>
        <div>
                        <b>Contacts</b>:   {Object.keys(profile.contacts).map(key => {
                            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })}
                    </div>
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b> {contactTitle} </b>: {contactValue}</div>
}

export default ProfileInfo;