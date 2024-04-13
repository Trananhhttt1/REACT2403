import React from "react";
import "./App.css";
import "./compunents/Question5";
import Question5 from "./compunents/Question5";
import Question4 from "./compunents/Question4";

const App = () => {
  const showFunction = () => {
    console.log("Hello world");
  };
  const user = {
    firstName: "Dao tuan",
    lastName: "anh",
    showFullName() {
      return this.lastName + " " + this.firstName;
    },
  };
  const user2 = {
    firstName: "Ha",
    lastName: "Minh Tuan",
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  };
  return (
    <div className="container">
      <Question5></Question5>
      <Question4></Question4>
    </div>
  );
};

export { App };
