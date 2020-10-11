import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from './Message/Messages';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormControls/FormsControls';
import { required, maxLengthCreator } from '../../Utils/Validators';



const Dialogs = (props) => {

    let state = props.DialogsPage;

    let dialogsElements = state.DialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messageElements = state.MessagesData.map(m => <Messages message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);

    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>

            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}  >
            <div>
                <Field component={TextArea} validate={[required, maxLength50]}
                 name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessage" })(AddMessageForm)

export default Dialogs;