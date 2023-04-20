import styles from "./App.module.css";
import Card from "./component/UI/Card/Card";
import Form from "./component/Form/Form";
import UserField from "./component/UserField/UserField";
// import Overlay from "./component/Overlay/Overlay";
import { useState } from "react";

function App() {
  const initialUser = [
    { name: "Max", age: 31 },
    { name: "Dan", age: 23 },
  ];
  const [currentUsers, setCurrentUser] = useState(initialUser);

  const addUserHandler = (val) => {
    setCurrentUser((prev) => {
      return [val, ...prev];
    });
  };
  // console.log(currentUsers);

  return (
    <div className={styles.relative}>
      <Card>
        <Form onUserAdded={addUserHandler}></Form>
      </Card>
      <Card>
        {currentUsers.map((val) => {
          return <UserField value={val} />;
        })}
        {/* { 
        currentUsers.forEach((val) => (<UserField data={val}> val </UserField>}
      */}
      </Card>
    </div>
  );
}

export default App;
