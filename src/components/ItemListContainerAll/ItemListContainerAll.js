import '../../assets/css/Styles.css';
import React, {useState, useEffect} from 'react';
import  'antd/dist/antd.min.css';
import {Row, Spin} from 'antd';
import ItemList from "../ItemList/ItemList";
import { collection, query, getDocs } from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';

function ItemListContainer () {
   const [items, setItems] = useState([])
   const [loading, setLoading] = useState(true)

   const getProducts = async () =>{
      const q =query(collection(db, 'skincare'));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
         docs.push({...doc.data(), id: doc.id});
      })
      setItems(docs);
      setLoading(false)
   }
   

   useEffect(() => {
      getProducts();
   }, [])

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