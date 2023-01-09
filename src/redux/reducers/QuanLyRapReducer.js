import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType";
import produce from "immer";

const inititalState = {
  heThongRapChieu: [],
};
export const QuanLyRapReducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_HE_THONG_RAP_CHIEU:
        draft.heThongRapChieu = action.heThongRapChieu;
        break;
      default:
        break;
    }
  });
};
