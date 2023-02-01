import {
  CHUYEN_TAB,
  DAT_VE,
  DAT_VE_HOAN_TAT,
  SET_CHI_TIET_PHONG_VE,
} from "./types/QuanLyDatVeType";
import { quanLyDatVeService } from "services/QuanLyDatVeService";
import { ThongTinDatVe } from "_core/models/ThongTinDatVe";
import { layThongTinNguoiDungAction } from "./QuanLyNguoiDungAction";

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

export const datGheAction = (ghe) => {
  return async (dispatch) => {
    await dispatch({
      type: DAT_VE,
      gheDuocChon: ghe,
    });
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);

      console.log(result.data.content);
      //Đặt vé thành công gọi api load lại phòng vé
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch({ type: CHUYEN_TAB });
      await dispatch(layThongTinNguoiDungAction);
    } catch (error) {
      console.log(error);
    }
  };
};
