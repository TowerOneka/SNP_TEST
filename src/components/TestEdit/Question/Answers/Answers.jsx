import React, { useCallback, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import style from "./Answers.module.scss";
import Answer from "./Answer";

const Answers = (props) => {
  const [text, setText] = useState("");
  const [rightAnswer, setRight] = useState(false);

  const handleAddAnswer = useCallback(
    (e) => {
      e.preventDefault();
      props.addAnswer(text, rightAnswer);
      setText("");
      setRight(false);
    },
    [props.addAnswer, text, rightAnswer]
  );

  const handleTextChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleChangeRightAnswer = useCallback(() => {
    setRight(!rightAnswer);
  }, [setRight, rightAnswer]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    props.onDragEnd(draggableId, destination, source);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={String(props.question_id)}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {props.answers.map((answer, index) => (
              <Answer
                text={answer.text}
                is_right={answer.is_right}
                rights_count={props.rights_count}
                type={props.type}
                key={answer.id}
                id={answer.id}
                index={index}
                handleOpenAcceptSave={props.handleOpenAcceptSave}
                handleOpenAcceptDelete={props.handleOpenAcceptDelete}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className={style.addAnswer}>
        <input type='text' value={text} onChange={handleTextChange} />
        <input
          type='checkbox'
          id=''
          checked={rightAnswer}
          onChange={handleChangeRightAnswer}
        />
        {props.rights_count === 1 && props.type === "single" && rightAnswer ? (
          <span>There should be only one answer</span>
        ) : (
          <span className={style.addButton} onClick={handleAddAnswer}>
            &#10003;
          </span>
        )}
      </div>
      <div>
        {props.rights_count === 0 ? (
          <span>The correct answer must be specified</span>
        ) : (
          ""
        )}
      </div>
    </DragDropContext>
  );
};

export default React.memo(Answers);
