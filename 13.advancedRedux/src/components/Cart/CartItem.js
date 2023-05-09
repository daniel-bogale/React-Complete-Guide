import classes from "./CartItem.module.css";
import { cartItemDispatchAction } from "../../store/reduxStore";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const addHandler = (id) => {
    dispatch(cartItemDispatchAction.add(id));
  };
  const subHandler = (id) => {
    dispatch(cartItemDispatchAction.sub(id));
  };

  return (
    <>
      {props.cartItems.map((item) => {
        return (
          <li key={item.id} className={classes.item}>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>
                ${item.total.toFixed(2)}
                <span className={classes.itemprice}>
                  (${item.price.toFixed(2)}/item)
                </span>
              </div>
            </header>
            <div className={classes.details}>
              <div className={classes.quantity}>
                x <span>{item.quantity}</span>
              </div>
              <div className={classes.actions}>
                <button onClick={subHandler.bind(item, item.id)}>-</button>
                <button onClick={addHandler.bind(item, item.id)}>+</button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default CartItem;
