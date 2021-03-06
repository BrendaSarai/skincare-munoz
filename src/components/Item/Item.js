import React from 'react'
import {Row, Col, Card, message, Typography, Button} from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Text } = Typography;

const Item = ({name,brand,image_link,price,id}) => {
     
  return (
     <Row>
         <Col span={24}>
            <Card hoverable style={{ width: 250, marginTop: 20, marginRight:20 }}
              cover={<img src={image_link} height={260}/>}>
              <Meta title={name} description={brand} />
              <Text strong>{price}</Text>{<br/>}
              {<br/>}
              <Link to={`/item/${id}`} type="primary" block size="large"> Ver más </Link>
              
           </Card>
        </Col>
     </Row>
  )
}

export default Item; 