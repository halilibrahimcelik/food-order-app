import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
