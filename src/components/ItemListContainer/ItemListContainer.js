import '../../assets/css/Styles.css';
import React, {useState, useEffect} from 'react';
import  'antd/dist/antd.min.css';
import {Row, Spin} from 'antd';
import ItemList from "../ItemList/ItemList";
import { collection, query, getDocs, where } from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';



function ItemListContainer ({categoria}) {
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

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


   return(

      <Row>
         {
            loading ? 
            <div className="spin">
                  <Spin />
            </div>
            : <ItemList productos={items}/>
         }
     </Row>

   );
};


export default ItemListContainer;