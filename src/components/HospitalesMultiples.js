import React, { Component } from "react";
import Trabajadores from "./Trabajadores";
import axios from "axios";
import Global from "../Global";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";

export default class HospitalesMultiples extends Component {
  selectHospital = React.createRef();
  cajaSalario = React.createRef();

  state = {
    hospitales: [],
    hospitalesSeleccionados: [],
  };

  loadHospitales = () => {
    let request = "api/hospitales";
    let url = Global.urlApiEjemplos + request;
    axios.get(url).then((response) => {
      console.log("leyendo hospitales");
      this.setState({
        hospitales: response.data,
      });
    });
  };

  //incremento=1&idhospital=19
//   incrementarSalario = () => {
   
//     let salario = parseInt(this.cajaSalario.current.value);
//     let hospis = this.state.hospitalesSeleccionados;
//     let data = "";
//     for (var id of hospis) {
//       data += "&idhospital=" + id;
//       console.log("🚀 ~ HospitalesMultiples ~ data:", data);
//     }
//     let request =
//       "api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" +
//       salario +
//       data;
//     let url = Global.urlApiEjemplos + request;
//     axios.put(url).then(response=>{
//         console.log("Actualizado el sueldo")
//     })
//   };

  getHospitalesSeleccionados = (e) => {
    e.preventDefault();
    let aux = [];
    let options = this.selectHospital.current.options;
    for (var option of options) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.setState({
      hospitalesSeleccionados: aux,
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <nav class="navbar navbar-light bg-light">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src="https://images.vexels.com/content/140414/preview/bearded-goat-silhouette-889386.png"
                alt=""
                width="30"
                height="24"
              />
            </a>
          </div>
        </nav>

        <h1>Hospitales Multiples</h1>
        <form>
          <select
            ref={this.selectHospital}
            className="form-control"
            multiple
            size={5}
          >
            {this.state.hospitales.map((hospital, index) => {
              return (
                <option key={index} value={hospital.idHospital}>
                  {hospital.nombre}
                </option>
              );
            })}
          </select>
          <br />
          <button
            onClick={this.getHospitalesSeleccionados}
            className="btn btn-primary"
          >
            Mostrar Datos
          </button>
          <br />
          {/* <input
            type="text"
            ref={this.cajaSalario}
            placeholder="Salario a incrementar"
            className="form-control"
          ></input>
          {/* <button onClick={this.incrementarSalario} className="btn btn-warning">
            Incrementar Salario
          </button> */}
        </form>
        <br />
        {this.state.hospitalesSeleccionados.length != 0 && (
          <Trabajadores idhospitales={this.state.hospitalesSeleccionados} />
        )}
      </div>
    );
  }
}
