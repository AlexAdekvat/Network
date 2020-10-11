import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../Utils/Validators'
import { TextArea } from '../../common/FormControls/FormsControls';

const MyPosts = React.memo((props) => {

    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({a:12})
    //     },3000)}

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state
    // }
    
//удалить позже (87 выпуск)

    let postsElements =
        [...props.PostData]
        //.reverse()
        .map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.posts);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostRedux onSubmit={onAddPost} />
            <div className={s.PostData}>
                {postsElements}
            </div>
        </div>
    )
})

const maxLength10 = maxLengthCreator(10);

const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field component={TextArea} name="posts" validate={[required, maxLength10]} placeholder="post"/> 
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm({ form: "newAddPost" })(AddNewPost)

export default MyPosts;