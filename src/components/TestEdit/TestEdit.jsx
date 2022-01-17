import React from "react";
import style from "./TestEdit.module.scss";

const TestEdit = () => {
  return (
    <div className={style.container}>
      <div className={style.testName}>
        <label htmlFor="TestName" className={style.testNameLabel}>
          Test Name
        </label>
        <input
          type="text"
          name="TestName"
          id="TestName"
          className={style.testNameInput}
          required
        />
        <div className={style.addButton}>
          <button className="white_button">Add question</button>
        </div>
      </div>
      <ul className={style.testBody}></ul>
      <div className={style.testButtons}>
        <button className="black_button">Save</button>
        <button className="white_button">Delete</button>
      </div>
    </div>
  );
};

export default TestEdit;
