import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class Trabajadores extends Component {
  state = {
    trabajadores: [],
  };

  cajaSalario = React.createRef();

  loadTrabajadores = () => {
    //Recuperamos los id de hospital
    let idHospitales = this.props.idhospitales;
    if (idHospitales.length != 0) {
      //idhospital=17&idhospital=22
      let data = "";
      for (var id of idHospitales) {
        data += "idhospital=" + id + "&";
      }
      //elimamos el ultimo caracter del string
      data = data.substring(0, data.length - 1);
      //PODEMOS REALIZAR LA PETICIÓN AL SERVICIO
      let request = "api/trabajadores/TrabajadoresHospitales?" + data;
      let url = Global.urlApiEjemplos + request;
      axios.get(url).then((response) => {
        this.setState({
          trabajadores: response.data,
        });
      });
    }
  };

  //incremento=1&idhospital=19
  incrementarSalario = () => {
    let salario = parseInt(this.cajaSalario.current.value);
    let hospis = this.props.idhospitales;
    let data = "";
    for (var id of hospis) {
      data += "&idhospital=" + id;
      console.log("🚀 ~ HospitalesMultiples ~ data:", data);
    }
    let request =
      "api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" +
      salario +
      data;
    let url = Global.urlApiEjemplos + request;
    axios.put(url).then((response) => {
      console.log("Actualizado el sueldo");
      this.loadTrabajadores();
    });
  };

  componentDidMount = () => {
    this.loadTrabajadores();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.idhospitales != prevProps.idhospitales) {
      this.loadTrabajadores();
    }
  };

  render() {
    return (
      <div
        style={{
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "5px 5px 20px gray",
        }}
      >
        <div style={{textAlign:"left"}}>
          <input
            style={{width:"50%"}}
            type="text"
            ref={this.cajaSalario}
            placeholder="Salario a incrementar"
            className="form-control"
          ></input>
          <button onClick={this.incrementarSalario} className="btn btn-warning">
            Incrementar Salario
          </button>
        </div>
        <br/>

        <h2 style={{ color: "blue" }}>Trabajadores</h2>

        {this.props.idhospitales.map((id, index) => {
          return (
            <p style={{ color: "green", textAlign: "right" }} key={index}>
              Seleccionado Hospital: {id}
            </p>
          );
        })}

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id Trabajador</th>
              <th>Apellio</th>
              <th>Oficio</th>
              <th>Salario</th>
              <th>Id Hospital</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trabajadores.map((trabajador, index) => {
              return (
                <tr key={index}>
                  <td>{trabajador.idTrabajador}</td>
                  <td>{trabajador.apellido}</td>
                  <td>{trabajador.oficio}</td>
                  <td>{trabajador.salario}</td>
                  <td>{trabajador.idHospital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
