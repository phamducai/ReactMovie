import { quanLyPhimService } from "../../services/QuanLyPhimService";
import {
  SET_ALL_FILMS,
  SET_DANH_SACH_PHIM,
  SET_THONG_TIN_PHIM,
} from "./types/QuanLyPhimType";
import requester from "services/api";

export const layDanhSachPhimAction = (page = 1) => {
  return async (dispatch) => {
    try {
      const result = await requester({
        url: "/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
        method: "GET",
        params: {
          maNhom: "GP10",
          soTrang: page,
          soPhanTuTrenTrang: 8,
        },
      });
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const layDanhSachPhimActionAll = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      //Sử dụng tham số thamSo
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim);

      //Sau khi lấy dữ liệu từ api về => redux (reducer)
      dispatch({
        type: SET_ALL_FILMS,
        payload: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.themPhimUploadHinh(formData);
      alert("Thêm phim thành công!");
      console.log("result", result.data.content);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.capNhatPhimUpload(formData);
      alert("Cập nhật phim thành công!");
      console.log("result", result.data.content);

      dispatch(layDanhSachPhimAction());
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layThongTinPhim(maPhim);
      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.xoaPhim(maPhim);
      console.log("result", result.data.content);
      alert("Xoá phim thành công !");
      dispatch(layDanhSachPhimAction());
    } catch (errors) {
      console.log("errors", errors.response?.data);
    }
  };
};
