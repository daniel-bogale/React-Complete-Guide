import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cartItemDetail);
  const filteredItems = items.filter((item) => item.quantity > 0);
  let showCartItems = true;
  if (filteredItems.length === 0) {
    showCartItems = false;
  }

  return (
    <Card className={classes.cart}>
      {<h2>Your Shopping Cart</h2>}
      {showCartItems && (
        <ul>
          <CartItem cartItems={filteredItems} />
        </ul>
      )}
      {!showCartItems && <p>No cart is added</p>}
    </Card>
  );
};

export default Cart;
