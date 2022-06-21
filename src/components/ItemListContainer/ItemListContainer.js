import React, {useState, useEffect} from 'react';
import  'antd/dist/antd.min.css';
import {Row, Col, Card, message, Divider} from 'antd';
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import {getProducts, listadoProductos} from "../../data/data.js";

const { Meta } = Card;


const ItemListContainer = ({greeting}) => {
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