import React, { Component } from 'react';
import logo from './pchelka.jpg';
import './App.css';
import './Header';


const App = () => {
  return (
    <div className="app-wrapper">
      <div className="bigImage">
        <div className="header">

        </div>

        <div className="nav">
            <img src={logo} alt="" className="logo"/>
            <div className="dropdown">
              <div className="home">
                home
              </div>

              <div className="honey">
                
                  Honey
                
              </div>

              <div className="green">
                
                  Zelen
                
              </div>
            </div>
            <div className="search">
            </div>
            <div className="cart">
            </div>
            <div className="clicker">
            </div>
        </div>
        <div className="slider">

        </div>
        <div className="menu">
        </div>
      </div>
    </div>
  );
}



export default App;
