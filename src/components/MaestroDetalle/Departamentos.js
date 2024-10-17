import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from '../../Global';
import axios from 'axios';

export default class Departamentos extends Component {

    selectDepartamentos = React.createRef();

    state={
        departamentos:[],
        idDepartamento: 0
    }


    loadDepartamentos=(e)=>{
        var request = "api/Departamentos";
        var url = Global.urlApiDepartamentos + request;
        axios.get(url).then(response=>{
            console.log(response.data)
            this.setState({
                departamentos: response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadDepartamentos();
    }

    buscarEmpleado=(e)=>{
        e.preventDefault();
        //CAPTURAMOS EL ID DEL DEPARTAMENTO
        let idDepartamento = this.selectDepartamentos.current.value;
        this.setState({
            idDepartamento:idDepartamento
        })
    }


  render() {
    return (
      <div>
        <h1 style={{color:"red"}}>Departamentos</h1>
        <form>
            <label>Selecciona departamento: </label>
            <select ref={this.selectDepartamentos}>
                {
                    //codigo donde tienes que meter el OPTION
                    this.state.departamentos.map((departamento, index)=>{
                        return(<option key={index} value={departamento.Numero}>{departamento.Nombre}</option>)
                    })
                }

            </select>
            <button onClick={this.buscarEmpleado}>Buscar departamento</button>
        </form>
        <br/>
        <h3 style={{color:"green"}}>Id del departamento: {this.state.idDepartamento}</h3>

        {
            //dibujamos la etiqueta empleado
            this.state.idDepartamento != 0 &&
            (<Empleados iddepartamento={this.state.idDepartamento}/>)
        }
      </div>
    )
  }
}
