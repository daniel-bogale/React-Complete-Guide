// import { useCallback, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    valueEntered: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() > 0);

  let formIsValid = false;
  if (!nameInputHasError) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredNameIsValid) {
      nameInputReset();
    }
  };

  const formClass = nameInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">value can't be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
