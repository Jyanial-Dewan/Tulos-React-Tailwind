import { useEffect, useState } from "react"
import {Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import AllProductsPage from './Pages/AllProductsPage';
import MenProductsPage from './Pages/MenProductsPage';
import WomenProductsPage from './Pages/WomenProductsPage';
import ElectronicsPage from './Pages/ElectronicsPage';
import JeweleryPage from './Pages/JeweleryPage';
import SingleProductPage from './Pages/SingleProductPage';
import NotFoundPage from './Pages/NotFoundPage';
import UserListPage from './Pages/UserListPage';
import UserFormPage from './Pages/UserFormPage';
import ProductContext from './Context/ProductContext';
import CartListPage from "./Pages/CartListPage";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  

  const handleClick = (product)=>{
    if(cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
  }

  const handleRemove = (id) =>{
    const array = cart.filter((item) => item.id !==id);
    setCart(array);
  }
  

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();

                setProducts(data);

            } catch(error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();

    }, []);

    
  
  return (
    <ProductContext.Provider value={{products: products, loading: loading, cart: cart, handleClick: handleClick, handleRemove: handleRemove }}>
      <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/all-products' element={<AllProductsPage/>}/>
        <Route path='/all-products/:id' element={<SingleProductPage/>}/>
        <Route path='/men' element={<MenProductsPage/>}/>
        <Route path='/women' element={<WomenProductsPage/>}/>
        <Route path='/electronics' element={<ElectronicsPage/>}/>
        <Route path='/jewelery' element={<JeweleryPage/>}/>
        <Route path='/user-list' element={<UserListPage/>}/>
        <Route path='/user-form' element={<UserFormPage/>}/>
        <Route path='/cart-list' element={<CartListPage/>}/>
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </ProductContext.Provider>
  )
}
