import { List, Row, Col, Button} from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {DeleteOutlined} from '@ant-design/icons';
import { CartContext } from '../../contexts/CartContext';
import '../../assets/css/styles.css';
import img from '../../assets/img/cartEmpty.png';



const Cart = () => {

 
  const {cart, totalPay, removeItem, clear} = useContext(CartContext);
  const [loading, setLoading] = useState(true)



     
  useEffect(() => {
    if (cart.length >= 1){
      setLoading(false);
    }else{
      setLoading(true);
    }
  },[cart]);

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={18} offset={1} className="gutter-row">
        {loading ? (
          <div style={{textAlign:'center'}}>
            <img 
              width={'50%'}
              height={'50%'}
              src={img}
            />
            <h3>Aún no has agregado productos!</h3>
            <Link  to="/"><Button size="large" className="primary" icon={<ShoppingCartOutlined/>}>Comprar</Button></Link>
          </div>  
        ):(
          <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 3,
          }}
          dataSource={cart}
          footer={
            <div>
              ¿Estás listo para comprar? <h1>Total: {totalPay()}</h1> 
              <Link  to="../register/"><Button size="large" className="primary" icon={<ShoppingCartOutlined/>}>Continuar Compra</Button></Link>
              <Button className="primary" size="large" onClick={ () => clear()} style={{width:200, marginLeft:730}}>Limpiar carrito</Button>
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.id}
              extra={
                <img
                  width={200}
                  height={250}
                  alt={item.name}
                  src={item.image_link}
                />
              }
            >
              
              <h1>{<Link to={`/item/${item.id}`}>{item.name}</Link>}</h1>
              <h3>Cantidad: {item.quantity}</h3>
              <h3>Precio Unidad:${item.price}</h3>
              <h3>Precio Total:${item.quantity * item.price}</h3>
              <br></br>
              <br></br>
              <Button type="danger" size="large"
                icon={<DeleteOutlined/>}  onClick={ () => removeItem(`${item.id}`)}>Eliminar Producto </Button>
            
            </List.Item>
          )}
          
        />
        )}
      </Col>
    </Row>
    

  )
}

export default Cart