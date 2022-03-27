import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDicFB, createCard } from "../redux/modules/card";
import { createId } from "../../utils/common";
import { addDocFB } from "../redux/modules/card";
import "./detail.css";

const Detail = (props) => {
  const dictionaryList = useSelector((state) => state.card.dictionaryList);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    // id: 0,
    word: "",
    mean: "",
    example: "",
    translate: "",
  });

  const onClick = (e) => {
    e.preventDefault();
    // const data = {
    //   ...formValues,
    //   id: createId(dictionaryList),
    // };
    // dispatch(createCard(data));
    dispatch(addDicFB(formValues));
    navigate("/");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <div className="form-wrapper">
        <form className="form-dictionary">
          <input
            name="word"
            className="inputVal"
            type="text"
            placeholder="word"
            onChange={onChange}
            value={formValues.word}
          />
          <input
            name="mean"
            className="inputVal"
            type="text"
            placeholder="mean"
            onChange={onChange}
            value={formValues.mean}
          />
          <input
            name="example"
            className="inputVal"
            type="text"
            placeholder="example"
            onChange={onChange}
            value={formValues.example}
          />
          <input
            name="translate"
            className="inputVal"
            type="text"
            placeholder="translate"
            onChange={onChange}
            value={formValues.translate}
          />
          <button className="btn" onClick={onClick}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Detail;
