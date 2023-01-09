import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "./types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
  return async (next) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();

      next({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (next) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuPhim(id);
      next({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
