import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import NotFound from './NotFound'
import { useParams } from 'react-router-dom'


export default class Router extends Component {
  render() {

    function TablaMultiplicarElement(){

      let { minumero } = useParams();

      return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tablamultiplicar/:minumero" 
                element={<TablaMultiplicarElement/>}/>
                {/* para los rutas que no existen, 
                debemos usar un asterisco dentro del path
                y debe ser la utlima etiqueta que tengamos en Route */}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
