import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
     _state: {
        profilePage:{
            posts: [
                {id: 1, message: 'My first post', likesCount: 3},
                {id: 2, message: "hello", likesCount: 15},
                {id: 2, message: "Yo", likesCount: 15},
              ],
            newPostText: '',
        },
        dialogsPage:{
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
        },
    },
    rerender(){
        
    },
    getState(){
       return this._state;
    },
    _addPost(){
        let newPost = {
            id: 1, 
            message: this._state.profilePage.newPostText, 
            likesCount: 3
        };
        
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this.rerender();
    },
    _updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this.rerender();
    },
    _addMessage(){
        let newMessage = {id: 1, message: this._state.dialogsPage.newMessageText};
        
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = '';
        this.rerender();
    },
    _updateNewMessageText(newText){
        this._state.dialogsPage.newMessageText = newText;
        this.rerender();
    },
    subscriber(observer){
        this.rerender = observer;
        
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this.rerender();
        /* switch(action.type) {
            case ADD_POST:  // if (x === 'value1')
            this._addPost();
            break;

            case UPDATE_NEW_POST_TEXT:
            this._updateNewPostText(action.newText)
            break;
            
            case ADD_MESSAGE:  // if (x === 'value1')
            this._addMessage();
            break;

            case UPDATE_NEW_MESSAGE_TEXT:
            this._updateNewMessageText(action.newText)
            break;

            default:
              break;
          } */
    }
}





/* export let addPost = () =>{
    let newPost = {
        id: 1, 
        message: state.profilePage.newPostText, 
        likesCount: 3
    };
    
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerender();
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    console.log(newText)
    rerender();
} */



export default store;