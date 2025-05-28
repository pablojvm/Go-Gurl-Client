import React from 'react'
import "./NavBar.css"
import Button from 'react-bootstrap/Button';

function NavBar({handleShow}) {
  return (
    <div id="navbar">
      <Button variant="outline-light" onClick={handleShow} >
        <img src="menu.png" id="menu"></img>
      </Button>
      <img src="logo.png" id="logo"></img>
    </div>
  )
}

export default NavBar
