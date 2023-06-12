// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import{ BrowserRouter as Router, Routes, Route }
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE AUTH USER IS >>> ",authUser);

      if(authUser){
        //the user is logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else{
        //the user is logged off
        dispatch({
          type :'SET_USER',
          user: null,
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
      
        <Routes>
          
          <Route path='/checkout' element={<>
            <Header />
             <Checkout />
             
          </>} />
          <Route path='/login' element={<>
             <Login />
          </>} />

          
          <Route path='/' element={<>
            <Header />
             <Home />
          </>} />

              
        </Routes>
      </div>
    </Router>
  );
}

export default App;
