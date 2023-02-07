import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate= useNavigate()
    // const storedData = JSON.parse(localStorage.getItem("user"));
    const mainForm = {
        width: '70%',
        margin:'10px auto',
     }
     const formDiv ={
         margin: '2%'
     }
 
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] =useState('');
     const [password, setPassword] = useState('');


     const submitData = (e)=>{
      // console.log(email)
      // console.log(password)
      const storedData = localStorage.getItem('user');
if (storedData) {
  try {
    const data = JSON.parse(storedData);
    console.log(data.email);
    console.log(data.password);
    if(data.email === email && data.password === password){
      localStorage.setItem("loggedIn", "true");
      navigate('/ProductsPage')
    }else{
      alert('Incorrect username or password')
    }
  } catch (error) {
    console.error('Parsing error:', error);
  }
} else {
  console.error('No data found in local storage.');
}




      // console.log(JSON.parse(localStorage.getItem("user[name]")))
      e.preventDefault()

    //     const storedData = JSON.parse(localStorage.getItem('user'));
    // if (storedData.user.email === email && storedData.user.password === password) {
    //   navigate('/ProductPage');
    // } else {
    //   alert('Incorrect username or password');
    // }
     }

     
 
return(
    <form onSubmit={submitData} style={mainForm}>
        <h2 style={{textAlign: 'center', padding: '5px'}}>Login</h2>
        <fieldset> 
        <div style={formDiv}> 
        {name}
            <input type="email" onChange={(e)=>{setEmail (e.target.value)}}
             name='name' placeholder='Your Email' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}}/>
        </div>

        <div style={formDiv}>
          {password }
            <input type="password" onChange={(e)=> {setPassword (e.target.value)}}
             name='password' placeholder='Your Password' style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
        </div>
        <div style={{textAlign: "center", marginBottom: "10px"}}>
            <button type="submit" style={{padding: "11px"}}>Login</button>
        </div>

        
        </fieldset>
        <span><a href="" style={{textDecoration: 'none', padding: "10px"}}>forget password</a></span>
    </form>
)
  }
  
  export default LoginPage