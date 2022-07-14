import React from "react";
import { Link } from "react-router-dom";

function nav() {
  return (
    <div>
      <div className="nav">
        <div className="navLogo">
          <Link to="/">Musaif</Link>
        </div>
        <ul>
          
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* <li>
            <Link to="/About">About us</Link>
          </li> */}
        
          <li>
            {/* <Link to="/footer">More</Link> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default nav;
