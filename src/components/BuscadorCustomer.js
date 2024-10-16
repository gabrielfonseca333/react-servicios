import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class BuscadorCustomer extends Component {
  urlCustomer = Global.urlApiCustomers;
  cajaIdCustomer = React.createRef();

  state = {
    customer: null
  };

  mostrarDatosCustomer = (e) => {
    e.preventDefault();
    let idCustomer = this.cajaIdCustomer.current.value;
    let request = "customers/" + idCustomer + ".json";
    console.log(idCustomer);
    axios.get(this.urlCustomer + request).then((response) => {
      console.log("Leyendo servicio...");
      this.setState({
        customer: response.data.customer,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Buscador Customer</h1>
        <form>
          <label>Introduce el ID</label>
          <input type="text" ref={this.cajaIdCustomer}></input>
          <button onClick={this.mostrarDatosCustomer}>Buscar</button>
        </form>
        {
            this.state.customer &&
          <div style={{border:"1px solid black", padding:"20px"}}>
            <h3>{this.state.customer.contactName}</h3>
            <p>Empresa: {this.state.customer.companyName}</p>
            <p>Puesto: {this.state.customer.contactTitle}</p>
            <p>Ciudad: {this.state.customer.city}</p>
          </div>
        }
      </div>
    );
  }
}
