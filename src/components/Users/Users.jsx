import axios from 'axios';
import React, { createRef } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import { usersApi } from '../../api/api';


const Users = (props) =>{
    debugger
    let allPages=[];
    for (let i = 1; i <= 20; i++) {
    allPages.push(i);
  }

       return (
        
       <div>
        {allPages.map(p=>{
        
        return(
            <span onClick={()=>{props.getUsersThunk(p)}} 
            className={(props.page === p && s.selected) + ' ' + s.page_number}>{p}</span>)
        })}

        {props.users.map((u)=>
        <div className={s.user_wrapper} key={u.id}>
            <div className={s.img_name_wrapper}>
                <div>
                    <NavLink to={'/profile/' + u.id } >
                    {u.photos.small
                    ? <img src={u.photos.small} alt="" className={s.avatar_img} />
                    :<img src={'https://it-tehnik.ru/wp-content/uploads/matureman.png'} alt="" className={s.avatar_img} />}
                    </NavLink>
                </div>
                <div className={s.name}>{u.name}</div>
            </div>
            {u.followed 
            ? <button disabled={props.toggleFollowingProgress.some(id => id === u.id)} 
                    onClick={()=>{props.unfollowThunk(u.id)}} className={s.btn_unfollow} > unfollow </button>
            : <button disabled={props.toggleFollowingProgress.some(id => id === u.id)} 
                    onClick={()=>{props.followThunk(u.id)}} className={s.btn_follow}>follow</button>}

            <div className={s.user_line}></div>
        </div>
         )}
        </div>
       )
    }


export default Users;