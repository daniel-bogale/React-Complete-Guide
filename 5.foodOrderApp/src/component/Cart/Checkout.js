import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    id: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const idInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredId = idInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredIdIsValid = !isEmpty(enteredId);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid &&
      enteredIdIsValid;
    setFormInputsValidity({
      name: enteredNameIsValid,
      id: enteredIdIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      id: enteredId,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  const nameInputClass = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const idInputClass = `${classes.control} ${
    formInputsValidity.id ? "" : classes.invalid
  }`;
  const postalInputClass = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityInputClass = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name" placeholder="name">
          Your Name
        </label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && (
          <p className="invalid-message">Please enter a valid name!</p>
        )}
      </div>
      <div className={idInputClass}>
        <label htmlFor="id">Id Number</label>
        <input
          type="text"
          id="id"
          placeholder="ETS-1234/12"
          value="ETS-"
          ref={idInputRef}
        />
        {!formInputsValidity.id && (
          <p className="invalid-message">Please enter a valid id!</p>
        )}
      </div>
      <div className={postalInputClass}>
        <label htmlFor="postal">Block Number</label>
        <input
          type="text"
          id="postal"
          value="B-"
          ref={postalInputRef}
          placeholder="B12"
        />
        {!formInputsValidity.postalCode && (
          <p className="invalid-message">Please enter a valid Block Number!</p>
        )}
      </div>
      <div className={cityInputClass}>
        <label htmlFor="city">Phone Number</label>
        <input type="text" id="city" placeholder="09..." ref={cityInputRef} />
        {!formInputsValidity.city && (
          <p className="invalid-message">Please enter a valid City</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
