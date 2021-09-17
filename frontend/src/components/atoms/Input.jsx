import React, { useRef, useContext } from "react";
import { FormContext } from "../organisms/Form";

const Input = ({ id, text, disabled, type, stateName }) => {
  const context = useContext(FormContext);
  const { formDispatch } = context;
  const inputRef = useRef();
  //   console.log(type, stateName);
  return (
    <>
      <label htmlFor={id}>{type === "submit" ? "" : text}</label>
      <input
        type={type}
        id={id}
        ref={inputRef}
        value={type === "submit" ? text : undefined}
        disabled={disabled}
        onChange={() => {
          // console.log(formState);
          formDispatch({
            type: "UPDATE",
            payload: { key: id, data: inputRef.current.value },
          });
        }}
      />
    </>
  );
};

export default Input;
