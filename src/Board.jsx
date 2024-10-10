import { useState } from 'react';
import './board.css';
import { InputsDate } from './components/Inputs-Date';
import { RenderDate } from './components/Render-Date';

export const Board = () => {

  const [fechaActual, setFechaActual] = useState('');

  return (
    <div className="board">
      <InputsDate onfechaActual={setFechaActual}/>
        <RenderDate fechaActual={fechaActual} />
    </div>
  )
}
