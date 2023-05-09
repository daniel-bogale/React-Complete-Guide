import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
// import store from "../../store/reduxStore";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const item = useSelector((state) => state.cartItemDetail);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem item={item} />
      </ul>
    </Card>
  );
};

export default Cart;
