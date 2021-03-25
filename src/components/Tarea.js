import React, { useState } from 'react';
import './Tarea.css'

const Tarea = ({ tarea, borrarElementoDelArray, index, modificarElementoDelArray }) => {

  const [completada, setCompletada] = useState(false)
  const [modificar, setModificar] = useState(false)


  const handleClickModificar = () => {

    setModificar(true)
    modificarElementoDelArray(index, modificar, tarea)

    if (modificar && index >= 0) {
      setModificar(false)


    }

  }

  const handleClick = () => {
    setCompletada(true)
  }

  const handleClickBorrar = () => {
    borrarElementoDelArray(index)
  }

  // const handleClickModificar = () => {
  //   modificarElementoDelArray(tarea, index)

  // }

  return (
    <>
      <li className={completada ? "completada" : ""}>{tarea}</li>
      <button onClick={handleClick}>Completar tarea</button>
      <button onClick={handleClickBorrar}>Borrar tarea</button>
      <button onClick={handleClickModificar}>{!modificar ? 'Modificar tarea' : 'Guardar cambios'}</button>
    </>
  )
}

export default Tarea;
