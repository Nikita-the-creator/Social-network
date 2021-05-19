import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi', likeCount: 12},
                {id: 2, message: 'Hey', likeCount: 20},
                {id: 3, message: 'How many likes do you have?', likeCount: 30},
                {id: 4, message: 'Its my first post', likeCount: 43}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogPage: {
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
            newMessageText: 'meow'
        },
        sideBar: {
            friendsData: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'}
            ]
        }
    },
    getState() {
      return this.state;
    },
    subscribe  (observer)  {
        this.rerenderEntireTree = observer;
    },
    dispatch(action){

        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogPage = dialogsReducer(this.state.dialogPage, action)
        this.state.sideBarPage = sideBarReducer(this.state.sideBarPage, action)

        this.rerenderEntireTree(this.state);
    }
}

export default store;