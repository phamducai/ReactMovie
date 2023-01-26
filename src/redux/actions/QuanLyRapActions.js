import { quanLyRapService } from "../../services/QuanLyRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_DANH_SACH_HE_THONG_CUM_RAP,
  SET_DANH_SACH_HE_THONG_RAP,
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
  console.log(id);
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

export const getCineInfoListSystemAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinHeThongRap();
      // console.log(result.data.content);

      dispatch({
        type: SET_DANH_SACH_HE_THONG_RAP,
        heThongRap: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCineClusterInfoListSystemAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinCumRap(maHeThongRap);
      // console.log(result.data.content);

      dispatch({
        type: SET_DANH_SACH_HE_THONG_CUM_RAP,
        heThongCumRap: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
