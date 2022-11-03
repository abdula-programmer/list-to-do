import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setinputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    setinputText(event.target.value);

    if (event.target.value.trim().length >= 5) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(inputText.trim().length <= 5) {
      setIsInputValid(false);
      return
    }
   
    props.onAddTask(inputText);
    setinputText('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isInputValid ? "black" : "red" }}>Задачи</label>
        <input
          type="text"
          onChange={taskInputChangeHandler}
          value={inputText}
          style={{
            borderColor: isInputValid ? "black" : "red",
            background: isInputValid ? "transparent" : "salmon",
          }}
        />
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
