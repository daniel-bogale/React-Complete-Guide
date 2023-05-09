import classes from "./CartItem.module.css";
import { cartAction } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = (props) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addHandler = (item) => {
    dispatch(cartAction.addItemToCart(item));
  };
  const subHandler = (id) => {
    dispatch(cartAction.removeItemFromCart(id));
  };

  return (
    <>
      {items.map((item) => {
        return (
          <li key={item.itemId} className={classes.item}>
            <header>
              <h3>{item.title}</h3>
              <div className={classes.price}>
                ${item.totalPrice.toFixed(2)}
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
                <button onClick={subHandler.bind(this, item.itemId)}>-</button>
                <button onClick={addHandler.bind(this, item)}>+</button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default CartItem;
