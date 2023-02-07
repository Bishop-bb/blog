import Product from '../components/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
 import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([])

  let url;

    async function getProducts(){
      try{
        let product = await axios('https://dummyjson.com/posts?limit=20&skip=10&select=title,reactions,userId');
        console.log(product.data)
        if(product.status === 200){
          setProducts(product.data.posts)
         
        }
      
      }catch(err){
        console.log(err)
      }
    }
      
      useEffect(()=>{
        getProducts()

      }, [])

          return(
              <div className="main row justify-content-center">
               
                  {products.length > 0 ? products.map((value, index)=>{
                  const {id, body, title, tags } = value;
                 return(
                    <Product key={index} id={id}  {...value} />
                 )
                }) :"Loading..."}
      

                  
              </div>
              )
}

export default ProductsPage