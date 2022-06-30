import { Col, Row, Descriptions, Typography, Card, message, Button} from 'antd';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";


const { Title } = Typography;


const ItemDetail = ({id,img,name,description,brand,category,price}) => {
  const [cantidad,setCantidad] = useState(0);

  const onAdd = (n) => {
    message.success(`Se agregaron ${n} productos al carrito.`,3);
    setCantidad(n);
  };
  
  return (
    <Row style={{marginTop:80}}>
      <Col span={12}>
        <Descriptions title="Tarjeta de Información" bordered>
            <Descriptions.Item label="Nombre" span={3}>{name}</Descriptions.Item>
            <Descriptions.Item label="Marca" span={2}>{brand}</Descriptions.Item>
            <Descriptions.Item label="Categoria">{category}</Descriptions.Item>
            <Descriptions.Item label="Descripción"span={3}>{description}</Descriptions.Item>
        </Descriptions>
      </Col>
       
      <Col span={12}>
            <Card style={{width:300, textAlign:'right', marginLeft:100}}
              cover={<img src={img} height={350}/>} bordered={false}>
              <Title level={3}>$ {price}</Title>{<br/>}
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