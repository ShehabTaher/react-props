import React  from 'react';
import PropTypes from 'prop-types';
const fullName = (props) => {
  const myStyle={
        textAlign:"center",
        color:"rgb(9, 30, 90)",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={myStyle}>  {props.firstName} {props.lastName}</h1>
    {props.children}
        </div>

    );
}
fullName.defaultProps = {
    firstName: "taher",
    lastName: "Mokhtar"
}
fullName.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }

export default fullName;