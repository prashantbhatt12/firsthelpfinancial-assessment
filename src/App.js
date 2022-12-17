import { Fragment, useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Layout/Header";
import Shows from "./components/Shows/Shows";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Shows></Shows>
        {/* <Checkout></Checkout> */}
      </main>
    </CartProvider>
  );
}

export default App;
