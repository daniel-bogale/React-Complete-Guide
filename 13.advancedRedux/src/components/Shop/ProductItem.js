import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartAction } from "../../store/cart-slice";
import { useEffect, useMemo } from "react";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const DUMMY_PRODUCT = useMemo(
    () => [
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
    ],
    []
  );

  // useEffect(() => {
  //   console.log(DUMMY_PRODUCT);
  //   fetch("https://react-first-38e92-default-rtdb.firebaseio.com/", {
  //     method: "PUT",
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(DUMMY_PRODUCT),
  //   });
  // }, [DUMMY_PRODUCT]);

  const addToCartHandler = (item, e) => {
    dispatch(cartAction.addItemToCart(item));
  };
  return (
    <>
      {DUMMY_PRODUCT.map((product) => {
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
