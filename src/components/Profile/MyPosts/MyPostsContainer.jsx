import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { addPost, onPostChange } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import s from './MyPosts.module.css';
import Post from './Post/Post';


/* const MyPostsContainer = (props) =>{

    return (
        <StoreContext.Consumer> 
            {
             (store)=>{

                let addPost = ()=>{
                    store.dispatch(addPostActionCreator())
                }
            
                let onPostChange = (text) =>{
                    store.dispatch(onPostChangeActionCreator(text))
                }

            return <MyPosts addPost={addPost} updateNewPostText={onPostChange} profilePage={store.getState().profilePage} />
            }
            
            }
        
        </StoreContext.Consumer>
    )
} */

let mapStateToProps = (state) =>{

    return{
        profilePage: state.profilePage
    }
    
  }
  
/* let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () =>{
        dispatch(addPostActionCreator())
      },
      updateNewPostText: (text) =>{
        dispatch(onPostChangeActionCreator(text))
      }
    }
  } */
  
const MyPostsContainer = connect(mapStateToProps, {addPost, onPostChange})(MyPosts)

export default MyPostsContainer;

