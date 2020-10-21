import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../Utils/Validators'
import { TextArea } from '../../common/FormControls/FormsControls';
import Loader from '../../common/preloader/Loader';

const MyPosts = React.memo((props) => {

    if(!props.profile){
        return <Loader/>
    }

    let postsElements = [...props.PostData]
    .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} smallPhoto={props.profile.photos.small }/>);


    let onAddPost = (values) => {
        props.addPost(values.posts);
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.myPost}>My posts</h3>
            <AddNewPostRedux onSubmit={onAddPost} />
            <div className={s.postData}>
                {postsElements}
            </div>
        </div>
    )
})

const maxLength10 = maxLengthCreator(10);

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form} >
            <Field className={s.textAria} component={TextArea} name="posts" validate={[required, maxLength10]} placeholder="Anythig new?"/> 
            <div>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm({ form: "newAddPost" })(AddNewPost)

export default MyPosts;