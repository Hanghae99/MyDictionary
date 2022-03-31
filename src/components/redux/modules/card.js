import { db } from "../../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
const POST_CARD = "POST_CARD";
const DELETE_CARD = "DELETE_CARD";
const LOAD = "LOAD";
const UPDATE = "UPDATE";

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
export const createCard = (data) => ({ type: POST_CARD, payload: data });
export const deleteCard = (idx) => ({ type: DELETE_CARD, payload: idx });
export const loadCard = (data) => ({ type: LOAD, payload: data });
export const updateCard = (data) => ({ type: UPDATE, payload: data });

/* 초기 상태 선언 */
const initialState = {
  dictionaryList: [],
};

// 미들웨어(thunk) 함수
export const loadDicFB = () => {
  return async function (dispatch) {
    const dictionaryData = await getDocs(collection(db, "dictionary"));

    const dictionaryList = [];

    dictionaryData.forEach((item) => {
      dictionaryList.push({ id: item.id, ...item.data() });
    });

    dispatch(loadCard(dictionaryList));
  };
};

export const addDicFB = (dictionary) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), dictionary);
    const dictionaryData = { id: docRef.id, ...dictionary };
    console.log(dictionaryData);

    dispatch(createCard(dictionaryData));
  };
};

export const updateDicFB = (dictionary_id) => {
  return async function (dispatch) {
    console.log(dictionary_id);
    const docRef = doc(db, "dictionary", dictionary_id);
    await updateDoc(docRef, { completed: true });
  };
};

export const deleteDicFB = (idx) => {
  return async function (dispatch) {
    const docRef = doc(db, "dictionary", idx);
    await deleteDoc(docRef);

    dispatch(deleteCard(idx));
    console.log(idx);
  };
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export function counter(state = initialState, action) {
  switch (action.type) {
    case POST_CARD:
      return {
        ...state,
        dictionaryList: [...state.dictionaryList, action.payload],
      };
    case DELETE_CARD: {
      console.log(state, action);

      const newList = state.dictionaryList.filter((i, idx) => {
        return action.payload !== i.id;
      });

      return {
        ...state,
        dictionaryList: newList,
      };
    }
    case LOAD: {
      return {
        ...state,
        dictionaryList: action.payload,
      };
    }
    default:
      return state;
  }
}
