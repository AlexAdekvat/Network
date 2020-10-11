const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    DialogsData: [
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Anton' },
        { id: 3, name: 'PashaSladkiy' }
    ],
    MessagesData: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: "I'm fine" }
        ],
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                MessagesData: [...state.MessagesData, { id: 4, message: body }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;