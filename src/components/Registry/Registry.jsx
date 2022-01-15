import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Registry.module.scss";

const Registry = (props) => {
  let [login, setLogin] = useState("");
  let handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  let [password, setPassword] = useState("");
  let handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  let [confirmPassword, setConfirmPassword] = useState("");
  let handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className={style.registryContainer}>
      <form className={style.registryForm}>
        <h1>Sing up to the system</h1>
        <label htmlFor="login">Enter your login</label>
        <input
          type="text"
          name="login"
          id="login"
          value={login}
          onChange={handleChangeLogin}
          className={style.registryInput}
        />
        <label htmlFor="registryPassword">Enter your password</label>
        <input
          type="password"
          name="registryPassword"
          id="registryPassword"
          value={password}
          onChange={handleChangePassword}
          className={style.registryPassword}
        />
        <label htmlFor="confirmPassword">Confirm your password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
          className={style.registryPassword}
        />
        <div className={style.adminCheckbox}>
          <input type="checkbox" name="isAdminCheckbox" id="isAdminCheckbox" />
          <label htmlFor="isAdminCheckbox">Admin</label>
        </div>

        <Link to="/login">Log in</Link>
        <button
          type="submit"
          onSubmit={props.submitSignUp}
          className={style.registryButton}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default React.memo(Registry);
