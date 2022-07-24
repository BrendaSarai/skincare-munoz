import React from 'react';
import {Row, Col, Card, Button} from 'antd';
import { PlusCircleOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css';


const Item = ({name,brand,image_link,price,id}) => {
     
  return (
     <Row
     style={{textAlign:'center' }}>
        <Col span={24}>
            <Card 
               hoverable 
               style={{ width:340, marginTop: 40, marginRight:30}}
               cover={<img src={image_link} height={320}/>}>
               {<h1>{name}</h1>}
               {<h3>De {brand}</h3>}
               {<h2>$ {price}.00</h2>}
              <Link to={`/item/${id}`}>
                 <Button className="primary" shape="round" icon={<PlusCircleOutlined />} size='large'> 
                     Ver más 
                  </Button>
               </Link>
           </Card>
        </Col>
     </Row>
  )
}

export default Item; 