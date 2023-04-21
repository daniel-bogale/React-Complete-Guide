import Form from "./component/Form/Form";
import UserField from "./component/UserField/UserField";
import Overlay from "./component/Overlay/ErrorModal";
import React, { useState } from "react";

function App() {
  const initialUser = [
    { name: "Max", age: 31, id: 3434 },
    { name: "Dan", age: 23, id: 344 },
  ];
  const [currentUsers, setCurrentUser] = useState(initialUser);
  const [displayValue, setDisplayValue] = useState(false);
  const [errorMessage, setMessage] = useState(
    "Please enter a valid name and age (non-empty values)"
  );

  const toggleDisplayValue = () => {
    setDisplayValue((val) => !val);
  };

  const addUserHandler = (val) => {
    if (val.name === "" || val.age === "") {
      toggleDisplayValue();
      return;
    }

    if (+val.age < 1) {
      setMessage("Please enter a valid age (>0)");
      toggleDisplayValue();
      return;
    }
    setCurrentUser((prev) => {
      return [val, ...prev];
    });
  };

  return (
    <React.Fragment>
      <Form onUserAdded={addUserHandler}></Form>

      <UserField users={currentUsers} />

      <Overlay
        errorOccured={displayValue}
        toggleOverlay={toggleDisplayValue}
        message={errorMessage}
      ></Overlay>
    </React.Fragment>
  );
}

export default App;
