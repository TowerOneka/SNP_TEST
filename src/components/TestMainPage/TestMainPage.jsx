import React from "react";
import { Link } from "react-router-dom";
import Fetcing from "../Fetching/Fetching";
import Test from "./Test";
import style from "./TestMainPage.module.scss";

const TestMainPage = (props) => {
  return (
    <div className={style.container}>
      {props.isFetching ? (
        <Fetcing />
      ) : props.error ? (
        <p className={style.error}>
          {props.error}{" "}
          <Link className={style.loginLink} to='/login'>
            Log in to the system
          </Link>
        </p>
      ) : (
        <div>
          <div className={style.testHeader}>
            <input type='text' className={style.testInput} />
            <button className='white_button' onClick={props.handleCreateTest}>
              CREATE TEST
            </button>
          </div>
          <ul className={style.testList}>
            {props.testList.map((test) => (
              <Test
                title={test.title}
                key={test.id}
                id={test.id}
                isAdmin={props.isAdmin}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default React.memo(TestMainPage);
