import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) =>{
  
    return (
        <header className={s.header}>
        <div className={s.header_wrapper}>
        <img className={s.logo} src='https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png' />
        <div className={s.login_block}>
          {props.isAuth
          ?<div>{props.login}</div>
          :<NavLink to={'/login'}>Login</NavLink>
          }
        </div>
        </div>
      </header>
    )
}

export default Header;