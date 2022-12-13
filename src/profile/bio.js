import React from 'react';
import PropTypes from 'prop-types';
const Bio = (props) => {
    return (
        <div>
             <h5>{props.FullName}</h5>
            <span >Age:</span> {props.Age} <br/>
            <span>Gender:</span>{props.Gender}<br/>
            <span>Interests:</span>{props.Interests}<br/>
            <span>Bio:</span>{props.FullName} is {props.Age} years old, I like {props.Interests}
            
        </div>
    )
}
Bio.defaultProps = {
    FullName: "taher",
    Age: 30,
    Gender: "Mail",
    Interests: "Reading"
}
Bio.propTypes = {
    FullName: PropTypes.string,
    Age: PropTypes.number,
    Gender: PropTypes.string,
    Interests: PropTypes.string,
  }
export default Bio;

