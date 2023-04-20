import styles from "./Overlay.module.css";

import Card from "../UI/Card/Card";
import Buttons from "../UI/Buttons/Buttons";

const Overlay = () => {
  return (
    <div className={styles["overlay-container"]}>
      <Card>
        <h2>Invalid input</h2>
        <p>Please enter a valid name and age (non-empty values).</p>
        <Buttons className={"small"}>Okay</Buttons>
      </Card>
    </div>
  );
};

export default Overlay;
