import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, updateDicFB } from "../redux/modules/card";
import "./card.css";

const Card = ({ item }) => {
  const dispatch = useDispatch();

  // console.log(item.id);

  return (
    <>
      <div className="wrapper">
        <section className="border-box">
          <div className="dictionary-card">
            <div className="card-header">
              <h2>{item.word}</h2>
              <div className="card-btn">
                <button
                  className="check"
                  onClick={() => {
                    dispatch(updateDicFB(item.id));
                    console.log("나는 체크버튼을 확인할거양", item.completed);
                  }}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button className="edit">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="remove"
                  onClick={() => {
                    dispatch(deleteCard(item.id));
                    console.log("삭제할거야!");
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="card-contents">
              <p>{item.mean}</p>
              <p className="blue">{item.example}</p>
              <p className="blue">{item.translate}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
