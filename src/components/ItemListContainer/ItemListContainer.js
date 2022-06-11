import { Card} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const ItemListContainer = ({greeting}) => {
   return(
      <Card>
        {greeting}
      </Card>
   );
};


export default ItemListContainer;