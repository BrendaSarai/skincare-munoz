import { Avatar, List, Space, Row, Col, Button } from 'antd';
import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {DeleteOutlined} from '@ant-design/icons';
import { CartContext } from '../../contexts/CartContext';






const Cart = () => {

  const {cart, totalPay, removeItem} = useContext(CartContext);
  console.log("cart: ",cart);
  console.log("totalPay: ",totalPay());


  return (
    <Row>
      <Col span={12}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={cart}
          footer={
            <div>
              ¿Estás listo para comprar? <h3>{totalPay()}</h3> 
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={
                <img
                  width={272}
                  alt={item.name}
                  src={item.image_link}
                />
              }
            >
              <List.Item.Meta
                title={<Link to={`/item/${item.id}`}>{item.name}</Link>}
                description={item.cantidad}
              />
              {item.price}
              <br></br>
              <br></br>
              <Button type="primary" size="large"
                icon={<DeleteOutlined/>} block onClick={ () => removeItem(`${item.id}`)}>Eliminar Producto </Button>
            
            </List.Item>
          )}
        />
      </Col>
    </Row>

  )
}

export default Cart