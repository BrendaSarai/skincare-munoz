import React, {Component} from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


class App extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <ItemListContainer greeting='Hola... Bienvenido a la tienda de SkinCare'/>
    </div>
    );
  }
}

export default App;
