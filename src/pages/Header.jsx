import React from "react";
import {
  Redirect,
  Link
}from "react-router-dom";


function Header() {
  function handleSalir(){
    localStorage.setItem('token', 'false');
  }
  return (
    <nav>
        <div className="logo">
        </div>
        <ul>
          <li> <a onClick={handleSalir}><Link to="/Login">Salir</Link></a> </li>
          <li> <a><Link to="/Home">Home</Link></a> </li>
        </ul>
    </nav>
  );
}
export default Header;