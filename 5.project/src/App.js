import { Fragment } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
        <Cart />
      </main>
    </Fragment>
  );
}

export default App;
