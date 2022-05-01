import React from 'react';
import styled from 'styled-components';

const Info = ({product}) => {
    return (
        <MainInfo>
            <ImageContainer>
                <img className="cover" src={product.picture} alt={product.name} />
                </ImageContainer> 
            <h1>
                {product.name}
            </h1>
            <h3>
                {product.type.name}
            </h3>
        </MainInfo>
    );
};

const MainInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    
    
    h1{ 
        margin-bottom: 1rem;
    }
    h3 {
        margin-top: 0;
    }
    
    
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;
    .cover {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        overflow:hidden;
    }
`;
export default Info;
