import React, {useState, useEffect} from 'react';
import EditText from 'react-editext'
import EditableList from 'react-list-editable';
import Info from './Info';
import TabSelector from './TabSelector';
import styled from 'styled-components';
import axios from 'axios';

const Details = ({product, showDescription, setShow, saveDescription, saveList, saveTRL}) => {

    const [level, setLevel] = useState(product.trl.name)
    const [trls, setTrls] = useState([])
    const [editTRL, setEdit] = useState(false)

    useEffect(()=>{
        const gettrls = async () =>{
            const res = await axios.get('/trl/')
            setTrls(res.data.map(t=>t.name))
        }
        gettrls()
    },[])
    
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

    const descriptionText = product.description && removeHTML(product.description.slice(product.description.indexOf(">")+1))
    const categories = product.categories.map( c => c.name)
    const bmodels = product.businessModels.map( m => m.name)
    
    return (
        <section>
                <Info product={product}/>
                <TabSelector 
                    showDescription={showDescription} 
                    setShow={setShow}/>
                {
                showDescription 
                ?                     
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
                :
                <TabAttributesContent>
                    <ListGroup>
                        <List>
                            <label htmlFor="categories">Categories</label>                            
                                <EditList 
                                    list={[...categories]} 
                                    onListChange={(newList)=>saveList('categories', newList)}>
                                </EditList>
                            
                        </List>
                    
                        <List>
                            <label htmlFor="models">Business Models</label>
                            <EditList list={bmodels} onListChange={(newList)=>saveList('businessModels', newList)}></EditList>

                        </List>

                    </ListGroup>
                    
                    <EditableTLR>
                        {!editTRL && <p>{product.trl.name}</p>}
                        
                        {editTRL &&<select onChange={(e)=>setLevel(e.target.value)}>
                            {
                                trls.length && trls.map( (t,i)=> <option key={i}>{t}</option>)
                            }
                        </select>}
                        <button onClick={()=>{
                            editTRL ? saveTRL(level) : setEdit(true)
                        }}>{editTRL ? 'save' : 'edit'}</button>
                        
                    
                    </EditableTLR>
                    </TabAttributesContent>
                
                }
                   
              </section>  
    );
}
const EditableTLR = styled.div`
    margin-top: 1rem;
    background-color: #272e71;
    color: white;
    padding: 0;
    display:flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-top: 1rem;
    }
    select{
        width:80%
    }
    button{
        margin-bottom: 1rem;
    }

`;

const StyledEditText = styled(EditText)`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid black;
    text-align: justify;
    font-size: .85rem;
    flex-direction: column;
    max-width: 30rem;

    button[editext="edit-button"]   {
    display: inline-block;
    align-self: flex-end;
  }
  
  div[editext='view']{
      padding-bottom: 1rem;
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
 
 
    @media screen and (min-width: 600px){
    width: 30vw;
    }
  
 
 
`;
const EditList = styled(EditableList)`
    padding-bottom: 2rem;

    ul {
        list-style-type:none
    };
 
    li {
        display:flex !important;
    }

`;
const TabAttributesContent = styled.div`
    padding: 1rem;    
    font-size: .8rem;

    label {
        font-size: .8rem;
        font-weight: bold;
    }
    ul {
        margin: 0;
        padding: 1rem;       
        color: #272e71;
        list-style-type:none
    };
    li {
        font-size: 0.8rem;
        line-height: 1rem;
        display:flex;
        align-items:center;
        
            input {
                background-color: #272e71;
            }
        
    }
    p {
        padding: 1rem;       
        border: 1px solid #272e71;
    }
`;
const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
   
   align-items: center;
    gap: 1.5rem;
    @media screen and (min-width: 600px){
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        align-items: flex-start;
    }

`;

const List = styled.div`
    max-width: fit-content ;
    border: 1px solid #272e71;
    padding-top: 1rem;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-bottom:1rem;
    label {
        margin-top: 1rem;
    }
    li input {
        padding: 0.1rem !important;
        color:#272e71;
    }
    input {
        padding-bottom: 2rem;
    }

`
export default Details;
