
import { useParams } from 'react-router-dom';
import './Product.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


function Product(props){
    const navigate= useNavigate()
    
  
        
   
  
      // const data = JSON.parse(storedData);
      
    



    const{id, body, title, tags } = props;
    const [des, setDes] = useState([]);
    
    let url;

    const storedData = localStorage.getItem('loggedIn');
    const data = JSON.parse(storedData);

    const submitData = (e)=>{
    
    if(data === true){
      navigate( `/product/${id}`)
    }else{
      alert('You have to register and login before youo have access to the full details of the blog post')
      // navigate('/')
    }
    }

   
    console.log(props)
    return(
        <>
        {/* {JSON.stringify(props)} */}
        <div className='product col-lg-3 col-md-4 col-sm-6 col-10'>
            <span className='center'> {title}</span>
         
            <p style={{marginTop:'2%'}}>{body} </p>
            <p style={{marginTop:'2%'}}>{tags} </p>
            {/* <Link onSubmit={submitData   } className="btn btn-warning">Read More</Link> */}
            <button style={{backgroundColor: 'orange', padding: '5px 12px', color: 'white'}} onClick={submitData}>Read More</button>
          
        </div>
        </>
    )
}


export default Product