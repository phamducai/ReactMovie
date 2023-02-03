import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "../actions/types/QuanLyDatVeType";
import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import produce from "immer";

const inititalState = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  tabActive: "1",
};
export const QuanLyDatVeReducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_CHI_TIET_PHONG_VE:
        draft.chiTietPhongVe = action.chiTietPhongVe;
        break;
      case DAT_VE:
        {
          let index = draft.danhSachGheDangDat.findIndex(
            (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
          );
          if (index !== -1) {
            //Nếu tìm thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xoá đi
            draft.danhSachGheDangDat.splice(index, 1);
          } else {
            draft.danhSachGheDangDat.push(action.gheDuocChon);
          }
        }
        break;

      case CHUYEN_TAB: {
        draft.tabActive = "2";
        break;
      }

      case "CHANGE_TAB_ACTIVE": {
        draft.tabActive = action.number;
        break;
      }

      case DAT_VE_HOAN_TAT: {
        draft.danhSachGheDangDat = [];
        break;
      }

      default:
        break;
    }
  });
};
