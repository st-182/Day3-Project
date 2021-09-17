import React from "react";
import UserProfile from "../molecules/UserProfile";
import styled from "styled-components";

const StyledGridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ShowAllUsers = ({ allUsers }) => {
  return (
    <>
      <h2>Vartotojai:</h2>
      <StyledGridDiv>
        {allUsers.map((user) => (
          <UserProfile
            key={user._id}
            name={user.name}
            age={user.age}
            email={user.email}
            password={user.password}
            id={user._id}
          />
        ))}
      </StyledGridDiv>
    </>
  );
};

export default ShowAllUsers;
