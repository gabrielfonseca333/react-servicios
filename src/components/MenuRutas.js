import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>MenuRutas
        <ul >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tablamultiplicar/21">Tabla Multiplicar 21</NavLink></li>
            <li><NavLink to="/tablamultiplicar/5">Tabla Multiplicar 5</NavLink></li>
            <li><NavLink to="/tablamultiplicar/10">Tabla Multiplicar 10</NavLink></li>
        </ul>
      </div>
    )
  }
}
