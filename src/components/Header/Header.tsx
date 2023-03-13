import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../App";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__logo">
          <Link to={ROUTES.ORDERS}>APP IN AIR</Link>
        </div>
        <div className="header__user-data">
          <div className="header__user-data__settings">
            <button className="header__user-data__settings-button">
              English
            </button>
            <button className="header__user-data__settings-button">
              USD - $
            </button>
          </div>
          <p className="header__user-data__name"> Eva</p>
          <img src="images/eva.png" alt="profile avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
