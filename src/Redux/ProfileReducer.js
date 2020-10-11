import { UserAPI, profileAPI } from "../API/api"

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_SAVE_PHOTO= 'SET_SAVE_PHOTO'

let initialState = {
    PostData: [
        { id: 1, message: 'Hello my name AlexAdekvat', likesCount: 1 },
        { id: 2, message: ' It is my first page', likesCount: 12 },
    ],
    profile: null ,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.posts,
                likesCount: 1
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: ''
            };

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case DELETE_POST: {
            return { ...state, PostData: state.PostData.filter(p => p.id != action.postId) }
        }

        case SET_SAVE_PHOTO: {
            return { ...state, profile: {...state.profile, photos:action.photos }  }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (posts) => ({ type: ADD_POST, posts })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccses = (photos) => ({ type: SET_SAVE_PHOTO, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data)); 
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccses(response.data.data.photos));
    }
}

export default profileReducer;