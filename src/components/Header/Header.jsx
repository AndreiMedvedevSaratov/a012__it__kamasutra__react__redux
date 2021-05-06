import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://yt3.ggpht.com/a/AATXAJyIJ7iegTJ9s_L9-_wpoNb9wV2wBdRPSUWPE1Tm=s900-c-k-c0xffffffff-no-rj-mo'></img>
      
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;