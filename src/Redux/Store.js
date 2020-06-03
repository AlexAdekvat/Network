import profileReducer from "./ProfileReducer"
import dialogsReducer from "./DialogsReducer"

let store = {
    _state: {
        ProfilePage: {
            PostData: [
                { id: 1, message: 'Hello my name AlexAdekvat', likesCount: 1 },
                { id: 2, message: ' It is my first page', likesCount: 12 },
            ],
            newPostText: 'Hey'
        },
        DialogsPage: {
            DialogsData: [
                { id: 1, name: 'Sveta' },
                { id: 2, name: 'Anton' },
                { id: 3, name: 'PashaSladkiy' }
            ],
            MessagesData: [
                { id: 1, text: 'Hi' },
                { id: 2, text: 'How are you?' },
                { id: 3, text: "I'm fine" },
            ],
            newMessageBody: ""

        },
        // FriendList:{}
    },



    _callSubscriber() {
        console.log('State Changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;