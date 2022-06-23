import React, {useState, useEffect} from 'react';
import  'antd/dist/antd.min.css';
import {Row} from 'antd';
import ItemList from "../ItemList/ItemList";
import {getProducts} from "../../data/data.js";


const ItemListContainer = () => {
   const [items, setItems] = useState([])
   useEffect(() => {
        getProducts()
            .then(res => setItems(res))
            .catch(err => console.log(err))
   }, [])
   return(

      <Row>
         
         {
            items.length > 0 ? <ItemList productos={items} />
            : <div>Cargando...</div>
         }
     </Row>

   );
};


export default ItemListContainer;