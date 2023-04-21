import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";

import Card from "../UI/Card/Card";
import Buttons from "../UI/Buttons/Buttons";
import React from "react";

const JsxContent = (props) => {
  return (
    <div className={styles["overlay-container"]} onClick={props.cancelHandler}>
      <Card>
        <h2>Invalid input</h2>
        <p>{props.message}</p>
        <Buttons className={"small"} okay={props.okay}>
          Okay
        </Buttons>
      </Card>
    </div>
  );
};

const Overlay = (props) => {
  if (!props.errorOccured) return;
  const cancelHandler = (e) => {
    if (e.target.className !== styles["overlay-container"]) return;

    props.toggleOverlay();
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <JsxContent
          cancelHandler={cancelHandler}
          okay={props.toggleOverlay}
          message={props.message}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Overlay;
