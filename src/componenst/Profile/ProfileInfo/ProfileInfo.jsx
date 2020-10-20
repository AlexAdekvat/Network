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
    const onSubmit = (FormData) => {
        saveProfile(FormData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <label for="ava" className={s.label} >
                        <span className={s.span}>Update photo </span>

                        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                    </label>
                    {isOwner && <input type={"file"} id="ava" name="ava" onChange={onMainPhotoSelected} className={s.input} />}
                </div>
                <div className={s.name}>{profile.fullName}</div>
                <ProfileStatusHooks status={status} updateStatus={updateStatus} />

                {editMode
                    ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

    return (
        <div className={s.aboutMe}>
            <div className={s.btn} >
                {isOwner && <button onClick={goToEditMode} className={s.edit}>EDIT  PROFILE INFO</button>}
            </div>
            <div className={s.infoMe}  >
                <div className={s.info}>
                    <b> Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                </div >
                {profile.lookingForAJob &&
                    <div className={s.info}>
                        <b> My professional skills</b>: {profile.lookingForAJobDescription}
                    </div>}
                <div  className={s.info}>
                    <b>About Me</b> : {profile.aboutMe}
                </div>
            </div>

            <div className={s.contact}>
                <b>Contacts</b>:   {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} className={s.contactInfo} />
                })}
            </div>
        </div>
    )

}



const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b> {contactTitle} </b>: {contactValue}</div>
}



export default ProfileInfo;