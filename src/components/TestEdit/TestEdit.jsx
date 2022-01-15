import React from "react";
import style from "./TestEdit.module.scss";

const TestEdit = () => {
  return (
    <div className={style.container}>
      <div className={style.testName}>
        <label htmlFor='TestName' className={style.testNameLabel}>
          Test Name
        </label>
        <input
          type='text'
          name='TestName'
          id='TestName'
          className={style.testNameInput}
          required
        />
      </div>
      <div className={style.testBody}></div>
      <div className={style.testButtons}>
        <button className={style.buttonSave}>Save</button>
        <button className={style.buttonDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TestEdit;
