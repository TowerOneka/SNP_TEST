import React, { useCallback, useState } from "react";
import style from "./Answers.module.scss";
import Answer from "./Answer";

const Answers = (props) => {
  const [text, setText] = useState("");
  const [right_answer, setRight] = useState(false);

  const handleAddAnswer = useCallback(
    (e) => {
      e.preventDefault();
      props.addAnswer(text, right_answer);
      setText("");
      setRight(false);
    },
    [props.addAnswer, text, right_answer]
  );

  const handleTextChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleChangeRightAnswer = useCallback(() => {
    setRight(!right_answer);
  }, [setRight]);

  return (
    <>
      {props.answers.map((answer) => (
        <Answer
          text={answer.text}
          is_right={answer.is_right}
          key={answer.id}
          id={answer.id}
          handleOpenAcceptSave={props.handleOpenAcceptSave}
          handleOpenAcceptDelete={props.handleOpenAcceptDelete}
        />
      ))}
      <div className={style.addAnswer}>
        <input type='text' value={text} onChange={handleTextChange} />
        <input
          type='checkbox'
          id=''
          checked={right_answer}
          onChange={handleChangeRightAnswer}
        />
        <span className={style.addButton} onClick={handleAddAnswer}>
          &#10003;
        </span>
      </div>
    </>
  );
};

export default React.memo(Answers);
