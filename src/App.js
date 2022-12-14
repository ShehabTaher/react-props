import React from "react";
import "./App.css";
import Profile from "./profile/profile";
import Card from "./profile/card";
import Image from "./profile/image";
import MyProfile from "./profile/img/shehab.jpg";
function App() {
  const alertMyInput = (name) => alert(name);
  return (
    <>
      <body
        style={{
          margin: "150px 100px",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        <Card>
          <Image src={MyProfile} alt="Profile" width={300} height={300} />
        </Card>
        <Profile
          FullName="Shehab Taher"
          Bio=" My Age is 29 , My Gender is Male"
          Profession="Front End Developer"
          alertMyInput={alertMyInput}
        ></Profile>
      </body>
    </>
  );
}

export default App;
