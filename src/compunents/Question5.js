import React, { useState } from "react";

const Question5 = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [object, setObject] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [file, setFile] = useState("");

  const submit = () => {
    const data = {
      fullName,
      userName,
      passWord,
      email,
      phone,
      object,
      favorite,
      address,
      birth,
      file,
    };
    console.log(data);
  };

  const cancel = () => {
    setFullName("");
    setUserName("");
    setPassWord("");
    setEmail("");
    setPhone("");
    setObject("");
    setFavorite([]);
    setAddress("");
    setBirth("");
    setFile("");
  };
  return (
    <>
      <div className="from">
        <h1>QUESTION5</h1>
        <label htmlFor="fName">
          <br></br>
          Full Name
          <input
            type="text"
            id="fName"
            placeholder="Input your fullname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="uName">
          <br></br>
          Username
          <input
            type="text"
            id="uName"
            placeholder="Input your Username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <br></br>
          PassWord
          <input
            type="password"
            id="password"
            placeholder="Input your password"
            value={passWord}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
        </label>
        <label htmlFor="email">
          <br></br>
          Email
          <input
            type="text"
            id="email"
            placeholder="Input your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="phone">
          <br></br>
          Telephone number
          <input
            type="text"
            id="phone"
            placeholder="Input your phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </label>
        {/* ----------------- */}
        <br></br>
        <label>
          Input Object
          <br></br>
          <input
            type="radio"
            id="html"
            value="HTML"
            checked={object === "HTML"}
            onChange={(e) => {
              setObject(e.target.value);
            }}
          ></input>
          <label htmlFor="html">HTML</label>
          <br></br>
          <input
            type="radio"
            id="css"
            value="CSS"
            checked={object === "CSS"}
            onChange={(e) => {
              setObject(e.target.value);
            }}
          ></input>
          <label htmlFor="css">CSS</label>
          <br></br>
        </label>
        {/* --------------------- */}
        <label>
          Favorite
          <br></br>
          <input
            type="checkbox"
            id="badminton"
            checked={favorite.some((item) => {
              return item === "Badminton";
            })}
            onChange={() => {
              if (favorite.some((item) => item === "Badminton")) {
                setFavorite(favorite.filter((item) => item !== "Badminton"));
              } else {
                setFavorite([...favorite, "Badminton"]);
              }
            }}
          ></input>
          <label htmlFor="badminton">Badminton</label>
          <br></br>
          <input
            type="checkbox"
            id="volleyball"
            checked={favorite.some((item) => {
              return item === "Volleyball";
            })}
            onChange={() => {
              if (favorite.some((item) => item === "Volleyball")) {
                setFavorite(favorite.filter((item) => item !== "Volleyball"));
              } else {
                setFavorite([...favorite, "Volleyball"]);
              }
            }}
          ></input>
          <label htmlFor="volleyball">Volleyball</label>
          <br></br>
          <input
            type="checkbox"
            id="football"
            checked={favorite.some((item) => {
              return item === "Football";
            })}
            onChange={() => {
              if (favorite.some((item) => item === "Football")) {
                setFavorite(favorite.filter((item) => item !== "Football"));
              } else {
                setFavorite([...favorite, "Football"]);
              }
            }}
          ></input>
          <label htmlFor="football">Football</label>
        </label>
        <br></br>
        {/* --------------------- */}
        <label for="address">Address</label>

        <select
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        >
          <option value="Hà Nội">Hà Nội</option>
          <option value="Vĩnh Phúc">Vĩnh Phúc</option>
          <option value="Phú Thọ">Phú Thọ</option>
          <option value="Ninh Bình">Ninh Bình</option>
        </select>
        <br></br>
        {/* ------------------------------ */}
        <label for="birthday">
          Birthday <br></br>
          <input
            type="date"
            id="birthday"
            value={birth}
            onChange={(e) => {
              setBirth(e.target.value);
            }}
          ></input>
        </label>
        <br></br>

        {/* ------------------------------ */}
        <label htmlFor="file">
          Your picture<br></br>
          <input
            type="file"
            id="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </label>
        <br></br>
        <button onClick={submit}>Đăng Ký</button>
        <button onClick={cancel}>Hủy</button>
      </div>
    </>
  );
};

export default Question5;
