import React from "react";
import AddButton from "../components/AddButton/addButton";
import Header from "../components/header/header";
import MainContents from "../components/mainContents/mainContents";

const MainPage = (props) => {
  return (
    <>
      <Header />
      <AddButton />
      <MainContents />
    </>
  );
};

export default MainPage;
