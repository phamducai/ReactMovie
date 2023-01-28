import { baseService } from "./baseService";
export class QuanLyNguoiDungService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
  capNhatThongTinNguoiDung = (data) => {
    return this.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
  };
  dangKi = (thongTinDangKi) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKi);
  };

  layDanhSachNguoiDungGp01 = (data = "", Group = "GP01") => {
    if (data.trim() !== "") {
      return this.get(
        `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${Group}&tuKhoa=${data}`
      );
    } else {
      return this.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${Group}`
      );
    }
  };
  TimKiemNguoiDung = (data = "", Group = "GP01") => {
    if (data.trim() !== "") {
      return this.get(
        `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${Group}&tuKhoa=${data}`
      );
    } else {
      return this.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${Group}`);
    }
  };

  xoaUser = (taiKhoan) => {
    console.log(taiKhoan);
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };
  ThemNguoiDung = (data = "") => {
    return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, data);
  };
  CapNhatThongTinNguoiDung = (data = "") => {
    return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
