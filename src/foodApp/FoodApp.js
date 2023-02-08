 import { useState } from "react";
 import React from "react"
 
 import Header from "./Layout/Header";
 import Cart from "./Cart/Cart";
 import Meals from "./Meals/Meals";
 import CartProvider from "./store/CartProvider";

 export function FoodApp (){

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

 return(
  <div>
 <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
       <Header onShowCart={showCartHandler} />
    <main>
        <Meals />
    </main>
   </CartProvider>
    
     </div>
 );
 };