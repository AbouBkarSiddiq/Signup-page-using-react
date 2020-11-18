import React from "react";

const Input = (props) => {
  return (
    <input
      className="p-4 m-6 rounded focus:outline-none "
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={(e) => onValueChange(e.target.input)}
    />
  );
};
export default Input;
