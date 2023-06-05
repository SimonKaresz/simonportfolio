"use client";

import { useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  return { values, handleChange, setValues };
};

export default useContactForm;
