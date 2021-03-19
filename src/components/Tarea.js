import React, {useState} from 'react';
import './Tarea.css'

const Tarea = ({ tarea }) => {

  const [completada, setCompletada] = useState(false)


  const handleClick = () => {
    setCompletada(true)
  }
  return (
    <>
    <li className={completada ? "completada" : ""}>{tarea}</li> 
    <button onClick={handleClick}>Completar tarea</button>
  </>
  )
}

export default Tarea;
