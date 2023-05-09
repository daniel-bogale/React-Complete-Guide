import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cart-slice";
const ProductItem = (props) => {
  const dispatch = useDispatch();

  const DUMMY_PRODUCT = [
    {
      title: "Test Item",
      description: "This is a first product - amazing!",
      price: 6,
      itemId: "p1",
    },
    {
      title: "Test Item 2",
      description: "This is a first product - amazing!",
      price: 8,
      itemId: "p2",
    },
  ];
  const addToCartHandler = (item, e) => {
    dispatch(cartAction.addItemToCart(item));
  };
  return (
    <>
      {DUMMY_PRODUCT.map((product) => {
        // console.log(product.title);
        return (
          <li key={product.itemId} className={classes.item}>
            <Card>
              <header>
                <h3>{product.title}</h3>
                <div className={classes.price}>${product.price.toFixed(2)}</div>
              </header>
              <p>{product.description}</p>
              <div className={classes.actions}>
                <button onClick={addToCartHandler.bind(this, product)}>
                  Add to Cart
                </button>
              </div>
            </Card>
          </li>
        );
      })}
    </>
  );
};

export default ProductItem;
