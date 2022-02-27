import React from 'react';
import s from './Post.module.css';



const Post = (props) =>{
    return (
        <div className={s.item}>
            <img src='https://it-tehnik.ru/wp-content/uploads/matureman.png'></img>
             {props.message}
             <div>
                 <span>like {props.likesCount}</span>
             </div>
        </div>
               
    )
}

export default Post;