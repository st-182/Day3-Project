import React, { createContext, useContext, useReducer, useRef } from "react";
import styled from "styled-components";
import InputGroup from "../molecules/FormGroup/InputGroup";
import axios from "axios";
import { ShowAllUpdatedUsersContext } from "../../screens/HomeScreen";

const StyledForm = styled.form`
  width: 800px;
  margin: 0 auto;
  background-color: #80808060;
  padding: 10px;
  display: grid;
  grid-column: 1fr 1fr;
  gap: 10px;
`;
const initialState = {
  name: "",
  age: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      const data =
        action.payload.key === "name"
          ? { name: action.payload.data }
          : action.payload.key === "age"
          ? { age: action.payload.data }
          : action.payload.key === "email"
          ? { email: action.payload.data }
          : action.payload.key === "password"
          ? { password: action.payload.data }
          : state;
      return { ...state, ...data };

    default:
      return state;
  }
};
export const FormContext = createContext();

const Form = () => {
  const updateContext = useContext(ShowAllUpdatedUsersContext);
  const { allUsersStateUpdate, allUsersDispatch } = updateContext;
  const formRef = useRef();
  const [formState, formDispatch] = useReducer(reducer, initialState);
  const handlerSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users", formState).then((res) => {
      if (res.status === 200) {
        formRef.current.reset();
        allUsersDispatch({ type: "UPDATEUSERARRAY" });
      } else {
        console.log("Response Status Error:", res.status);
      }
    });
  };
  //   console.log(dispatch);
  return (
    <>
      <FormContext.Provider value={{ formState, formDispatch }}>
        <h3>Registracija</h3>
        <StyledForm onSubmit={handlerSubmit} ref={formRef}>
          <InputGroup
            data={[
              {
                id: "name",
                text: "Vardas ir Pavardė",
                type: "text",
              },
              {
                id: "age",
                type: "number",
                text: "Amžius",
              },
              {
                id: "email",
                type: "email",
                text: "El. pašto adresas",
              },
              {
                id: "password",
                text: "Slaptažodis",
                type: "password",
              },
              {
                id: "submit",
                text: "Siųsti",
                type: "submit",
              },
            ]}
          />
        </StyledForm>
      </FormContext.Provider>
    </>
  );
};

export default Form;
