import "./App.css";
import FullName from "./profile/fullName";
import Bio from "./profile/bio";
import Profession from "./profile/profession";
import AlertButton from "./profile/handleName";
import ProfileImage from "./profile/image";
import MyProfile from './profile/img/shehab.jpg'
function App() {     

  return (
    <>
      <body
        style={{
          margin: "150px 100px",
          fontSize: "1.2rem",
          textAlign: "center",
        }}
      >
        <h1>Self-Profile </h1>
        <ProfileImage>
          <img src={MyProfile} alt="Profile" width={300} height={300} />
        </ProfileImage>
        <FullName firstName="Shehab" lastName="Taher">
          <p>Glad to know you</p>
        </FullName>
        <br />
        <Bio
           FullName="Shehab Taher"
           Age="29"
           Gender="Male"
           Interests="Learning,Football ,Walking, Watching TV , Eating and Sleeping"
        />
        <br />
        <div id="profession">
          <Profession />
        </div>
        <AlertButton FullName='Shehab Taher' />
        
      </body>
    </>
  );
}

export default App;
