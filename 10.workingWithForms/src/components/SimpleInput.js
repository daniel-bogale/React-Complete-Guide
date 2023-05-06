import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() > 0;
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    if (enteredNameIsValid) {
      console.log(enteredName);
      setEnteredName("");
      setIsTouched(false);
    }
  };

  const nameInputIsInvalid = !enteredNameIsValid && isTouched;
  const formClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  useEffect(() => {
    if (nameInputIsInvalid) console.log("Name Input is valid");
  }, [nameInputIsInvalid]);

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
        {nameInputIsInvalid && (
          <p className="error-text">value can't be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
