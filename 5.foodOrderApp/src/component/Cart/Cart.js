import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart_context";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setIsCheckout(true);
    console.table(cartCtx.items);

    console.log(totalAmount);
    console.log("ordering...");
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {" "}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onToggleCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onToggleCart} />}
      {!isCheckout && (
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={props.onToggleCart}
          >
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};
export default Cart;
