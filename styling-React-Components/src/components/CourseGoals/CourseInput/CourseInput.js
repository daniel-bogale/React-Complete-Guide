import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0.5rem 0;
  transition: all 1s ease-out;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid label {
    color: red;
  }

  &.invalid input {
    border-color: red;
    background-color: #ffd7d7;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);

      return;
    }
    props.onAddGoal(enteredValue);
  };

  const onFocusHandler = (e) => {
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <StyledDiv className={!isValid && " invalid"}>
        <label>Course Goal</label>
        <input
          onFocus={onFocusHandler}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </StyledDiv>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
