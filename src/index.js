import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//imports de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle";



import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches';
import BuscadorCochesProfe from './components/BuscadorCochesProfe';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import EmpleadosOficios from './components/EmpleadosOficios';
import Departamentos from './components/MaestroDetalle/Departamentos';
import TablaMultiplicar from './components/TablaMultiplicar';
import MenuRutas from './components/MenuRutas';
import Router from './components/Router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div>
        <Router/>
    </div>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
