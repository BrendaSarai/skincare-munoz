import React from 'react';
import Item from "../Item/Item";


  
  const ItemList = ({productos}) => {
  
    return (
        <>
            {
                // productos.map((unProducto) => (<Item key={unProducto.id} category={unProducto.category} img={unProducto.img} name={unProducto.name} />))
                productos.map((unProducto) => (<Item key={unProducto.id} {...unProducto} />))

            }
        </>
    );
    
    };
  
 export default ItemList;