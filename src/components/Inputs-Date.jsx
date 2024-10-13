import { useState } from "react";
import "./inputs-date.css";
import { useErrorsField } from "../hook/useErrorsField";

export const InputsDate = ({ onfechaActual }) => {
  const [fechaNacimiento, setFechaNacimiento] = useState({
    day: "",
    month: "",
    year: "",
  });

  const { errors, validateAndUpdateErrors } = useErrorsField();
  
  const handleChangeFechaNacimiento = (event) => {
    const { name, value } = event.target;
    setFechaNacimiento((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateAndUpdateErrors(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).some((error) => error !== null)) return;

    const { day, month, year } = fechaNacimiento;
    onfechaActual(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="inputs">
        <label htmlFor="day" className={errors.day ? "label-error" : ""}>
          día{" "}
          <input
            type="number"
            placeholder="DD"
            name="day"
            onChange={handleChangeFechaNacimiento}
          />
          {errors.day && <span>{errors.day}</span>}
        </label>

        <label htmlFor="month" className={errors.month ? "label-error" : ""}>
          mes{" "}
          <input
            type="number"
            name="month"
            placeholder="MM"
            onChange={handleChangeFechaNacimiento}
          />
          {errors.month && <span>{errors.month}</span>}
        </label>

        <label htmlFor="year" className={errors.year ? "label-error" : ""}>
          año{" "}
          <input
            type="number"
            placeholder="AAAA"
            name="year"
            onChange={handleChangeFechaNacimiento}
          />
          {errors.year && <span>{errors.year}</span>}
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
