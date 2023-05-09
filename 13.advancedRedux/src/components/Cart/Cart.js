import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  let isEmpty = false;
  if (totalQuantity === 0) {
    isEmpty = true;
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!isEmpty && (
        <ul>
          <CartItem />
        </ul>
      )}
      {isEmpty && <p>No cart is added</p>}
    </Card>
  );
};

export default Cart;
