import React, { createContext, useContext } from "react";

const BioContext = createContext();

const UseContext = ({ children }) => {
  const userObj = {
    name: "Krishna Koturu",
    role: "software engineer",
    salary: 85000,
  };
  return (
    <BioContext.Provider value={userObj}>
      <h5>Krishna Ok</h5>
      {children}
    </BioContext.Provider>
  );
};

export default UseContext;

export const KriContext = () => {
  return (
    <UseContext>
      <h5>Krishna</h5>
      <Krish />
    </UseContext>
  );
};

export const Krish = () => {
  const obj = useContext(BioContext);
  const { name, role, salary } = obj;
  console.log("passed name", name);

  return (
    <div>
      <h2>Hello: {name}</h2>
      <h4>Role: {role}</h4>
      <h4>Salary: {salary}</h4>
    </div>
  );
};
