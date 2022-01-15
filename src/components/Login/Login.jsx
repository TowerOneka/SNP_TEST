import React from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.scss";

const Login = () => {
  return (
    <div className={style.loginContainer}>
      <form className={style.loginForm}>
        <h1>Log in to the system</h1>
        <label htmlFor='login'>Enter your login</label>
        <input type='text' name='login' className={style.loginInput} />
        <label htmlFor='loginPassword'>Enter your password</label>
        <input
          type='password'
          name='loginPassword'
          id='loginPassword'
          className={style.loginPassword}
        />
        <Link to='/registry'>Registry</Link>
        <button type='submit' className={style.loginButton}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
