import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <>
      <div>
        <div className="top-border">
          <h1 className="title-name">My Dictionary</h1>
        </div>
        <button className="addBtn">Add Word 😆</button>
      </div>
    </>
  );
};

export default Header;
