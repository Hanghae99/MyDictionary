import React from "react";
import Card from "../card/card";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainContents = (props) => {
  const dictionaryList = useSelector((state) => state.card.dictionaryList);

  return (
    <>
      <Margin>
        <Wrap>
          {dictionaryList.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Wrap>
      </Margin>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  margin-left: 155px;
`;

const Margin = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export default MainContents;
