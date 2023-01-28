import produce from "immer";
import {
  DANG_NHAP_ACTION,
  DANH_SACH_KHACH_HANG,
} from "redux/actions/types/QuanLyNguoiDungType";

const initialState = {
  thongTinNguoiDung: null,
  danhsachkhachhang: [],
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case DANG_NHAP_ACTION:
        draft.thongTinNguoiDung = action.thongTinNguoiDung;
        break;
      case DANH_SACH_KHACH_HANG:
        draft.danhsachkhachhang = action.danhsachkhachhang;
        break;

      default:
        break;
    }
  });
};
