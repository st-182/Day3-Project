import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import UserProfile from "../components/molecules/UserProfile";
import Form from "../components/organisms/Form";
import ShowAllUsers from "../components/organisms/ShowAllUsers";

const initialState = { update: false };
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATEUSERARRAY":
      return { ...state, update: true };
    default:
      return state;
  }
};
export const ShowAllUpdatedUsersContext = createContext();

const HomeScreen = () => {
  const [allUsersStateUpdate, allUsersDispatch] = useReducer(
    reducer,
    initialState
  );
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setAllUsers([...res.data]));
  }, [allUsersStateUpdate]);
  return (
    <section>
      <h1>Pagrindinis</h1>
      <ShowAllUpdatedUsersContext.Provider
        value={{ allUsersStateUpdate, allUsersDispatch }}
      >
        <Form />
      </ShowAllUpdatedUsersContext.Provider>
      {allUsers.length > 0 ? (
        <ShowAllUsers allUsers={allUsers} />
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
};

export default HomeScreen;
