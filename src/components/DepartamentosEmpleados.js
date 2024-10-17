import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DepartamentosEmpleados extends Component {

    selectDepartamento = React.createRef();

    buscarEmpleado=(e)=>{
        e.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        console.log(idDepartamento);

        //que quiero ?hacer qué peticion?
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
        let url = Global.urlApiEmpleados + request;
        axios.get(url).then(response=>{
            console.log(response);
            this.setState({
                empleados: response.data
            })
        })


    }

    state = {
        departamentos: [],
        empleados: []
    }

    loadDepartamentos=()=>{
        console.log("leyendo el servicio");
        let request = "api/departamentos";
        var url = Global.urlApiDepartamentos + request;
        axios.get(url).then(response =>{
            console.log(response.data)
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadDepartamentos();
    }




  render() {
    return (
      <div>
        <h1>Departamentos Empleados</h1>
        <form>
            <label>Selecciona un departamento</label>
            <select ref={this.selectDepartamento}>
                {
                    //codigo
                    this.state.departamentos.map((departamento, index)=>{
                        return(<option key={index} value={departamento.Numero} >{departamento.Nombre}</option>)
                    })
                }
            </select>
            <button onClick={this.buscarEmpleado}>Buscar Empleados</button>
        </form>

        <br/>
        <ul>
            {
                //dibujo de los empleados
                this.state.empleados.map((empleado, index)=>{
                    return (<li key={index} >{empleado.apellido} - {empleado.oficio}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
