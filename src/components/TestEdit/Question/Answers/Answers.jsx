import React, { useCallback, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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
          checked={right_answer}
          onChange={handleChangeRightAnswer}
        />
        <span className={style.addButton} onClick={handleAddAnswer}>
          &#10003;
        </span>
      </div>
    </DragDropContext>
  );
};

export default React.memo(Answers);
