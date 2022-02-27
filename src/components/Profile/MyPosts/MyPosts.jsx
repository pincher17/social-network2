import React, { createRef } from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) =>{
   
    let postsElements = props.profilePage.posts.map((p)=> <Post message ={p.message} likesCount={p.likesCount} />).reverse();

    let newPostElement = React.createRef();
    let addPost = ()=>{
        props.addPost();
        //props.dispatch(addPostActionCreator())
    }

    let PostChange = () =>{
        let text = newPostElement.current.value;
        props.onPostChange(text);
       // props.dispatch(onPostChangeActionCreator(text))
    }
    
    return (
        <div>
            <p className={s.head_post}>My posts</p>
            <div>
                <textarea ref={newPostElement} onChange={PostChange} value={props.profilePage.newPostText}></textarea>
                <div>
                    <button onClick={addPost} className={s.btn_add_post}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;