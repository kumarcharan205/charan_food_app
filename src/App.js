// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
// import Header from './foodApp/Layout/Header';
// import Cart from './foodApp/Cart/Cart';
// import Card from './foodApp/UI/Card';
// import MealItem from './foodApp/Meals/MealItem/MealItem';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header> */}
//        <Header />
//      <MealItem></MealItem>
//       {/* <Card /> */}
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';

// import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// import Cart from './components/Cart/Cart';
// import CartProvider from './store/CartProvider';
import Header from './foodApp/Layout/Header';
import Meals from './foodApp/Meals/Meals';
import Cart from './foodApp/Cart/Cart';
import CartProvider from './foodApp/store/CartProvider';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { FoodApp } from './foodApp/FoodApp';
import React,{Fragment} from 'react';
import "./App.css";
import { BrowserRouter as  Router,Routes,Route } from 'react-router-dom';

function App() {
  

  return (
    <Fragment>
<Router>
  <Routes>
    <Route exact path ="/" element={<SignIn />}></Route>
    <Route exact path ="/SignUp" element={<SignUp />}></Route>
    <Route exact path ="/FoodApp" element={<FoodApp />}></Route>
   
  </Routes>
</Router>
    </Fragment>
//  <FoodApp />
    // <SignIn />
    // <SignUp />


  );
}

export default App;