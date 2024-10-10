import { useCalculatorDate } from '../hook/useCalculatorDate';
import './render-date.css';

export const RenderDate = ( {fechaActual} ) => {

  const {años, meses, dias} = useCalculatorDate(fechaActual);

  const isValidNumber = (value) => {
    return value !== '' && !isNaN(Number(value));
  }

  return (
    <div className="render-date">
      <p>{isValidNumber(años) ? <span>{años}</span> : <span>- -</span>}years</p>
      <p>{isValidNumber(meses) ? <span>{meses}</span> : <span>- -</span>}months</p>
      <p>{isValidNumber(dias) ? <span>{dias}</span> : <span>- -</span>}days</p>
    </div>
  )
}

