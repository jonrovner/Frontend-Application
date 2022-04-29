import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { get_product, update_product } from '../redux/actions';
import 'react-list-editable/lib/react-list-editable.css';
import User from './User';
import Details from './Details';

const Product = () => {
    
    const dispatch = useDispatch()
   
    useEffect(()=> {
        dispatch(get_product('6781'))
    }, [dispatch])
    
    const config = useSelector(state => state.config)
    const product = useSelector(state => state.product)  

    const [showDescription, setShow] = useState(true)  

    const saveDescription = (newDescritption) => {
        const newProduct = {...product, description: newDescritption}
        dispatch(update_product(product.id, newProduct ))        
    }    
    const saveList = (newList, target) => {
        dispatch(update_product(product.id, {[target]: newList}))
    }
    const saveTRL = (level) => {
        dispatch(update_product(product.id, {trl:level}))
    }

    return (
        <div>
            {config.hasUserSection && product.user &&
            <User user={product.user} company={product.company.name}/>
            }
                       
            {product.name 
            ? 
            <Details 
                product={product}
                showDescription={showDescription}
                setShow={setShow}
                saveDescription={saveDescription}
                saveList={saveList} 
                saveTRL={saveTRL}/>
         
            : <div>Loading...</div>
            } 
        </div>  
    );
}

export default Product;
