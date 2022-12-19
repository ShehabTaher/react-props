import React from "react";
import PropTypes from "prop-types";


function Profile({ fullName, bio, profession, handleName,children }) {
  const stylesObject = { color: "red", textAlign: "center" };
  return <div style={stylesObject}>
      <h3>{fullName}</h3>
      <p>{bio}</p>
      <p>{profession}</p> 
      <img src={children} alt="Profile" style={{"width" : 300 , "height" : 300 }} />
      <br/>
      <button>
      <a href="" onClick={handleName}>
          Click me
      </a>
      </button>
  </div>;
}
Profile.defaultProps = {
  fullName: "full Name",
  bio:"bio",
  profession: "profession",
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string
}

export default Profile;