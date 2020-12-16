import React, { Component } from 'react';
import './style.css'
import logo from '../../img/logo2.png'
import icon from '../../img/icon-user.png'

class Headerr extends Component {

  render() {
    return (
        <section className="header">
          <div className="box_logo">  
            <img className="logo" src={logo} alt="" />
          </div>   
          <div className="box_panel">
            <a className="title_panel" href="" >Filmes</a>
            <a className="title_panel" href="" >Séries</a>
            <a className="title_panel" href="" >Minha lista</a>
          </div>  
          <div className="box_icon">
            <img className="icon" src={icon} alt="" />
          </div>   
        </section> 
    );
  }
}

export default Headerr; 
