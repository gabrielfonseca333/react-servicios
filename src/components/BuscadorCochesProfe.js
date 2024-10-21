import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class BuscadorCochesProfe extends Component {
  cajaMarca = React.createRef();
  urlCoches = Global.urlApiCoches;


  cochesAll=[]
  state = {
    cochesDibujo: [],
  };

  buscarCoches = (e) => {
    e.preventDefault();
    let marca = this.cajaMarca.current.value;

    var cocheFiltrado = this.cochesAll.filter(car => car.marca == marca);
    this.setState({
        cochesDibujo:cocheFiltrado
    })

    

  };

  

  loadCoches=()=>{
    let request = "webresources/coches";
    axios.get(this.urlCoches + request).then((response) => {
        console.log("Leyendo el servicio...");
        this.cochesAll = response.data;
        this.setState({
          cochesDibujo:this.cochesAll
        })
        
      });
  }

  reloadDibujo=(e)=>{
    e.preventDefault();
    this.setState({
        cochesDibujo:this.cochesAll
      })

  }

  //esto sirve para cargar todo
  componentDidMount=() =>{
    this.loadCoches();
  }
    
  

  render() {
    return (
      <div>
        <h1>Coches seleccionado Profe</h1>
        <form>
          <label >Introduzca marca: </label>
          <input className="form-control" type="text" ref={this.cajaMarca}></input>
          <button onClick={this.buscarCoches}>Buscar coche</button>
          <button onClick={this.reloadDibujo}>Recargar coches</button>
        </form>
        <br></br>
        <table className="table table-dark" border={1}>
          <thead>
            <tr>
              <th>Coche</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.cochesDibujo.map((car, index) => {
                return (
                  <tr key={index}>
                    <td>{car.modelo}</td>
                    <td>{car.conductor}</td>
                    <td><img style={{width:"200px"}} src={car.imagen}></img></td>
                  </tr>
                );
              })
              //codigo react
            }
          </tbody>
        </table>
      </div>
    );
  }
}
