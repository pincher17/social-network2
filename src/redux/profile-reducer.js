import { usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'My first post', likesCount: 3},
        {id: 2, message: "hello", likesCount: 15},
        {id: 2, message: "Yo", likesCount: 15},
      ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) =>{

    switch(action.type) {
        case ADD_POST:{  // if (x === 'value1')
        let newPost = {
            id: 1, 
            message: state.newPostText, 
            likesCount: 3
        };
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        }
        }

        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
          break;
      }

    return state
}

export let addPost = () => {
    return{
        type: ADD_POST
    }
}

export let onPostChange = (text) => {
    return{
        type:UPDATE_NEW_POST_TEXT, newText: text
    }
}

export let setProfile = (profile) => {
    return{
        type:SET_PROFILE, profile: profile
    }
}

export const getProfileThunk = (userId) =>{
    return (dispatch) => {
        usersApi.getProfile(userId).then(data =>{
          
            dispatch(setProfile(data));
        })
    }
}

export default profileReducer;