import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>MenuRutas
        <ul >
            <li><a href="/">Home</a></li>
            <li><a href="/tablamultiplicar/21">Tabla Multiplicar 21</a></li>
            <li><a href="/tablamultiplicar/5">Tabla Multiplicar 5</a></li>
            <li><a href="/tablamultiplicar/10">Tabla Multiplicar 10</a></li>
        </ul>
      </div>
    )
  }
}
