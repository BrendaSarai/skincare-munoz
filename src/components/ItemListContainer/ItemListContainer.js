import React, {useState, useEffect} from 'react';
//import {getProductsByCategory} from "../../data/data.js";
import { useParams } from 'react-router';
import  'antd/dist/antd.min.css';
import {Row} from 'antd';
import ItemList from "../ItemList/ItemList";

import { collection, query, getDocs, where } from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';



function ItemListContainer () {
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

   const { categoria } = useParams();
   console.log('categoria:'+categoria);

  
   

   useEffect(() => {
      const getProductsByCategory = async () =>{
         const q =query(collection(db, 'skincare'), where ('category', '==', categoria));
         const querySnapshot = await getDocs(q);
         const docs = [];
         querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
         })
         setItems(docs);
      };
      getProductsByCategory();
      setTimeout(() => {
         setLoading(false);
      }, 300);
   },[categoria])

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