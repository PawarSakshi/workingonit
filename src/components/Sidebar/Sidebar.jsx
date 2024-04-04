import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../../img/logo.png";
import { SidebarData } from "../../Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Po<span>r</span>tal
        </span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => (
          <Link
            to={item.path}
            className={selected === index ? "menuItems active" : "menuItems"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

