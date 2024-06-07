import "./navbarStyle.css";
import { useState } from "react";
import React from "react";

function Dash() {
  return(<div className="dash">-</div>)
}

function Navbar(props) {
  const [activeView, setActiveView] = useState(<></>);

  const changeView = (object) => {
    {
      props.viewCallback(object.view);
      setActiveView(object.title)
    }
  };

  const Title = (object) => {
    let selected = activeView == object.title

    return(
      <div className={selected ? "navbar-button selected" : "navbar-button"}>{object.title}</div>
    )
  }

  return (
    <div>
      <nav className="navbar">
        <ul>
          {props.content.map((object, index) => (
              <React.Fragment key={object.title}>
                <li onClick={() => changeView(object)}>
                  {Title(object)}
                </li>
                {index !== props.content.length - 1 && <Dash />}
              </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
