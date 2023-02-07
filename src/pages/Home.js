
import './../App.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsPage from './ProductsPage';
import Product from '../components/Product';
import { useLocation } from 'react-router-dom';



function HomePage() {
  const [products, setProducts] =useState([]);
  const [search, setSearch] = useState(''); 
  // const location = useLocation();
  async function getProduct(){
    try{
      let product;
      if(!search.trim()){
        product = await axios('https://dummyjson.com/products?limit=12');
  }else{
    product = await axios(`https://dummyjson.com/products/search?q=${search}`);
  }
    if(product.status === 200){
      setProducts(product.data.products)
    }
    }catch(err){
      console.log(err)
    }
  } 
 


  
    const addProduct=()=>{
      if(localStorage.key('product') && products.length > 0){
      let prod = JSON.parse(localStorage.getItem('product'));
         console.log(prod )
      setProducts(products.push(prod))
    }



    return 
  
    // products.push(JSON.parse(localStorage.getItem('product')))
  }
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.product) {
      let storedProducts = JSON.parse(localStorage.getItem("products")) || [];
      storedProducts.push(location.state.product);
      setProducts(storedProducts);
    }
  }, [location]);
  
   useEffect(()=>{
    addProduct()
    // console.log(products)
   }, [])
    useEffect(()=>{
        getProduct();
        
    }, [products])

       return(
          <>
              <p>
                <input type='search' name="search" placeholder="Search by product name" onChange={(e)=> setSearch(e.target.value)} />
              </p>
            <div className="main">
             
              {products.length > 0 ? products.map((value, index)=>{
                const {name, img, price, description} = value;
               return(
                  <Product key={index}  {...value} />
               )
              }) :"Loading..."}
    
       </div>
       </>
            )
}

export default HomePage

// function CarouselFadeExample() {

  

//   const [products, setProducts] =useState([]);
//   const [search, setSearch] = useState(''); 
//   async function getProduct(){
//     try{
//       let product;
//       if(!search.trim()){
//         product = await axios('https://dummyjson.com/products?limit=12');
//   }else{
//     product = await axios(`https://dummyjson.com/products/search?q=${search}`);
//   }
//     if(product.status === 200){
//       setProducts(product.data.products)
//     }
//     }catch(err){
//       console.log(err)
//     }
//   } 

  
//   const addProduct=()=>{
//     if(localStorage.key('product') && products.length > 0){
//     let prod = JSON.parse(localStorage.getItem('product'));
//        console.log(prod )
//     setProducts(products.push(prod))
//   }
//   return 

//   // products.push(JSON.parse(localStorage.getItem('product')))
// }
//  useEffect(()=>{
//   addProduct()
//   console.log(products)
//  }, [])
//   useEffect(()=>{
//       getProduct();
      
//   }, [products])
 
  


//   return (
//     <>
       
                      
//       <input  id='input'  type= 'text' style = {{width: '20%', borderRadius: '15px', marginLeft: '5px', marginTop: '5px', textAlign: 'center'}}
//       name = 'search' placeholder='Search products/categories here' onChange={(e)=> setSearch(e.target.value)} />
                 
       
//         <div id='concon'>
          
//           <div id="contain">
//         <Carousel fade>
//       <Carousel.Item>
//         <img
          
//           src="/images/carousel.jpg"
//           alt="First slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           src="/images/carousel3.jpg"
//           alt="Second slide"
//         />
//       </Carousel.Item>
    
//     </Carousel>
//    </div>
//    {/* <Product/> */}

//    <div id='box2'>
//       <img src = "/images/2nd slide.png" />
//       <img src = "/images/3rd slide.jpg" />
//     </div>
   
//    </div>
// <div>
//   {/* <ProductsPage/> */}
// </div>
   

//     </>
   
  
//   );
// }

// export default CarouselFadeExample;