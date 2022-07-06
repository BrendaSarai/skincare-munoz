import { Col, Row, Descriptions, Typography, Card, message, Button} from 'antd';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from '../../contexts/CartContext';


const { Title } = Typography;



const ItemDetail = ({item}) => {
  console.log('item que pasa',item)
  const [cantidad,setCantidad] = useState(0);

  const { addItem } = useCartContext()

  const onAdd = (n) => {
    message.success(`Se agregaron ${n} productos al carrito.`,3);
    setCantidad(n);
    addItem({ ...item, cantidad: n })
    
  };
  
  return (
    <Row style={{marginTop:80}}>
      <Col span={12}>
        <Descriptions title="Tarjeta de Información" bordered>
            <Descriptions.Item label="Nombre" span={3}>{item.name}</Descriptions.Item>
            <Descriptions.Item label="Marca" span={2}>{item.brand}</Descriptions.Item>
            <Descriptions.Item label="Categoria">{item.category}</Descriptions.Item>
            <Descriptions.Item label="Descripción"span={3}>{item.description}</Descriptions.Item>
        </Descriptions>
      </Col>
       
      <Col span={12}>
            <Card style={{width:300, textAlign:'right', marginLeft:100}}
              cover={<img src={item.image_link} height={350}/>} bordered={false}>
              <Title level={3}>$ {item.price}</Title>{<br/>}
              {<br/>}
              {cantidad===0 
                ? 
                <ItemCount initial={1} stock={10} onAdd={onAdd} />
                : 
                <Link to='/cart' ><Button type="primary" size="large" block>Comprar</Button></Link>
              } 
           </Card>
      </Col>

    </Row>
  )
}

export default ItemDetail; 