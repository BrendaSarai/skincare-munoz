import { Row, Spin } from 'antd';
import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import '../../assets/css/styles.css';
import ItemDetail from "../ItemDetail/ItemDetail";

import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import {db} from '../../firebase/firebaseConfig';

function ItemDetailContainer() {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        const getProductsById = async () =>{
            const q =query(collection(db, 'skincare'), where (documentId(), '==', id));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
               docs.push({...doc.data(), id: doc.id});
            })
            setItem(docs);
        };
        getProductsById();
        setLoading(false);
    }, [id])

    return (
        <Row>
   
        {loading ? (
            <div className="spin">
                <Spin />
            </div>
        ):(
            item.map((data) =>{
                return <ItemDetail product={data}/>;
            })
        )}
        </Row>
    )
}

export default ItemDetailContainer