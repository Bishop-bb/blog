 
 import React, {useState} from 'react';
 import { useNavigate } from "react-router-dom";
//  import { useHistory } from 'react-router-dom';

 function RegistrationPage() {
  // const history = useHistory();
  const navigate= useNavigate()
    const mainForm = {
    //    width: '40%',
       margin:'auto',
    }
    const formDiv ={
        marginTop: '2%'
    }

    const [user, setuser] = useState({
      name: '',
      email : '',
      phone: '',
      password : '',
      
    });
    const [errors, setErrors] = useState({
      nameErr: '',
      emailErr: '',
      phoneErr: '',
      password: '',
      confirmPasswordErr: '',

    })
    const handleForm = (e)=>{
       let name= e.target.name;
       let value = e.target.value;
       setuser({
        ...user,
        [name]: value,
       })
    }
    
    const submitData = (e)=>{
      e.preventDefault()

      if(user.name == "" || user.name == 0 ||user.name == null || user.name.trim() == ""){
        setErrors((err)=>{
        return  {
            ...err,
            nameErr: `Name is required`,
          }
        })
      }
      if(user.email == "" || user.email == 0 ||user.email == null || user.email.trim() == "" || user.email.indexOf('@', 3 ) == -1 || user.email.indexOf('.' ) == -1){
        setErrors((err)=>{
        return  {
            ...err,
            emailErr: `Email is required`,
          }
        })
      }
      if( user.phone.startsWith('070') == false && user.phone.startsWith('081') == false && user.phone.startsWith('090') == false && user.phone.length != 11){
        setErrors((err)=>{
        return  {
            ...err,
            phoneErr: `Phone is required`,
          }
        })
        
        
      }
        if(user.password == "" || user.password == 0 ||user.password == null || user.password.trim() == ""){
        setErrors((err)=>{
        return  {
            ...err,
            password: `Password is required`,
          }
        })
      }
      if(user.confirmPassword != user.password){
        setErrors((err)=>{
        return  {
            ...err,
            password: `Password is not a match`,
          }
        })
      }
    
      else{
        localStorage.setItem('user', JSON.stringify(user)) 
       
        navigate('/LoginPage')

  
        console.log(user)
      }
      
    }
  return (
    <div className='container-fluid'>
       <fieldset style={{width: '70%', margin: '100px auto', padding: '1%'}}>
       <form onSubmit={submitData} style={mainForm }>
        <div style={formDiv}> 
        {user.name}
            <input type="text" onChange={handleForm}
             name='name' placeholder='Your Name' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}}/>
            <strong>{errors.nameErr}</strong>
          </div>
            <div style={formDiv}>
            {user.email}
            <input type="email" name='email'
            onChange={handleForm}
             placeholder='Your Email' 
              style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
              <strong>{errors.emailErr}</strong>
        </div>
        <div style={formDiv}>
        {user.phone}
            <input type="tel"
             name='phone' onChange={handleForm}
              placeholder='Your phone'
               style={{width: '100%',
                height:'40px', border:'none',
                 borderBottom: '1px inset green'}} />
                 <strong>{errors.phoneErr}</strong>
        </div>
        <div style={formDiv}>
        {user.password}
            <input type="password"
             name='password'
             onChange={handleForm}
              placeholder='Your Password'
               style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
               <strong>{errors.password}</strong>
        </div>

        <div style={formDiv}>
        {user.confirmPassword}
            <input type="confirmPassword"
             name='confirmPassword'
             onChange={handleForm}
              placeholder='Confirm Password'
               style={{width: '100%', height:'40px', border:'none', borderBottom: '1px inset green'}} />
               <strong>{errors.confirmPasswordErr}</strong>
        </div>
        <button type='submit' style={{padding: '12px',marginTop: '10px'}}>Register</button>
       </form>
       </fieldset>

    </div>
  )
}

export default RegistrationPage

//  function RegistrationPage() {
//     const Form = {
//         width: '40%',
//         margin: '20px auto'
//     }

//     const Input = {
//         width: '100%', 
//         height:'40px', 
//         border:'none', 
//         borderBottom: '1px inset green'
//     }

//     const [name, setName] = useState('');
//      const [email, setEmail] = useState('');
//      const [phone, setPhone] =useState('');
//      const [password, setPassword] = useState('');
//      const [address, setAddress] = useState('');
//      const [confirm, setConfirm] = useState('');

//     return(
//         <div style={Form}>
//             <h2 style={{textAlign: 'center', padding: '5px'}}>Registration Form</h2>
//             <fieldset>
//                 <form>
//                     <div style={{margin: '2%'}} >
//                         {name}
//                         <input style={Input} type= 'text' onChange={(e)=>{setName (e.target.value)}}
//                         name = 'name' placeholder='Enter your name' />
//                     </div>

//                     <div style={{margin: '2%'}}>
//                         {phone}
//                         <input style={Input}  type= 'text' onChange={(e)=>{setPhone (e.target.value)}}
//                         name = 'name' placeholder='Enter your phone' />
//                     </div>

//                     <div style={{margin: '2%'}}>
//                         {email}
//                         <input style={Input}  type= 'email' onChange={(e)=>{setEmail (e.target.value)}}
//                         name = 'name' placeholder='Enter your email' />
//                     </div>

//                     <div style={{margin: '2%'}}>
//                         {address}
//                         <input style={Input}  type= 'text' onChange={(e)=>{setAddress (e.target.value)}}
//                         name = 'name' placeholder='Enter your address' />
//                     </div>

//                     <div style={{margin: '2%', border:'none', paddingBottom: '10px', borderBottom: '1px inset green'}}>
//                         <h4>Gender</h4>
//                         <div style={{marginTop: '1%'}}>
//                             <input id="ma" 
//                             name= "male"
//                             value="male" type="radio"/>
//                             <span>Male</span>
//                         </div>
//                         <div>
//                             <input id="ma" 
//                              name= "male"
//                             value="male" type="radio"/>
//                             <span>Female</span>
//                         </div>
//                     </div>

//                     <div style={{margin: '2%'}}>
//                         {password}
//                         <input style={Input} type= 'password' onChange={(e)=>{setPassword (e.target.value)}}
//                         name = 'name' placeholder='Enter your password' />
//                     </div>

//                     <div style={{margin: '2%'}} >
//                         {confirm}
//                         <input style={Input} type= 'password' onChange={(e)=>{setConfirm (e.target.value)}}
//                         name = 'name' placeholder='Confirm your password' />
//                     </div>

                    

//                     <div  style={{margin: '2%', border:'none', paddingBottom: '10px', borderBottom: '1px inset green'}}>
//                         <h4>Marital Status</h4>
//                         <div style={{marginTop: '1%'}}>
//                             <input id="ma"
//                              value="male" 
//                              name= "status"
//                              type="radio"/>
//                             <span>Engaged</span>
//                         </div>
//                         <div>
//                             <input id="female" 
//                             value="female"
//                             name= "status" 
//                             type="radio"/>
//                             <span>Single</span>
//                         </div>
//                     </div>

//                     <div style={{textAlign: "center", marginBottom: "10px"}}>
//             <button type="submit" style={{padding: "11px"}}>Submit</button>
//         </div>
//                 </form>
//             </fieldset>

            
        
//         </div>
//     )
//   }
  
//   export default RegistrationPage