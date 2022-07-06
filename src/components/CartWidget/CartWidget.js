import React, {useContext} from 'react';
import { Space,  Badge  } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { useCartContext } from '../../contexts/CartContext';



function CartWidget()  {
   const {totalProducts} = useCartContext()
   let n = totalProducts()
  return (
    <Space>
      <Badge count={n}>
        <ShoppingCartOutlined style={{ fontSize: 30 }} />
      </Badge>
    </Space>
  )
  
  
  
}

export default CartWidget