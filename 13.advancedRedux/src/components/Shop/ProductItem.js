import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartItemDispatchAction } from "../../store/reduxStore";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cartItemDetail);
  const addToCartHandler = (id, e) => {
    dispatch(cartItemDispatchAction.add(id));
  };
  return (
    <>
      {products.map((product) => {
        return (
          <li key={product.id} className={classes.item}>
            <Card>
              <header>
                <h3>{product.title}</h3>
                <div className={classes.price}>${product.price.toFixed(2)}</div>
              </header>
              <p>{product.description}</p>
              <div className={classes.actions}>
                <button onClick={addToCartHandler.bind(this, product.id)}>
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
