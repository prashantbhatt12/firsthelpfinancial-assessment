import { Fragment, useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Layout/Header";
import Shows from "./components/Shows/Shows";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/checkout" element={<Checkout />} exact></Route>
          <Route path="/" element={<Shows />} exact></Route>
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
