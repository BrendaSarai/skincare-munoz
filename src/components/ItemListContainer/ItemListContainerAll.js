import React, {useState, useEffect} from 'react';
import {getProducts} from "../../data/data.js";
import  'antd/dist/antd.min.css';
import {Row} from 'antd';
import ItemList from "../ItemList/ItemList";




function ItemListContainer () {
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

  
   

   useEffect(() => {
      getProducts()
          .then(res => {
            setItems(res)
            setLoading(false)
        }
            )
          .catch(err => console.log(err))
   }, [])

  console.log("items:", items)
   return(

      <Row>
         
         {
            loading ? <div>Cargando...</div> 
            : <ItemList productos={items}/>
         }
     </Row>

   );
};


export default ItemListContainer;