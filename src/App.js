import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainerAll from './components/ItemListContainer/ItemListContainerAll';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart'
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
              <Route path='/' element={<ItemListContainerAll />} />
              <Route path='/category/:categoria' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </div>
        </Router>
      </CartProvider>  
    );
  }
}

export default App;
