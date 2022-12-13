 import React from 'react';
 import PropTypes from 'prop-types';
function AlertButton(props ) {
    return (
      <button onClick={() => alert(props.FullName)}>
        Click on Me
      </button>
    );
  }
  AlertButton.propTypes = {
    FullName: PropTypes.string,
  }
  export default AlertButton;