import React from 'react';
import GiveWallet from './GiveWallet';
import myCard from '/Users/seojunkwak/Desktop/namecard/card-react-app/src/myCard.png';
import './App.css'

export default function MyWallet(){

    return(
        
        <div className="MyWallet">
           <p className="HeroMessage">
               Archive 
               <br/>
               My People
               <br/>
               In my Pocket
           </p>
            <div className="myCard"/> 
            <p className="MiniMessage">
                we connect assholes together to be

            </p>
        </div>
    )
};