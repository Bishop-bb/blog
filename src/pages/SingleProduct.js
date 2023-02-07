import { useParams } from "react-router-dom"
import axios from 'axios';


import './../App.css';
import { useEffect, useState } from "react";

function SingleProduct() { 


  const [data, setdata] = useState('');
  const [comments, setComments] = useState('');
 const {id}= useParams();
 const  getSingleProduct = async ()=>{
  try{
        let prod = await axios(`https://dummyjson.com/posts/${id}`)
         setdata(prod.data)
         console.log(prod.data)
      }catch(err){
    console.log(err)
  }
}
 

  // const  getCategory = async ()=>{
  //   try{
  //         let comments = await axios(`https://dummyjson.com/posts/${id}/comments`)
    
  //         //  console.log(comments.data.comments)
  //          setcomments(comments.data)
          
  //          console.log(comments.data)
  //       }catch(err){
  //     console.log(err)
  //   }
  // }

  const url = `https://dummyjson.com/posts/${id}/comments`
  async function getCategory(){
    await axios.get(url)
    .then((results)=>{
      console.log(results)
      const comms = results.data.comments
      console.log(comms)
      setComments(comms)
    })
    console.log(comments)
  }

  useEffect(()=>{
    getSingleProduct()
    getCategory()
    console.log(comments.comments)
    }, []);
    
 
  return (
    <>
    {data.title ?   
    <div>


      <div className="con">
       
        <div className="con11">
           <h3><span>{data.title}</span></h3>
           <span id= "body">{data.body}</span>

         
          
      
        </div>
        
      </div>

      <h5 id="com">COMMENTS</h5>
    

    </div> : '...loading'}

    
{comments?
comments.map((value, index)=>{
  
    return(
      <div id="comments">
      
      <strong>Username: {value.user.username}</strong>
      <div>Comment: {value.body}</div>
      </div>
    )

}): 'loading'

}
    


   
</>



  


    

    
  )
}


export default SingleProduct