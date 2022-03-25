import React from "react";
import { useNavigate } from "react-router-dom";

const AddButton = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="addBtn"
        onClick={() => {
          navigate("/detail");
        }}
      >
        Add Word 😆
      </button>
    </>
  );
};

export default AddButton;
