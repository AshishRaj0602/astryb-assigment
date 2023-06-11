import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const history=useNavigate();
  const [inputs, setInputs] = useState({name:"",email:"", password:"",cnfPass:""});
  const handleSignup = async(e) => {
    e.preventDefault();
    // Handle signup logic here
    const {name, email, password, cnfPass} =inputs;

    const res=await fetch(`/signup`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,email,password,cnfPass
      })
    });

    const data=await res.json();
    console.log(data);
    if(data.status !== "success"||!data){
      window.alert("Signup Failed");
    }
    else{
      history('/')
      window.alert("Successfully Registered");
    }
  };

  return (
    <Container maxWidth="sm">
      <div className="form-container">
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form method='POST' >
          <TextField
            label="Name"
            name='name'
            value={inputs.name}
            onChange={(e) => setInputs({...inputs,[e.target.name]:e.target.value})}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            value={inputs.email}
            name='email'
            type='email'
            onChange={(e) => setInputs({...inputs,[e.target.name]:e.target.value})}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,[e.target.name]:e.target.value})}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Conferm Password"
            type="password"
            name='cnfPass'
            value={inputs.cnfPass}
            onChange={(e) => setInputs({...inputs,[e.target.name]:e.target.value})}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" onClick={handleSignup} fullWidth>
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;

