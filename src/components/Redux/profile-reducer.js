import { profileAPI, usersApi } from "../api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    postData: [
        { id: 1, message: 'Hi', likeCount: 12 },
        { id: 2, message: 'Hey', likeCount: 20 },
        { id: 3, message: 'How many likes do you have?', likeCount: 30 },
        { id: 4, message: 'Its my first post', likeCount: 43 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.user
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

export let addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export let setUserProfile = (user) => {
    return {
        type: SET_USER_PROFILE,
        user
    }
}

export let setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const getProfileThunkCreator = (userId) => async (dispatch) => {
    let response = await usersApi.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer;