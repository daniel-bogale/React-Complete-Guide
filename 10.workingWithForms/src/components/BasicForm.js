import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    valueEntered: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() > 0);

  const {
    valueEntered: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredNameIsValid && enteredEmailIsValid) {
      nameInputReset();
      emailInputReset();
    }
  };

  console.log(nameInputHasError, emailInputHasError);
  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            value={enteredName}
            type="text"
            id="name"
            onBlur={nameInputBlurHandler}
            onChange={nameInputChangeHandler}
          />
        </div>
        {nameInputHasError && <p className="error-text">must be `&gt;` 1</p>}
        {/* <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div> */}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputHasError && <p className="error-text">must include @</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
