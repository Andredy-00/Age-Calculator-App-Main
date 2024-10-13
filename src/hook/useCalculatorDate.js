import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

/**
 * 
 * @param {Date} fechaNacimiento 
 * @returns {object}
 */
export const useCalculatorDate = (fechaNacimiento) => {
  const fechaActual = new Date();

  const años = differenceInYears(fechaActual, fechaNacimiento);
  
  const fechaAniversario = new Date(fechaNacimiento);
  fechaAniversario.setFullYear(fechaAniversario.getFullYear() + años);

  const meses = differenceInMonths(fechaActual, fechaAniversario);
  
  const fechaMesExacto = new Date(fechaAniversario);
  fechaMesExacto.setMonth(fechaMesExacto.getMonth() + meses);

  const dias = differenceInDays(fechaActual, fechaMesExacto);

  return { años, meses, dias };
};
