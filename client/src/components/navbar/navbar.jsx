import "./navbarStyle.css";
import React, { useState } from "react";

function Navbar(props) {
  const [activeView, setActiveView] = useState(<></>);

  const changeView = (view) => {
    {
      props.viewCallback(view);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          {props.content.map((object) => (
            <li key={object.title} onClick={() => changeView(object.view)}>
              {object.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
