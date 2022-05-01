import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
    
    padding-top: 0.5rem;
    width: 100vw;
    color:#272e71; 
    display: flex;
    justify-content: center;
    

    img {
        height: 1rem;
    }

    @media screen and (min-width: 600px) {
        padding-bottom: 1rem;
        padding-left:1rem;
        justify-content: center;
  
    .img {  
      margin-left: 1rem;
      display:flex;
      align-items: flex-start;
     }
    
  }
`;

const Header = () => {    
    
    return (
        <Head>
            
            <img src="https://img.innoloft.de/logo.svg" alt="logo" />
            
        </Head>
    );
}

export default Header;
