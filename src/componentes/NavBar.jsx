import React from 'react'
import "./Navbar.css"

function NavBar({toggleSideBar}) {
  return (
    <div id="navbar">
      <button onClick={toggleSideBar} >
        <img src="../public/menu.png" id="menu"></img>
      </button>
      <img src="../public/logo.png" id="logo"></img>
    </div>
  )
}

export default NavBar
