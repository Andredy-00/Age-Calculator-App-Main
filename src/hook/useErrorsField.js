import { useState, useCallback, useMemo } from "react";

const validateField = (name, value, currentYear) => {
  if (value.trim() === "") return "this field is required";

  switch (name) {
    case "day":
      return parseInt(value) < 1 || parseInt(value) > 31
        ? "must be a valid day"
        : null;
    case "month":
      return parseInt(value) < 1 || parseInt(value) > 12
        ? "must be a valid month"
        : null;
    case "year":
      if (parseInt(value) > currentYear) return "must be in the past";
      if (value.length !== 4) return "must be a valid year";
      return null;
    default:
      return null;
  }
};

export const useErrorsField = () => {
  const [errors, setErrors] = useState({});
  
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const validateAndUpdateErrors = useCallback((name, value) => {
    const error = validateField(name, value, currentYear);
    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  }, [currentYear]);

  return { errors, validateAndUpdateErrors };
};
