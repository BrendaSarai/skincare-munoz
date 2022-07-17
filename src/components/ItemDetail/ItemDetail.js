import { Col, Row, Descriptions, Typography, Card, message, Button} from 'antd';
import React, { useContext, useState  } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from '../../contexts/CartContext';


const { Title } = Typography;



const ItemDetail = ({product}) => {
  console.log('item que pasa',product)
  const [cantidad,setCantidad] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (n) => {
    message.success(`Se agregaron ${n} productos al carrito.`,3);
    setCantidad(n);
    addItem({ ...product, quantity: n })
    
  };
  
  return (
    <Row style={{marginTop:80}}>
      <Col span={12}>
        <Descriptions title="Tarjeta de Información" bordered>
            <Descriptions.Item label="Nombre" span={3}>{product.name}</Descriptions.Item>
            <Descriptions.Item label="Marca" span={2}>{product.brand}</Descriptions.Item>
            <Descriptions.Item label="Categoria">{product.category}</Descriptions.Item>
            <Descriptions.Item label="Descripción"span={3}>{product.description}</Descriptions.Item>
        </Descriptions>
      </Col>
       
      <Col span={12}>
            <Card style={{width:300, textAlign:'right', marginLeft:100}}
              cover={<img src={product.image_link} height={350}/>} bordered={false}>
              <Title level={3}>$ {product.price}</Title>{<br/>}
              {<br/>}
              {cantidad===0 
                ? 
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                : 
                <Link to='/cart' ><Button type="primary" size="large" block>Terminar mi compra</Button></Link>
              } 
           </Card>
      </Col>

    </Row>
  )
}

export default ItemDetail; 