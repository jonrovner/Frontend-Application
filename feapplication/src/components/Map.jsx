import styled from 'styled-components';

const StyledMap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;
background-color: #272e71;
color: aliceblue;
padding: 2rem;
order:1;

p{
    font-size: 1rem;
    line-height: 1rem;
    margin:0.25rem;
    padding: 0;
}

@media screen and (min-width: 600px){
    order:3
}
`;

const Map = ({product}) => {

    const { address } = product.company
    const addresString = address.house+ " " + address.street

    return (
        <StyledMap>
            <p>{addresString}</p>
            <p>{address.city.name + " " + address.zipCode}</p>
            <p>{address.country.name}</p>
            
        </StyledMap>
    );
}

export default Map;
