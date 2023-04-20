import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

// import styled from "styled-components";

import styles from "./CourseInput.module.css";

// const StyledDiv = styled.div`
//   margin: 0.5rem 0;
//   transition: all 1s ease-out;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "inherent")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background-color: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

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

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <StyledDiv invalid={!isValid}>
  //       <label>Course Goal</label>

  //       <input
  //         onFocus={onFocusHandler}
  //         type="text"
  //         onChange={goalInputChangeHandler}
  //       />
  //     </StyledDiv>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        invalid={!isValid}
      >
        <label>Course Goal</label>

        <input
          onFocus={onFocusHandler}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
