import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
            "API-KEY": "7b0e71f2-06c7-4063-910c-9fa5dd7b3963"
        }
})

export const usersApi = {
    getUsers(page = 1){
        return instance.get(`users?page=${page}`).then(response =>{
            return response.data;
        })
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then(response =>{
            debugger;
            return response.data;
        })
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`).then(response =>{
            return response.data;
        })
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response =>{
            return response.data;
        })
    },
} 

export const authApi = {
    me(){
        return instance.get(`auth/me`).then(response =>{
            return response.data;
        })
    }
} 
