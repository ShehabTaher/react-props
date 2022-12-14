import React from 'react';
import PropTypes from 'prop-types';
const Profile = ({FullName , Bio , Profession , alertMyInput}) => {
    const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center"}} >
            <h1>Self-Profile </h1>
            <h1 style ={myStyle}> Hello  {FullName}</h1>
            <h1 style ={myStyle}>  {Bio}</h1>
            <h1 style ={myStyle}>  {Profession}</h1>
            <button onClick={() => alertMyInput(`My name is ${FullName} `)}>
     ClickMe
   </button>

        </div>
        
    )
}
Profile.defaultProps = {
    FullName : "taher",
    Bio : "My Bio",
    Profession : "Developer"
}
Profile.propTypes = {
    FullName: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string
  }
export default Profile