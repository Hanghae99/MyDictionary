import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="top-border">
        <h1
          className="title-name"
          onClick={() => {
            navigate("/");
          }}
        >
          My Dictionary
        </h1>
      </div>
    </>
  );
};

export default Header;
