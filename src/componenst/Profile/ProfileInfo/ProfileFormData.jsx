import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from "./../../common/FormControls/FormsControls"


const ProfileDataForm = ({ handleSubmit }) => {
    return <form onSubmit={handleSubmit} >
        <div>
            <button >SAVE</button>
        </div>
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
        {/* <div>
            <b>Contacts</b>:   {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div> */}
    </form>
}



const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)


export default ProfileDataReduxForm;