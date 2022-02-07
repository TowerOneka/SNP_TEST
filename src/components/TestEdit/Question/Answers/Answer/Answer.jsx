import React, { useCallback, useState } from "react";
import style from ".././Answers.module.scss";

const Answer = (props) => {
  const [text, setText] = useState(props.text);
  const [is_right, setRight] = useState(props.is_right);

  const handleClickSave = useCallback((e) => {
    e.preventDefault();
    props.handleOpenAcceptSave(props.id, text, is_right);
  });

  const handleClickDelete = useCallback(
    (e) => {
      e.preventDefault();
      props.handleOpenAcceptDelete(props.id);
    },
    [props.id, props.deleteAnswer]
  );

  const handleTextChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleChangeRightAnswer = useCallback(() => {
    setRight(!is_right);
  });

  return (
    <div className={style.addAnswer}>
      <input type='text' value={text} onChange={handleTextChange} />
      <input
        type='checkbox'
        checked={is_right}
        onChange={handleChangeRightAnswer}
      />
      <span onClick={handleClickSave}>&#10003;</span>
      <span className={style.questionDelete} onClick={handleClickDelete}>
        &times;
      </span>
    </div>
  );
};

export default React.memo(Answer);
