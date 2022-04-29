import React from 'react';
import styled from 'styled-components';

const User = ({user, company}) => {
    return (
        <UserSection>                
           
            <div className='info'>
                <p className='name'>{user.firstName + " "+ user.lastName }</p>
                <p className='company'>{company}</p>
            </div>
            <img src={user.profilePicture} alt="profile" />
                
        </UserSection>
    );
}

const UserSection = styled.section`
    height: 3rem;
    background-color: #272e71;
    color: aliceblue;
    display:flex;
    gap:1rem;
    justify-content: space-between;
    align-items: center;
    
    img {
        height: 2rem;
        width: 2rem;
        border-radius: 1rem;
        padding-right: 1rem;
    }
    .info {
        display: flex;
        gap: 1rem;
    }
    .name {
        padding-left: 1rem;
        font-weight: bold;
    }
    .company{
        justify-self: flex-start;
    }
`

export default User;
