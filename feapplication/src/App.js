import  {useEffect, useState} from 'react'
import { Route, Routes } from "react-router";
import Main from './components/Main';
import Navigation from './components/Navigation';
import Product from './components/Product';
import { useDispatch } from 'react-redux';
import { get_config } from './redux/actions';

import './App.css';

import axios from 'axios'



function App() {

  const [product, setProduct] = useState({})
  const [appConfig, setApp] = useState({})

  const getProduct = async () => {
    const res = await axios.get('/product/6781/')
    setProduct(res.data)
    
  }

  const getConfig = async () => {
    const res = await axios.get('/configuration/1/')
    setApp(res.data)
  }

  useEffect(()=>{
    getConfig()
    getProduct()
  }, [])

  console.log('app id: ', appConfig)

  return (
  
  <div>{product.name}</div>   
  );
}

export default App;
