import React from "react";
import Profile from "./profile/profile";
import MyProfile from "./profile/img/shehab.jpg";


function App({
  fullName = "Shehab Taher",
  bio = "I Love Football",
  profession = "Front End JS Developer",
  handleName = (e)=>{
    e.preventDefault();
    alert(`${fullName}`)
  }
}) {
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
          {MyProfile}
        </Profile>
      </header>
    </div>
  );
}

export default App;