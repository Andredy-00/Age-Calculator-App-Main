import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

/**
 * 
 * @param {Date} fechaNacimiento 
 * @returns {object}
 */
export const useCalculatorDate = ( fechaNacimiento ) => {
  const fechaActual = new Date();

  const años = differenceInYears(fechaActual, fechaNacimiento);
  const meses = differenceInMonths(fechaActual, fechaNacimiento) % 12;
  const dias = differenceInDays(fechaActual, fechaNacimiento) % 30;

  return { años, meses, dias };
};
