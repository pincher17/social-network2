import { authApi, usersApi } from "../api/api";

const SET_AUTH = 'SET_AUTH';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) =>{

    switch(action.type) {
        case SET_AUTH:{  // if (x === 'value1')
        return {
            ...state,
            id: action.id,
            login: action.login,
            email: action.email,
            isAuth: true
        }
        }

        default:
          break;
      }

    return state
}


export let setAuth = (id, login, email) => {
    return{
        type: SET_AUTH, id, login, email
    }
}


export const setAuthThunk = () =>{
    return (dispatch) => {
        authApi.me().then(data =>{
            
            if(data.resultCode === 0){
                let {id, login, email} = data.data;
                dispatch(setAuth(id, login, email));
            }

        })
    }
}

export default authReducer;