import React, { useState } from 'react'
import { useHistory, useNavigate } from 'react-router';
const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log('form submitted');
    // console.log(email,password)
    const response = await fetch(`http://localhost:5000/api/auth/login`,{
      method: "PUT",
      headers:{
        "Content-Type" : "application/json",
        
      },
      body: JSON.stringify({email,password})
    })  
    const json = await response.json();
    if(json.success){
      console.log(json.authToken);
      localStorage.setItem('token', json.authToken)
      localStorage.setItem('name', json.name)
      navigate("/");
    }
    else{
      alert("Please enter correct credentials");
    }
    setEmail('');
    setPassword('');
  }
  const pwdC = (e)=>{
    setPassword(e.target.value);
  }
  const emlC = (e)=>{
    setEmail(e.target.value);
  }
  return (
    <>
     <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form >
          

          
          <div class="form-outline mb-4">
            <input value={email} onChange={emlC} type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          
          <div class="form-outline mb-3">
            <input value={password} onChange={pwdC} type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          

          <div class="text-center text-lg-start mt-4 pt-2">
            <button onClick={handleSubmit} type="button" class="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
            
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section> 
    </>
  )
}

export default Login
