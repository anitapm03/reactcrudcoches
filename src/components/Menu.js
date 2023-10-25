import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/th.jfif'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div >
        <img src={logo} alt="Bootstrap" width="30" height="30"></img>
        <NavLink className="navbar-brand mb-0 h1" to="/"> Inicio</NavLink>
        <NavLink className="navbar-brand" style={{color: "green"}} to="/crearcoche"> Añadir coche</NavLink>
        
        </div>
        </nav>
      </div>
    )
  }
}
