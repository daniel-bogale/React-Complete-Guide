import styles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <button className={styles[props.className]} type={props.type}>
      {props.children}
    </button>
  );
};

export default Buttons;
