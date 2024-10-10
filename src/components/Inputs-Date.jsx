import { useState } from "react";
import "./inputs-date.css";

export const InputsDate = ({ onfechaActual }) => {
  const [fechaNacimiento, setFechaNacimiento] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [errorsEmpty, setErrorsEmpty] = useState({
    day: false,
    month: false,
    year: false,
  });

  const [errorsInvalid, setErrorsInvalid] = useState({
    day: false,
    month: false,
    year: false,
  });

  const handleChangeFechaNacimiento = (event) => {
    const { name, value } = event.target;
    setFechaNacimiento({
      ...fechaNacimiento,
      [name]: value,
    });
  };

  const validEmty = () => {
    const { day, month, year } = fechaNacimiento;

    const newErrors = {
      day: day === "",
      month: month === "",
      year: year === "",
    };

    setErrorsEmpty(newErrors);
    return errorsEmpty.day || errorsEmpty.month || errorsEmpty.year ? true : false;
  };

  const validInvalid = () => {
    const { day, month, year } = fechaNacimiento;
    const newErrors = {
      day: day < 1 || day > 31,
      month: month < 1 || month > 12,
      year: year > 2023,
    };
    setErrorsInvalid(newErrors);

  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (validEmty()) return;
    const { day, month, year } = fechaNacimiento;
    onfechaActual(`${year}-${month}-${day}`);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="inputs">
        <label htmlFor="day" className={errorsEmpty.day ? "label-error": ""}>
          day{" "}
          <input
            type="number"
            placeholder="DD"
            name="day"
            onChange={handleChangeFechaNacimiento}
          />
          {errorsEmpty.day && <span>This field is required</span>}
        </label>

        <label htmlFor="month" className={errorsEmpty.month ? "label-error" : ""}>
          month{" "}
          <input
            type="number"
            name="month"
            placeholder="MM"
            onChange={handleChangeFechaNacimiento}
          />
          {errorsEmpty.month && <span>This field is required</span>}
        </label>

        <label htmlFor="year" className={errorsEmpty.year ? "label-error" : ""}>
          year{" "}
          <input
            type="number"
            placeholder="YYYY"
            name="year"
            onChange={handleChangeFechaNacimiento}
          />
          {errorsEmpty.year && <span>This field is required</span>}
        </label>
      </div>

      <div className="content-submit">
        <hr />
        <button className="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </form>
  );
};
