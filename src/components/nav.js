import React from "react";
import { Link } from "react-router-dom";

function nav() {
  const print = () =>{
    window.print();
  } 
  //const print = "Hello"
  return (
    <div>
      <div className="nav">
        <div className="navLogo">
          <Link to="/">Musaif</Link>
        </div>
        <ul>
          
          {/* <li className="home" >
            <Link to="/">Home</Link>
          </li> */}
          <li className="home" >
          <button className="printbtn" onClick={print}>Download</button>
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
