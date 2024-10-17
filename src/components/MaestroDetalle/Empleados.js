import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {

    

    state = {
        empleados:[]
    }

    loadEmpleados=()=>{
       let idDepartamento = this.props.iddepartamento;
       let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
       let url = Global.urlApiEmpleados + request
       axios.get(url).then(response=>{
            
            this.setState({
                empleados:response.data
            })
       })
        
    }

    componentDidMount=()=>{
        this.loadEmpleados();
    }

    componentDidUpdate=()=>{
        this.loadEmpleados();
    }





  render() {
    return (
      <div style={{border:"solid 1px blue"}}>
        <h2 style={{color:"blue"}}>Empleados</h2>
        <ul>
          {
            //aqui es donde vamos a mostrar el dibujo de los empleados
            this.state.empleados.map((empleado, index)=>{
                return(<li key={index}>
                    {empleado.apellido} - {empleado.oficio} - {empleado.salario}
                    </li>)
            })
          }
        </ul>
      </div>
    )
  }
}
