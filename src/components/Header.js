import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  return (
    <div className="Employee_Directory">
      <FontAwesomeIcon icon={props.icon} />
      {props.title}
    </div>
  );
}

export default Header;
