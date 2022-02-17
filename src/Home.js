import './App.css';
import React from 'react';
import MyWallet from './MyWallet';
import ReceiveModal from './ReceiveModal';
import OtpInput from './otpInput';
import { Link,NavLink } from 'react-router-dom';
import { useState } from 'react';
import Vector from './Vector.png'
import MyPocket from './MyPocket.png'
import moment from 'moment';


import { BrowserRouter,Router,Routes,Route } from 'react-router-dom';
import CardList from './CardList';


export default function Home() {
  
  const [post, setPost] = useState([]);
  const CardNumber = 3;
 

  return (
    <div className="Home">
       
     
    
       <MyWallet></MyWallet>
          <br/>
          <br/>
         <CardList/>
          
          <div className="flowShape"/>
        
        <img src={MyPocket} alt='' className="MyPocket">
        </img>
        <div className="Rectangle"></div>
          </div>
  );
}


