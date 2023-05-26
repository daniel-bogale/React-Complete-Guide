import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Procucts from "./components/Products";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Procucts />
      </Route>
    </div>
  );
}

export default App;
