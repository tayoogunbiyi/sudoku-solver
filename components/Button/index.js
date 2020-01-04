import React from "react";

const Button = ({ buttonText, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {buttonText}
    </button>
  );
};

export default Button;
