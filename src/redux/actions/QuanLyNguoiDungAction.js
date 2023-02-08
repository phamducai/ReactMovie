import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import {
  DANG_NHAP_ACTION,
  DANH_SACH_KHACH_HANG,
} from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        //Chuyển hướng đăng nhập về trang trước đó
        console.log(result.data);
        localStorage.setItem("token", result.data.content.accessToken);
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};

export const dangKiAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKi(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};
export const updateUserAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
        thongTinDangNhap
      );
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};

export const LayDanhSachKhachHang = (data = "") => {
  console.log(data);
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDungGp01(
        data
      );
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANH_SACH_KHACH_HANG,
          danhsachkhachhang: result.data.content,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};

export const layThongTinNguoiDungAction = async (next) => {
  try {
    const result = await quanLyNguoiDungService.layThongTinNguoiDung();
    next({
      type: DANG_NHAP_ACTION,
      thongTinNguoiDung: result.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
export const ThemNguoiDungAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.ThemNguoiDung(data);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANH_SACH_KHACH_HANG,
          danhsachkhachhang: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};
export const capNhatThongTinNguoiDung = (data) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.CapNhatThongTinNguoiDung(
        data
      );
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANH_SACH_KHACH_HANG,
          danhsachkhachhang: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      throw error;
    }
  };
};




export const xoaNguoidungAction = (maPhim) => {
  console.log(maPhim);
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.xoaUser(maPhim);
      console.log("result", result.data.content);
      alert("Xoá phim thành công !");
      dispatch(LayDanhSachKhachHang());
    } catch (errors) {
      alert("Người dùng này đã đặt vé xem phim không thể xóa!");
      console.log("errors", errors.response?.data);
    }
  };
};


export const TimKiemNguoiDungAction = (data = "") => {
  console.log(data);
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.TimKiemNguoiDung(data);
      if (result.data.statusCode === 200) {
        dispatch({
          type: "THONG_TIN_KHACH",
          thongTinKhach: result.data.content,
        });
      }
    } catch (error) {
      throw error;
    }
  };
};