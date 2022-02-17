import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Link,NavLink } from 'react-router-dom';
import Owner from "./Owners";
import { Router,Routes,Route } from 'react-router-dom';   
import React from "react";
import Vector from './Vector.png'
import AllModal from "./AllModal";
import "./App.css"
import "./index.css"
import Vector2 from './Vector2.png'
import MyCard from "./MyCard";
import CardDetail from "./CardDetail";
import { getKeplrFromWindow } from "@keplr-wallet/stores";





export default function App(){
   

    



    return(
        <div className="App">
      <div className="header">
      <BrowserRouter>
<Routes>
<Route path="/Home" element={<Home/>}>
  
</Route>
<Route path="/Owner" element={<Owner/>}/> 
<Route path="/CardCard/:cardID" element={<CardDetail/>}></Route>

</Routes>
<Link to="/Home"><div className="serviceName">CARDAUS</div></Link>
<Link to="/Owner"  style={{ textDecoration: 'none' }}><p className="headerInfo3">내 명함을 가진 사람들은?</p></Link>

</BrowserRouter>
          <MyCard >
              
          </MyCard>


                <AllModal/>
                </div>
                <img src={Vector} alt=''
                className="Vector1"/>

                <img src={Vector2} alt=''
                className="Vector2"/>

  
                
         
     
        </div>
     
       

    )
}
