import produce from "immer";
import { DANG_NHAP_ACTION } from "redux/actions/types/QuanLyNguoiDungType";

const initialState = {
  thongTinNguoiDung: null,
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case DANG_NHAP_ACTION:
        draft.thongTinNguoiDung = action.thongTinNguoiDung;
        break;

      default:
        break;
    }
  });
};
