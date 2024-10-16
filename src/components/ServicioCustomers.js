import React, { Component } from 'react'
//1. importamos la librería de axios
import axios from 'axios'

export default class ServicioCustomers extends Component {

    //2. necesitamos URL y REQUEST de acceso al servicio
    urlCustomers = "https://northwind.netcore.io/customers.json";


    //3.2. variable para almacenar los clientes
    state = {
        customers:[]
    }



    //3. necesitaremos recuperar los clientes con AXIOS
    //la pregunta es ¿cuando queremos hacerlo?

    //3.1. creamos el método
    loadCustomers =()=>{
        console.log("Antes del servicio");

        axios.get(this.urlCustomers).then((response)=>{
            console.log("Leyendo...");

            //4. devuelve un array, así que lo almacenamos
            this.setState({
                customers:response.data.results
            })
          
        })
        
        console.log("Después del servicio");
    }

    //vamos a cargar los datos en el método inicial de la página
    //lo haremos solamente una vez que sera al iniciar el component
    componentDidMount =()=>{
        //este metodo se ejecuta solo al crear el component
        console.log("Creando component");
        this.loadCustomers();
    }


  render() {
    return (
      <div>
        <h1>Servicio Customers</h1>
       
            <button onClick={this.loadCustomers}>
                Leyendo
            </button>
            {
                //5. dibujo
                this.state.customers.map((cliente, index)=>{
                    return(<h3 key={index} style={{color:"yellowgreen"}}>{cliente.city}</h3>)
                })
            }

      </div>
    )
  }
}
