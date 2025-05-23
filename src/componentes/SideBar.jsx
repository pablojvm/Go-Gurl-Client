import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"

function SideBar({visible}) {
  return (
    <div className={`sidebar ${visible ? `visible` : ``}`}>
        <h2>Menú</h2>

       <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>

        <Link to="/yourLists">
          <li>Tus Favoritos</li>
        </Link>

        <Link to="/informationPage">
          <li>Investiga!</li>
        </Link>

        <Link to="/aboutUs">
          <li>Conócenos!</li>
        </Link>
      </ul>
      
    </div>
  )
}

export default SideBar
