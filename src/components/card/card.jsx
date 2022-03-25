import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="wrapper">
        <section className="border-box">
          <div className="dictionary-card">
            <div className="card-header">
              <h2>Love</h2>
              <div className="card-btn">
                <button className="check">
                  <i class="fa-solid fa-check"></i>
                </button>
                <button className="edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="remove">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="card-contents">
              <p>대단히 좋아하다[즐기다] (=adore)</p>
              <p className="blue">
                They say love is blind, but I think love is deaf.
              </p>
              <p className="blue">
                사람들이 사랑하면 눈이 먼다고 하잖아.근데 내 생각에는 사랑하면
                귀가 먹는 것 같아.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
