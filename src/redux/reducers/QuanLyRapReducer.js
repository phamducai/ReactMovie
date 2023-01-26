import {
  SET_DANH_SACH_HE_THONG_CUM_RAP,
  SET_DANH_SACH_HE_THONG_RAP,
  SET_HE_THONG_RAP_CHIEU,
} from "../actions/types/QuanLyRapType";
import produce from "immer";

const inititalState = {
  heThongRapChieu: [],
  heThongRap: [],
  heThongCumRap: [],
};
export const QuanLyRapReducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_HE_THONG_RAP_CHIEU:
        draft.heThongRapChieu = action.heThongRapChieu;
        break;
      case SET_DANH_SACH_HE_THONG_RAP: {
        draft.heThongRap = action.heThongRap;
        break;
      }
      case SET_DANH_SACH_HE_THONG_CUM_RAP: {
        draft.heThongCumRap = action.heThongCumRap;
        break;
      }

      default:
        break;
    }
  });
};
