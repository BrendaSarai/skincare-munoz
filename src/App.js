import React, {Component} from "react";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



class App extends Component {
  render(){
    return (
      <div>
        <NavBar />
        {/*<ItemListContainer/>*/}
        
        
        <ItemDetailContainer/>
       
        
      </div>
    );
  }
}

export default App;
