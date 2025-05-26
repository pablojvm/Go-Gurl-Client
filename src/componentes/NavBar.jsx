import React from 'react'
import "./Navbar.css"
import Button from 'react-bootstrap/Button';

function NavBar({handleShow}) {
  return (
    <div id="navbar">
      <Button variante="primary" onClick={handleShow} >
        <img src="../public/menu.png" id="menu"></img>
      </Button>
      <img src="../public/logo.png" id="logo"></img>
    </div>
  )
}

export default NavBar
