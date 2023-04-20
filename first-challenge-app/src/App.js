import styles from "./App.module.css";
import Card from "./component/UI/Card/Card";
import Form from "./component/Form/Form";
import UserField from "./component/UserField/UserField";
import Overlay from "./component/Overlay/Overlay";
import { useState } from "react";

function App() {
  const initialUser = [
    { name: "Max", age: 31, id: 3434 },
    { name: "Dan", age: 23, id: 344 },
  ];
  const [currentUsers, setCurrentUser] = useState(initialUser);

  const [displayValue, setDisplayValue] = useState(true);

  const toggleDisplayValue = () => {
    setDisplayValue((val) => !val);
  };

  const addUserHandler = (val) => {
    setCurrentUser((prev) => {
      return [val, ...prev];
    });
  };

  return (
    <div className={styles.relative}>
      <Card>
        <Form onUserAdded={addUserHandler}></Form>
      </Card>
      <Card>
        {currentUsers.map((val) => {
          return <UserField value={val} key={val.id} />;
        })}
      </Card>
      <Overlay
        display={displayValue}
        toggleOverlay={toggleDisplayValue}
      ></Overlay>
    </div>
  );
}

export default App;
