import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { LoadingReducer } from "./reducers/LoadingReducer";

const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyDatVeReducer,
  QuanLyNguoiDungReducer,
  //   LoadingReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
