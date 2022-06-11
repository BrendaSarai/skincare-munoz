import { Card} from 'antd';
import React from 'react';
import  'antd/dist/antd.min.css';
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
   return(
      <Card size="small" title="Nueva Card"  style={{ width: 600 }}>
      <p>{greeting}</p>
      <ItemCount/>
    </Card>
   );
};


export default ItemListContainer;