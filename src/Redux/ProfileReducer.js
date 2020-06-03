
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    PostData: [
        { id: 1, message: 'Hello my name AlexAdekvat', likesCount: 1 },
        { id: 2, message: ' It is my first page', likesCount: 12 },
    ],
    newPostText: 'Hey'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 1
            };
            return { 
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: ''
             };
        case UPDATE_NEW_POST_TEXT: {
            return {
                 ...state,
                 newPostText: action.newText
                 };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;