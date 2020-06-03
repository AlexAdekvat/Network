import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        PostData: state.ProfilePage.PostData,
        newPostText: state.ProfilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;