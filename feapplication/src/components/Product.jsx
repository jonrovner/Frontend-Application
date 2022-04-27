import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { get_product } from '../redux/actions';
import styled from 'styled-components'

const Image = styled.img`
    width: 100vw;
`;

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        margin-bottom: 1rem;
    }
    h3{
        margin-top: 0;
    }
`;

const Tabs = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;

`;

const TabButton = styled.button`
    background-color: #4d5ce2;
    padding:.5rem 1rem;
    color: white;

`;

const TabContent = styled.div`
    padding: 1rem;
    text-align: justify;

`;

const Product = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(get_product('6781'))
    }, [dispatch])

    const product = useSelector(state => state.product)
    const config = useSelector(state => state.config)

    const description = product && product.description && product.description.slice(product.description.indexOf(">")+1)
    
    console.log('product: ', product)

    

    return (
        <div>
                       
            { product.name 
            ? <div>
                <Image src={product.picture} alt={product.name} />
                <MainInfo>
                    <h1>
                    {product.name}
                    </h1>
                    <h3>
                        {product.type.name}
                    </h3>
                </MainInfo>
                <Tabs>
                    <TabButton>Description</TabButton>
                    <TabButton>Attributes</TabButton>
                </Tabs>
                <TabContent dangerouslySetInnerHTML={{__html: description}}/>
                   
              </div>  
            : <div>Loading...</div>
            } 
        </div>  
    );
}

export default Product;
