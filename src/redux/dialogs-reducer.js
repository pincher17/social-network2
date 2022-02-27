const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    newMessageText: '',
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's up?"},
        {id: 3, message: 'Eee'}
      ],
      dialogs: [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Elon'},
        {id: 3, name: 'Sergey'},
        {id: 4, name: 'Oleg'}
      ],
}

const dialogReducer = (state = initialState, action) =>{
    
    switch(action.type) {
        case ADD_MESSAGE:{  // if (x === 'value1')
        return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, {id: 1, message: state.newMessageText}]
        }   
    }

    case UPDATE_NEW_MESSAGE_TEXT:{
        return {
            ...state,
            newMessageText: action.newText,   
        }
    }
    default:
        return state
    }

}

export let addMessageActionCreator = () => {
    return{
        type: ADD_MESSAGE
    }
}

export let onMessageChangeActionCreator = (text) => {
    return{
        type:UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export default dialogReducer;