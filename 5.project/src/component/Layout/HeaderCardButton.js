import styles from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart_context";

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.item.reduce((cur, val) => cur + val, 0);
  return (
    <button onClick={props.onClick} className={`${styles.button}`}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
