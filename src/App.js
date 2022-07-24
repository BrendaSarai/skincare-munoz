import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Register from "./views/Register/Register";
import Home from './views/Home/Home';
import Category from './views/Category/Category';
// 5 - IMPORTAR NUESTRO HOC PROVIDER Y ENVOLVER NUESTRA APP
import { CartProvider } from './contexts/CartContext';


class App extends Component {
  render(){
    return (
      <CartProvider>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:categoria' element={<Category />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
          </div>
        </Router>
      </CartProvider>  
    );
  }
}

export default App;
