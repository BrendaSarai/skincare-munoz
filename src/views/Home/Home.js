import React from 'react'
import { Row, Col } from 'antd';
import Carusel from '../../components/Carusel/Carusel';
import ItemListContainerAll from '../../components/ItemListContainerAll/ItemListContainerAll';

const Home = () => {
  return (
    <Row style={{marginTop:80}} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={20} offset={2} className="gutter-row">
        <Carusel/>  
        {<h1
        style={{
            lineHeight:'100px',
            marginTop:80, 
            textAlign:'center',   
            height: '100px',
            color: '#FFFFFF',
            background: '#ee6e73'}}
        >cátalogo de productos</h1>}
        <ItemListContainerAll/>
      </Col>
    </Row>
        
    
    
  )
}

export default Home