import  {useEffect} from 'react'
import { Route, Routes } from "react-router";
import Main from './components/Main';
import Header from './components/Header';
import Product from './components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { get_config } from './redux/actions';
import './App.css';
import Navigation from './components/Navigation';

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(get_config(1))
  }, [dispatch])

  const appConfig = useSelector(state => state.config)
  
  console.log('app id: ', appConfig)

  return (
  
  <div className='App'>
    
    <Header />
    <section className='content'>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

    </section>
  
  </div>   
  );
}

export default App;
