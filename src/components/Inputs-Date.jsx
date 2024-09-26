import "./inputs-date.css";

export const InputsDate = () => {
  return (
    <form className="form">
      <div className="inputs">
        <label htmlFor="day">
          day <input type="text" placeholder="DD" />
          <span>Error</span>
        </label>

        <label htmlFor="month">
          month <input type="text" placeholder="MM" />
          <span>Error</span>
        </label>

        <label htmlFor="year">
          year <input type="text" placeholder="YYYY" />
          <span>Error</span>
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
