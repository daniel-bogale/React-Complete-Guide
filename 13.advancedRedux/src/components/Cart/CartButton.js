import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartDisplayDispatchAction } from "../../store/reduxStore";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(cartDisplayDispatchAction.toggle());
  };
  return (
    <button onClick={clickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
