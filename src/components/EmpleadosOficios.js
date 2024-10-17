import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class EmpleadosOficios extends Component {
  selectOficio = React.createRef();

  state = {
    oficios: [],
    empleados: [],
  };

  mostrarEmpleados = (e) => {
    e.preventDefault();

    //ahora tengo que aquí mostrar los empleados de ese oficio seleccionado
    let oficio = this.selectOficio.current.value;
    console.log(oficio);
    let request = "api/Empleados/EmpleadosOficio/" + oficio;
    let url = Global.urlApiEmpleados + request;
    axios.get(url).then((response) => {
      //el problema estuvo en que estaba pusheando directamente la respuesta
      //y eso hacía que pasara un array anidado
      // this.state.empleados.push(response.data)
      this.setState({
        //la solución está en poner directamente el array this.state.empleados
        //el response.data, no pushearlo
        empleados: response.data,
      });
    });
    console.log("empleados en el state");
    console.log(this.state.empleados);
  };

  loadOficios = () => {
    console.log("Leyendo oficios...");
    let request = "api/Empleados";
    let url = Global.urlApiEmpleados + request;
    let oficiosUnicos = [];
    axios.get(url).then((response) => {
      for (var empleado of response.data) {
        if (!this.state.oficios.includes(empleado.oficio)) {
          this.state.oficios.push(empleado.oficio);
        }
      }
      this.setState({
        oficios: this.state.oficios,
      });
    });
  };

  componentDidMount = () => {
    this.loadOficios();
  };

  render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>
          <label>Selecciona el oficio</label>
          <select ref={this.selectOficio}>
            {
              //CODIGO DONDE TENDREMOS QUE CARGAR LOS OFICIOS
              this.state.oficios.map((oficio, index) => {
                return <option key={index}>{oficio}</option>;
              })
            }
          </select>

          <button onClick={this.mostrarEmpleados}>Mostrar empleados</button>
        </form>

        <br />
        <ul>
          {
            //CODIGO DONDE TENREMOS QUE MOSTRAR LOS EMPLEADOS
            this.state.empleados.map((empleado, index) => {
              return <li key={index}>{empleado.apellido}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}
