import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainerAll from './components/ItemListContainer/ItemListContainerAll';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainerAll />} />
            <Route path='/category/:categoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
