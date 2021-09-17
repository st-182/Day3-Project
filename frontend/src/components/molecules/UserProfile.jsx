import axios from "axios";
import React, { useRef, useState } from "react";

const UserProfile = ({ id, name, age, email, password }) => {
  const userProfileRef = useRef();
  //Switching between card modes (show card, update card)
  const [updateProfile, setUpdateProfile] = useState(false);
  //New userProfile details
  const [userName, setUserName] = useState(name);
  const [userAge, setUserAge] = useState(age);
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState(password);

  const sendUpdatedUserHandler = () => {
    const newUserProfile = {
      name: userName,
      age: userAge,
      email: userEmail,
      password: userPassword,
    };
    axios
      .put(`http://localhost:5000/api/users/${id}`, newUserProfile)
      .then((res) =>
        res.status === 200
          ? setUpdateProfile(false)
          : console.log("ERROR: ", res.status)
      );
  };
  const deleteUserHandler = () => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then((res) =>
        res.status === 200
          ? (userProfileRef.current.style.display = "none")
          : console.log("ERROR: ", res.status)
      );
  };
  return (
    <div ref={userProfileRef}>
      {updateProfile === false ? (
        <p>{userName}</p>
      ) : (
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
        />
      )}
      {updateProfile === false ? (
        <p>{userAge}</p>
      ) : (
        <input
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
          type="text"
        />
      )}
      {updateProfile === false ? (
        <p>{userEmail}</p>
      ) : (
        <input
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          type="text"
        />
      )}
      {updateProfile === false ? (
        <p>{userPassword}</p>
      ) : (
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="text"
        />
      )}
      {updateProfile === false ? (
        <button onClick={() => setUpdateProfile(true)}>Atnaujinti</button>
      ) : (
        <button onClick={() => sendUpdatedUserHandler()}>Išsiųsti</button>
      )}
      <button onClick={() => deleteUserHandler()}>Ištrinti</button>
      {/* <p>{updateProfile ? "true" : "false"}</p>
      <p>{id}</p> */}
    </div>
  );
};

export default UserProfile;