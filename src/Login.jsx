import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Link } from '@mui/material';
import './Login.css';
import { useNavigate} from 'react-router-dom';

const Login = () => {
  const history=useNavigate();
  const [inputs,setInputs]=useState({email:"",password:""})

  const handleLogin = async(e) => {
    e.preventDefault();
    const {email,password}=inputs;
    // Handle login logic here
    const res=await fetch(`http://localhost:4000/login`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,password,
      })
      
    });

    const data=await res.json();
    if(data.status !== "success"||!data){
      window.alert("Login Failed");
    }
    else{
      history('/');
      window.alert("Login Successflly");
    }
  };

  return (
    <Container maxWidth="sm">
      <div className="form-container">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form method='POST'>
          <TextField
            label="Email"
            value={inputs.email}
            name="email"
            onChange={(e) => setInputs({...inputs,[e.target.name]: e.target.value})}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            value={inputs.password}
            name="password"
            onChange={(e) => setInputs({...inputs,[e.target.name]: e.target.value})}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <div className="options-container">
            <Link href="#" variant="body2">
              Forgot Password?
            </Link>
            <Button href="#" variant="outlined" color="primary" onClick={handleLogin}>
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
