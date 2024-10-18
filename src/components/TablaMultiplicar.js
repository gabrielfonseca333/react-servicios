import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state={
        tabla:[]
    }

    generarTablaMultiplicar=()=>{

        
        let aux = [];
        let num = this.props.numero;
        for(var i=1; i<=10;i++){
            let operacion = num*i;
            aux.push(operacion)
        }
        this.setState({
            tabla:aux
        })

    }

    componentDidMount=()=>{
        this.generarTablaMultiplicar()
    }


  render() {
    return (
      <div>
        <h1>Tabla Multiplicar</h1>
        <h3 style={{color:"blue"}}>Numero: {this.props.numero}</h3>
        <ul>
            {
                this.state.tabla.map((numero, index)=>{
                    return(<li key={index}>{this.props.numero} * {index+1} = {numero}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
