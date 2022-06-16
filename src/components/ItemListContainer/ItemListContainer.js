import {Card, message} from 'antd';
import React from 'react';
import  'antd/dist/antd.min.css';
import ItemCount from "../ItemCount/ItemCount";

const onAdd = (n) => {
   message.success(`Se agregaron ${n} productos al carrito.`,3);
   
};

const ItemListContainer = ({greeting}) => {
   return(
      <Card size="small" title="Nueva Card"  style={{ width: 600 }}>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </Card>
   );
};


export default ItemListContainer;