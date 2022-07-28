import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App';
//import { ComponenteInicial } from './components/ComponenteInicial';
import { Navbar } from './components/Navbar';


const contenedor = document.getElementById('root');

// archivo que va a llamar a la funcion .render para rederizar el componete padre mas grande
ReactDOM.createRoot(contenedor).render(
    <App />
  )

