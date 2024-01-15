import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"
import rootReducer from "./rootReducer";

const apply = [thunk]

const store = createStore(rootReducer, applyMiddleware(...apply))

export default store;