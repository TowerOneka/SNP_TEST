import React from "react";
import style from "./Header.module.scss";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  let logOut = (e) => {
    props.handleSignOut();
  };
  return (
    <div className={style.container}>
      <Link to="/">
        <img src={logo} alt="logo" className={style.logoImg} />
      </Link>
      <Link to="/">
        <h1>Quizzy Tests</h1>
      </Link>

      {props.isAuth ? (
        <div className={style.profileInfo}>
          <p className={style.profileUsername}>{props.username}</p>
          <p className={style.logoutLink} onClick={logOut}>
            Log out
          </p>
        </div>
      ) : (
        <div className={style.links}>
          <Link className={`${style.loginLink} ${style.link}`} to="/login">
            Sing in
          </Link>
          <Link className={`${style.signupLink} ${style.link}`} to="/registry">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default React.memo(Header);
