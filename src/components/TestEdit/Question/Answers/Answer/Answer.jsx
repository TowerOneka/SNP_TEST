import React, { useCallback, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import style from ".././Answers.module.scss";

const Answer = (props) => {
  const [text, setText] = useState(props.text);
  const [is_right, setRight] = useState(props.is_right);

  console.log(props.rights_count);

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
  }, [setRight, is_right]);

  return (
    <Draggable draggableId={String(props.id)} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          className={style.addAnswer}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input type="text" value={text} onChange={handleTextChange} />
          <input
            type="checkbox"
            checked={is_right}
            onChange={handleChangeRightAnswer}
          />
          {props.rights_count > 1 && props.type === "single" && is_right ? (
            <span>There should be only one answer, save other answers</span>
          ) : (
            <span onClick={handleClickSave}>&#10003;</span>
          )}
          <span className={style.questionDelete} onClick={handleClickDelete}>
            &times;
          </span>
        </div>
      )}
    </Draggable>
  );
};

export default React.memo(Answer);
