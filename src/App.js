import {BrowserRouter, Switch, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Nav from './components/includes/Nav';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegistrationPage from './pages/RegistrationPage';
import Product from './components/Product';
import SingleProduct from './pages/SingleProduct';
import AddProduct from './pages/AddProduct';
import AdminProducts from './pages/AdminProducts';
import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  return(
   <BrowserRouter>
   <>
   <Nav  />
   <Routes>
      <Route path='/' element={<RegistrationPage />} />
       <Route path="/ProductsPage" element={<ProductsPage />} />
       <Route path="/product/:id" element={<SingleProduct />} />
       {/* <Route path="/RegistrationPage" element={<RegistrationPage />} /> */}
       <Route path='LoginPage' element={<LoginPage/>}/>
    
      <Route path="/app" element={<App/>} />

   </Routes>
   </>
   </BrowserRouter>
  )
}






export default App;