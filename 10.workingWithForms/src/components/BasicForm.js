import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    valueEntered: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameInputReset,
  } = useInput((value) => value.trim().length > 0);

  const {
    valueEntered: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset,
  } = useInput((value) => value.trim().length > 0);
  const {
    valueEntered: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      firstNameInputReset();
      lastNameInputReset();
      emailInputReset();
    }
  };

  const firstNameInputClass = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClass = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div
      // className={firstNameInputClass}
      >
        <div className={firstNameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredFirstName}
            type="text"
            id="name"
            onBlur={firstNameInputBlurHandler}
            onChange={firstNameInputChangeHandler}
          />
        </div>
        {firstNameInputHasError && (
          <p className="error-text">must be `&gt;` 1</p>
        )}
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onBlur={lastNameInputBlurHandler}
            onChange={lastNameInputChangeHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">must be &gt; 1</p>
          )}
        </div>
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
