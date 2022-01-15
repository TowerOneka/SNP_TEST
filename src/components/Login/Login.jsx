import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.scss";

const Login = (props) => {
  let [login, setLogin] = useState("");
  let handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  let [password, setPassword] = useState("");
  let handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleSubmitForm = (e) => {
    e.preventDefault();
    props.handleSubmitSignIn(login, password);
  };
  return (
    <div className={style.loginContainer}>
      <form className={style.loginForm} onSubmit={handleSubmitForm}>
        <h1>Log in to the system</h1>
        <label htmlFor="login">Enter your login</label>
        <input
          type="text"
          name="login"
          className={style.loginInput}
          value={login}
          onChange={handleChangeLogin}
          required
        />
        <label htmlFor="loginPassword">Enter your password</label>
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          value={password}
          onChange={handleChangePassword}
          className={style.loginPassword}
          required
        />
        <Link to="/registry">Registry</Link>
        <button type="submit" className={style.loginButton}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default React.memo(Login);
