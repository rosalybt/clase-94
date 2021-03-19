// import React, {useState} from 'react'
// import './App.css';


// // Vimos tres usos para el estado en React
// // 1. Variables que cuando cambian, generan un re-render del componente 
// // (y cambia lo que ve el usuario)
// // 2. Variables globales (que podemos acceder desde cualquier lugar del componente)
// // 3. Variables que permiten manejar el valor de un elemento de formulario 
// // (para poder tenerlo controlados)

// // Componentes no-controlados: un input/select/cualquier otro elemento de form donde NO
// // usamos ni el atributo value ni el manejador de eventos onChange
// // Componente controlado: todo aquel en donde se le pasa expliictamente 
// // un atributo value, ese atributo value remite a una variable guardada en el estado, 
// // y cada que vez hay un cmabio en el componente se toma con el manejador de eventos 
// // onChange y se guarda en el estado

// function App() {

//   // Cuando se envia el form quiero acceder a nombre y edad del usuario

//   const [valorInput, setValorInput] = useState("")
 
//   const handleAutocomplete = () => {
//     let nombre = "Clark Kent"
//     let edad = 33

//     setValorInput(nombre)
//   }

//   const handleChange = (e) => {
//     setValorInput(e.target.value)
//   }

//   const handleClick = () => {
//  // necesito acceder a nombre y edad
//   }

//   console.log(valorInput)
//   return (
//     <div className="App">
//       <input value={valorInput} onChange={handleChange} type="text" placeholder="Escribi tu nombre" />
//       <input type="number" placeholder="Escribi tu edad" />

//       <button onClick={handleAutocomplete}>Autocompletar formulario</button>
//       <button onClick={handleClick}>Enviar formulario</button>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react'
import Tarea from './components/Tarea'

const App = () => {


  const [valorDelInput, setValorDelInput] = useState("") 

  const listaDeTareas = [
    "Lavar ropa", 
    "Corregir TPS", 
    "Desarmar cajas", 
    "Cepillar gatos", 
    "Insultar a Pepo", 
    "Putear a d1sn3y mientras mando CVs a otras empresas", 
  ]

  const handleClick = () => {
    console.log(valorDelInput) // aca esta la tarea que quiere agregar el usuario
  }

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }

  // En el handle click tenemos en el console.log el valor del input, 
  // la tarea que el usuario quiere agregar
  // TU MISION, SI DESEAS ACEPTARLA, es lograr que esa tarea se vea en la lista
  // con todas las demas.

  return (
    <div>  
      <ul>
      {listaDeTareas.map((tarea, i) => 
        <Tarea key={i} tarea={tarea}/>
      )}
      </ul>

<label>Agregar tarea...
      <input value={valorDelInput} onChange={handleChange} type="text" placeholder="Por ej, putear a Pepo" />
      </label>
      <button onClick={handleClick}>Agregar tarea</button>
    </div>
  )
}

export default App
