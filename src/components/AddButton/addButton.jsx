import React from "react";
import { useNavigate } from "react-router-dom";

const AddButton = (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/detail");
  };
  return (
    <>
      <button className="addBtn" onClick={onClick}>
        Add Word 😆
      </button>
    </>
  );
};

export default AddButton;
