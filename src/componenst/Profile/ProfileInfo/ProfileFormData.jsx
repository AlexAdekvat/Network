import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from "./../../common/FormControls/FormsControls"
import s from './ProfileInfo.module.css';
import styles from "./../../common/FormControls/FormsControls.module.css"




const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit} >
        <div>
            <button >SAVE</button>
        </div>
        {error && < div className={styles.formSummaryError} >
                {error}
            </div>}
        <div>
            <b> Full Name</b>: {createField("Full name", "fullName", Input, [])}
        </div>
        <div>
            <b> Looking for a job</b>: {createField("", "lookingForAJob", Input, [], { type: "checkbox" })}
        </div>
        <div>
            <b> My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", TextArea, [])}
        </div>
        <div>
            <b>About Me</b> : {createField("About me", "aboutMe", TextArea, [])}
        </div>
        <div>
            <b>Contacts</b>:   {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact} >
                        <b> {key}: {createField(key, "contacts."+key, Input, [])} </b>
                    </div>
                
            })}
        </div>
    </form>
}



const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)


export default ProfileDataReduxForm;