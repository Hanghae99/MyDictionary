// import logo from "./logo.svg";
import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/detailPage";
import { db } from "./firebase";
import React, { useEffect } from "react";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { loadDicFB } from "./components/redux/modules/card";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dictionaryList = useSelector((state) => state.card.dictionaryList);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(loadDicFB());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
