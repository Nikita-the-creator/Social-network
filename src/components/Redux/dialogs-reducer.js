const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogsData: [
        {id: 1, name: 'Andrey',},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Petya'},
        {id: 6, name: 'Kolya'}

    ],
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messagesData:[...state.messagesData, newMessage],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}

export let addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
}

export let updateNewMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message
    }
}

export default dialogsReducer;