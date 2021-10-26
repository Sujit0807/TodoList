import React from "react";

const Button = (props) => {
  return (
    <button
      className="text-white bg-gradient-to-r from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 py-2 px-8 text-sm sm:text-lg rounded-lg mt-4"
      onClick={props.showModal}
    >
      {props.children}
    </button>
  );
};

export default Button;
