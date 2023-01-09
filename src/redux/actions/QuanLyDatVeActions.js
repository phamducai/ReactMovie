import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";
import { quanLyDatVeService } from "services/QuanLyDatVeService";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      dispatch({
        type: SET_CHI_TIET_PHONG_VE,
        chiTietPhongVe: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const datGheAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: DAT_VE,
      gheDuocChon: ghe,
    });
  };
};
