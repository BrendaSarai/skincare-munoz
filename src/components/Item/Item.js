import React from 'react'
import {Row, Col, Card, message, Space, Typography, Button} from 'antd';
import ItemCount from "../ItemCount/ItemCount";

const { Meta } = Card;
const { Text } = Typography;

const onAdd = (n) => {
  message.success(`Se agregaron ${n} productos al carrito.`,3);
  
};

const Item = ({name,brand,image_link,price,id}) => {
     
  return (
     <Row>
         <Col span={24}>
            <Card hoverable style={{ width: 250, marginTop: 20, marginRight:20 }}
              cover={<img src={image_link} height={260}/>}>
              <Meta title={name} description={brand} />
              <Text strong>${price}</Text>{<br/>}
              {<br/>}
              <Button type="primary" block size="large"> Ver más </Button>
              {/*<ItemCount initial={1} stock={10} onAdd={onAdd} />*/}
           </Card>
        </Col>
     </Row>
  )
}

export default Item