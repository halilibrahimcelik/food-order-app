import { useState } from "react";

import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import CartProvide from "./store/CartProvide";
function App() {
  const [cartIsshowm, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(!cartIsshowm);
  };

  return (
    <CartProvide>
      {cartIsshowm && <Cart onShowCart={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvide>
  );
}

export default App;
