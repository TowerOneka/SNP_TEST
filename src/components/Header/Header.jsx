import React from "react";
import style from "./Header.module.scss";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={style.container}>
      <Link to='/'>
        <img src={logo} alt='logo' className={style.logoImg} />
      </Link>

      <h1 onClick={props.handleOpenClose}>Quizzy Tests</h1>
      <div className={style.links}>
        <Link className={`${style.loginLink} ${style.link}`} to='/login'>
          Sing in
        </Link>
        <Link className={`${style.signupLink} ${style.link}`} to='/registry'>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
