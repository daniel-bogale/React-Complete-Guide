import styles from "./Buttons.module.css";

const Buttons = (props) => {
  const clickHandler = (e) => {
    if (props.className === "small") {
      props.okay();
    }
  };
  return (
    <button
      className={styles[props.className]}
      type={props.type || "button"}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
};

export default Buttons;
