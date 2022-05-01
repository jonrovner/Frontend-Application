import React from 'react';
import styled from 'styled-components';

const TabSelector = ({showDescription, setShow}) => {
    return (
        <Tabs>
        {
        showDescription ? <>
            <ActiveTabButton >Description</ActiveTabButton>
            <TabButton onClick={()=>setShow(!showDescription)}>Attributes</TabButton>                        
            </>
            :
            <>
            <TabButton onClick={()=>setShow(!showDescription)}>Description</TabButton>
            <ActiveTabButton>Attributes</ActiveTabButton>                    
            </>
        }                                        
    </Tabs>
    );
}

const Tabs = styled.section`
    
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: space-between;

`;

const TabButton = styled.button`
    flex: 1;
    background-color: gray;
    padding:.5rem 1rem;
    color: white;
    border: none;
    
    `;

const ActiveTabButton = styled.button`
   
    flex: 1;
    background-color: #272e71;
    padding:.5rem 1rem;
    color: white;
    border: none;

`;

export default TabSelector;
