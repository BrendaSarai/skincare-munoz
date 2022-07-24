import { Modal } from 'antd';
import  { useEffect } from 'react';

const Aviso = ({id}) => {
   
    useEffect(() => {
        info();
      }, []);

    const info = () => {
        Modal.info({
          title: '¡Felicidades!',
          content: (
            <div  style={{textAlign:'center' }}>
              <p>Tu compra se ha realizado correctamente</p>
              <p>El folio de seguimiento es:</p>
              <h4>{id}</h4>
            </div>
          ),
          onOk() {window.location.href = "/";},
        });
      };
}

export default Aviso