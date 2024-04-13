import React, { useState } from "react";

import "../style/Question4.css";

const Question4 = () => {
  const SKILLS = ["progamming", "development", "production"];
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("nam");
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState("");

  const showIf = () => {
    console.log("FullName:", fullName);
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Skill:", skills.join(","));
    console.log("About:", about);
  };
  const clear = () => {
    setFullName("");
    setAge("");
    setGender("");
    setSkills([]);
    setAbout("");
  };
  return (
    <>
      <div className="from">
        <h1>QUESTION4</h1>
        <label htmlFor="fname">
          Full Name
          <input
            type="text"
            id="fname"
            placeholder="Enter your Name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </label>
        <br></br>

        <label htmlFor="age">
          Age
          <input
            type="text"
            id="age"
            placeholder="Enter your Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </label>
        <br></br>

        <label htmlFor="genders">
          Gender
          <select
            id="genders"
            value={gender}
            onChange={(e) => {
              console.log(e);
              setGender(e.target.value);
            }}
          >
            <option value="Nam">Nam</option>
            <option value="Nu">Nu</option>
          </select>
        </label>
        <br></br>
        <label htmlFor="check">
          Skills <br></br>
          {SKILLS.map((item) => {
            return (
              <>
                <input
                  type="checkbox"
                  id={item}
                  checked={skills.some((skill) => skill === item)}
                  onChange={() => {
                    if (skills.some((skill) => skill === item)) {
                      setSkills(skills.filter((skill) => skill !== item));
                    } else {
                      setSkills([...skills, item]);
                    }
                  }}
                />
                <label className="lable__checkbox" htmlFor={item}>
                  {" "}
                  {item}
                </label>
              </>
            );
          })}
        </label>
        <label>
          About your:<br></br>
          <textarea
            rows={4}
            cols={40}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
            value={about}
          />
        </label>
        <div>
          <button onClick={showIf}>Submit</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </>
  );
};
export default Question4;
