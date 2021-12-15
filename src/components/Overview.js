import React from 'react';
import { Link } from 'react-router-dom';
import react_icon from '../data/media/react_icon.png';
function Overview(props) {

  const{handleClick}=props
  const overView = 'overView';
  
  return (
    <div className="header">
      <Link className="link" onClick={() => handleClick(overView)} to={`/`}>
        <h3>Overview</h3>
      </Link>
      <Link className="link" to="/Help">
        <h3>Help</h3>
      </Link>
      <img src={react_icon} alt="react icon" className="image_react"/>
    </div>
  );
  }

export default Overview;
