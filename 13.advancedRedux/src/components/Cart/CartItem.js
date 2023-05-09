import classes from "./CartItem.module.css";
import { cartItemDispatchAction } from "../../store/reduxStore";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const addHandler = (e) => {
    dispatch(cartItemDispatchAction.add());
  };
  const subHandler = (e) => {
    dispatch(cartItemDispatchAction.sub());
  };

  const { title, quantity, total, price } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={subHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
