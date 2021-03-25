import React, { useState } from 'react';
import Tarea from './components/Tarea';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [valorDelInput, setValorDelInput] = useState('');

  const [lista, setLista] = useState([
    'Lavar ropa',
    'Corregir TPS',
    'Desarmar cajas',
    'Cepillar gatos',
    'Insultar a Pepo',
    'Putear a d1sn3y mientras mando CVs a otras empresas',
  ])


  const borrarElementoDelArray = param => setLista([...lista.slice(0, param), ...lista.slice(param + 1)])

  const modificarElementoDelArray = (i, modificar, tarea) => {

    if (modificar) {
      lista[i] = valorDelInput
      setLista([...lista])
      setValorDelInput('')
    } else { setValorDelInput(tarea) }


  }

  const handleClick = (index) => {
    setLista([...lista, valorDelInput])
    setValorDelInput("")
  };

  const handleChange = e => {
    setValorDelInput(e.target.value);
  };

  return (
    <div>
      {/* <FontAwesomeIcon icon={faStar} /> */}

      <ul>
        {lista.map((tarea, i) => (
          <Tarea
            key={i}
            tarea={tarea}
            borrarElementoDelArray={borrarElementoDelArray}
            modificarElementoDelArray={modificarElementoDelArray}
            index={i}

          />
        ))}
      </ul>

      <label>
        Agregar tarea...
        <input
          value={valorDelInput}
          onChange={handleChange}
          type="text"
          placeholder="Por ej, putear a Pepo"
        />
      </label>
      <button onClick={handleClick}>Agregar Tarea</button>

    </div>
  );
};

export default App;
