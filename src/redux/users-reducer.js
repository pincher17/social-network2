import { usersApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

let initialState = {

    users: [],
    page: 1,
    toggleFollowingProgress: [],
}

const usersReducer = (state = initialState, action) =>{
    
    switch(action.type) {
        case FOLLOW:{  // if (x === 'value1')
        return {
            ...state,
            users: state.users.map((u)=>{
                if(action.userId === u.id){
                   return{...u, followed: true}
                }
                return u;
            }) 
        }
    }
    case UNFOLLOW:{
        return {
            ...state,
            users: state.users.map((u)=>{
                if(action.userId === u.id){
                   return{...u, followed: false}
                }
                return u;
            }) 
        }
    }
    case SET_USERS:{
        return {
            ...state, 
            users: [...action.users]}
    }
    case SET_PAGE:{
        return {
            ...state, 
            page: action.page}
    }
    case FOLLOWING_PROGRESS:{
        return {
            ...state, 
            toggleFollowingProgress: action.isFetching
            ?[...state.toggleFollowingProgress, action.userId]
            :state.toggleFollowingProgress.filter((id)=> id != action.userId)}
    }

    default:
        return state
    }
}

export let follow = (userId) => {
    return{
        type: FOLLOW,
        userId: userId
    }
}

export let unfollow = (userId) => {
    return{
        type: UNFOLLOW,
        userId: userId
    }
}

export let setUsers = (users) => {
    return{
        type: SET_USERS,
        users: users
    }
}

export let setPage = (page) => {
    return{
        type: SET_PAGE,
        page: page
    }
}

export let followingProgress = (isFetching, userId) => {
    return{
        type: FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userId
    }
}

export const getUsersThunk = (page) =>{
    return (dispatch) => {
        usersApi.getUsers(page)
        .then(data =>{

        dispatch(setUsers(data.items));
        
      })
      dispatch(setPage(page));
    }
}

export const followThunk = (userId) =>{
    return (dispatch) => {
        dispatch(followingProgress(true, userId))
        usersApi.follow(userId).then(data =>{
            debugger;
            if(data.resultCode == 0){
                dispatch(follow(userId))
            }
            dispatch(followingProgress(false, userId))
    })
    }
}

export const unfollowThunk = (userId) =>{
    return (dispatch) => {
        dispatch(followingProgress(true, userId))
        usersApi.unfollow(userId).then(data =>{
            if(data.resultCode == 0){
                dispatch(unfollow(userId))
            }
            dispatch(followingProgress(false, userId))
    })
    }
}

export default usersReducer;