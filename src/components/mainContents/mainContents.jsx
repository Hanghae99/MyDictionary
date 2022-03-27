import React from "react";
import Card from "../card/card";
import { useSelector } from "react-redux";

const MainContents = (props) => {
  const dictionaryList = useSelector((state) => state.card.dictionaryList);

  return (
    <>
      {dictionaryList.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
};

export default MainContents;
