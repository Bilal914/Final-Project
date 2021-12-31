
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route  } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { useSelector } from 'react-redux';
import ProductWomen from './screens/ProductWomen';
import ProductChildren from './screens/ProductChildren';
import MainScreen from './screens/MainScreen';

function App() {
  
  const cart=useSelector((state)=>state.cart);
  const {cartItems}=cart;
  return (
  
  <BrowserRouter>
  
    <div className="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">SuitUP!</Link>
        </div>
        <div>
          
        <Link to="/ProductsMen">Men</Link>
        <Link to="/ProductWomen">Women</Link>
        <Link to="/ProductChildren">Children</Link>
      </div>
    
      <div>
        <Link to="cart">Cart
        {cartItems.length>0&&(
          <span className='badge'>{cartItems.length}</span>
        )}
        </Link>
        
        <Link to="signin">Sign In</Link>
      </div>
      
    </header>
    <main>
    <Route path='/cart/:id?' component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      <Route path="/" component={MainScreen} exact></Route>
      <Route path="/ProductWomen" component={ProductWomen} exact></Route>
      <Route path="/ProductChildren" component={ProductChildren} exact></Route>
      <Route path="/ProductsMen" component={HomeScreen} exact></Route>
      
     
    </main>
    <footer className="row center">Suit Up</footer>
  </div>
  </BrowserRouter>
 
  );
}

export default App;
