import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class BuscadorCoches extends Component {
  cajaMarcaCoche = React.createRef();

  urlCoches = Global.urlApiCoches;
  state = {
    cochesSeleccionado: [],
    coches: null,
  };
  mostrarCoches = (e) => {
    e.preventDefault();
    let marca = this.cajaMarcaCoche.current.value;
    let request = "webresources/coches";

    //vamos a leer el servicio, para poder comparar la lectura
    //y decir, que si la marca es igual a la que introducimos
    //lo mostramos
    axios.get(this.urlCoches + request).then((response) => {
        console.log("Leyendo el servicio...");
        this.setState({
          coches:response.data
        })
        response.data.map((coche, index)=>{
            
            if(coche.marca = marca){
                this.state.cochesSeleccionado.push(coche)
            }else{
                console.log("xd");
            }
            this.setState({
                cochesSeleccionado:this.state.cochesSeleccionado
            })

            
        })
        
      });
    
  };

  loadCoches=()=>{
    let request = "webresources/coches";
    axios.get(this.urlCoches + request).then((response) => {
        console.log("Leyendo el servicio...");
        this.setState({
          coches:response.data
        })
        
      });
    
  }

  //esto sirve para cargar todo
  componentDidMount() {
    this.loadCoches();
  }

  render() {
    return (
      <div>
        <h1>Buscador Coches</h1>
        <form>
          <label>Introduzca marca: </label>
          <input type="text" ref={this.cajaMarcaCoche}></input>
          <button onClick={this.mostrarCoches}>Buscar coche</button>
        </form>
        <br />
        <table border={1}>
          <thead>
            <tr>
              <th>Coche</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.coches &&
                this.state.coches.map((coche, index) => {
                  return (
                    <tr key={index}>
                      <td>{coche.modelo}</td>
                      <td>{coche.conductor}</td>
                      <td><img src={coche.imagen}></img></td>
                    </tr>
                  );
                })
              // <tr>
              //     <td>{this.state.coches.modelo}</td>
              // </tr>
              //codigo react
              //donde tendremos que escribir los tr y los td
            }
          </tbody>
        </table>
      </div>
    );
  }
}
