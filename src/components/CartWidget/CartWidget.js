import React, {useContext} from 'react';
import { Space,  Badge  } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { CartContext } from '../../contexts/CartContext';



function CartWidget()  {
   const {totalProducts} = useContext(CartContext);
   let n = totalProducts()
  return (
    <Space>
      <Badge count={n}>
        <ShoppingCartOutlined  style={{ fontSize: 30,  color: '#ffffff' }} />
      </Badge>
    </Space>
  )
  
  
  
}

export default CartWidget