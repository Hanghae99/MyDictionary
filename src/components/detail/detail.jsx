import React from "react";
import { useNavigate } from "react-router-dom";
import "./detail.css";

const Detail = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrap">
        <div className="input-content">
          <p>
            <input className="inputVal" type="text" placeholder="word" />
          </p>
          <p>
            <input className="inputVal" type="text" placeholder="mean" />
          </p>
          <p>
            <input className="inputVal" type="text" placeholder="example" />
          </p>
          <p>
            <input className="inputVal" type="text" placeholder="translate" />
          </p>
          <button
            className="btn"
            onClick={() => {
              navigate("/");
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
