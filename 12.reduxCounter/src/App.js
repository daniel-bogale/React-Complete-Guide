import Counter from "./components/Counter";
import Auth from "../src/components/Auth";
import Header from "../src/components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      {isAuthenticated && <Counter />}
    </>
  );
}

export default App;
