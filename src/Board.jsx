import './board.css';
import { InputsDate } from './components/Inputs-Date';
import { RenderDate } from './components/Render-Date';


export const Board = () => {
  return (
    <div className="board">
      <InputsDate/>
        <RenderDate/>
    </div>
  )
}
