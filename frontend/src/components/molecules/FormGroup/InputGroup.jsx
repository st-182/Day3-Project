import React from "react";
import Input from "../../atoms/Input";

const InputGroup = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Input
          id={item.id}
          text={item.text}
          disabled={item.disabled}
          type={item.type}
          stateName={item.stateName}
          key={item.id}
        />
      ))}
    </>
  );
};

export default InputGroup;
