import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { get_product, update_product } from '../redux/actions';
import EditText from 'react-editext'
import styled from 'styled-components';


const Product = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(get_product('6781'))
    }, [dispatch])

    const [showDescription, setShow] = useState(true)
    
    
    const product = useSelector(state => state.product)
    const config = useSelector(state => state.config)
    
    function removeHTML(str){ 
        var tmp = document.createElement("DIV");
        tmp.innerHTML = str;
        var scripts = tmp.getElementsByTagName( 'script' );

        for(var i = 0; i < scripts.length; i++) {
            var script = scripts[i];
            script.remove();
        }

        return tmp.textContent || tmp.innerText || "";
    }

    const descriptionText = product.description && removeHTML(product.description)

    const saveDescription = (newDescritption) => {
        const newProduct = {...product, description: newDescritption}
        dispatch(update_product('6781', newProduct ))
        
    }
    const [categories, setCategories] = useState( product.categories && product.categories.map( c => c.name))
    const [editCategories, setEditCategories] = useState(false)

    const bmodels = product.businessModels && product.businessModels.map( m => m.name)
    
    console.log(product)

    return (
        <div>
            {config.hasUserSection && <UserSection>
                
                user section

                </UserSection>}
                       
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
                    {
                        showDescription ? <>
                            <ActiveTabButton >Description</ActiveTabButton>
                            <TabButton onClick={()=>setShow(!showDescription)}>Attributes</TabButton>                        
                        </>:
                        <>
                            <TabButton onClick={()=>setShow(!showDescription)}>Description</TabButton>
                            <ActiveTabButton>Attributes</ActiveTabButton>                    
                        </>
                    }                    
                    
                </Tabs>
                {
                    showDescription 
                    ? 
                    <>
                    <StyledEditText  
                        type='textarea'
                        inputProps={{
                            className: 'textarea',
                            
                            style: {
                                outline: 'none',
                                minWidth: 'auto'
                            },
                            rows: 15,
                        }}
  
                        value={descriptionText}
                        onSave={saveDescription}/>
                    </>
                    
                    : <TabAttributesContent>
                        <ListGroup>
                        
                        <List>
                            <label htmlFor="categories">Categories</label>
                            {

                                !editCategories ?
                                <ul name="categories">
                                {categories.map((c, i) => <li key={i}>{c}</li>)}
                                </ul>
                                :
                                <ul>
                                {categories.map((c,i) => 
                                <li key={i}> 
                                    <p>{c}</p>
                                    <button onClick={()=>{
                                        setCategories(categories.filter(cat => cat !== c))
                                        }}>x</button>
                                </li> )
                                
                                }

                            </ul>
                            
                            }
                                                         
                            <button onClick={() =>{ setEditCategories(true)}}>edit</button>
                        </List>

                        
                        
                        <List>

                            <label htmlFor="models">Business Models</label>
                            <ul name="models">
                                {bmodels.map((m,i) => <li key={i}>{m}</li>)}
                            </ul>
                            <button>edit</button>

                        </List>

                        </ListGroup>
                        
                        <p>{product.trl.name}</p>
                      </TabAttributesContent>
                    
                }
                   
              </div>  
            : <div>Loading...</div>
            } 
        </div>  
    );
}
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
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: space-evenly;

`;

const TabButton = styled.button`
    width: 30vh;
    background-color: gray;
    padding:.5rem 1rem;
    color: white;
    border: none;
    
    `;

const ActiveTabButton = styled.button`
   
    width: 30vh;
    background-color: #272e71;
    padding:.5rem 1rem;
    color: white;
    border: none;

`;

const StyledEditText = styled(EditText)`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
    text-align: justify;
    font-size: .85rem;
    flex-direction: column;

    button[editext="edit-button"] {
    display: inline-block;
    align-self: flex-end;
  }
  div[editext="view-container"], div[editext="edit-container"] {
    display: flex;
    flex-direction: column;
    height: 100%;
    

    textarea{
        border:none;
        width: 100%;
        height: 100%;
        line-height: normal;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
}
`;

const TabAttributesContent = styled.div`
    padding: 1rem;    
    font-size: .8rem;

    label{
        font-size: .8rem;
        font-weight: bold;
    }
    ul{
        margin: 0;
        padding: 1rem;       
        color: #272e71;
        list-style-type:none
    };
    li{
        font-size: 0.8rem;
        line-height: 1rem;
    }
    p{
        padding: 1rem;       
        border: 1px solid #272e71;
    }
`;

const UserSection = styled.section`
    height: 2rem;
    background-color: #272e71;
    color: aliceblue;

`

const ListGroup = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

`;
const List = styled.div`
        border: 1px solid #272e71;
        padding-top: 1rem;
        padding-left: .5rem;
        padding-right: .5rem;
        label{
            margin-top: 1rem;
        }

`

export default Product;
