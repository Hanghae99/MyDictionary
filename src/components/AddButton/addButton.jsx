import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddButton = (props) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/detail");
  };
  return (
    <>
      <Btn>
        <button className="addBtn" onClick={onClick}>
          Add Word 😆
        </button>
      </Btn>
    </>
  );
};

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export default AddButton;
