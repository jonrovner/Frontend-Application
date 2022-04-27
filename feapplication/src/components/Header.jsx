import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const Head = styled.div`
    width: 100vw;
    color:#272e71; 
    display:flex;       
    
    justify-content: space-evenly;
    align-items: center;

    img {
        height: 1rem;
    }

    

`;

const Header = () => {    
    
    return (
        <Head>
            
            <img src="https://img.innoloft.de/logo.svg" alt="logo" />
            
            <Navigation />
        </Head>
    );
}

export default Header;
