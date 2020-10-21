import React from 'react';
import { addPostActionCreator } from "../../../Redux/ProfileReducer";
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
        addPost: (posts) => {
            dispatch(addPostActionCreator(posts));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


