import "./navbarStyle.css";
import { useState } from "react";

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
          {props.content.map((object) => (
            <li key={object.title} onClick={() => changeView(object)}>
              {Title(object)}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
