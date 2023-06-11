import React from 'react';
import Signup from './Signup';
import Login from './Login';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
const App = () => {
  return (
    <div className='App'>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </div>
  );
};

export default App;
