import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  layChiTietPhongVe = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu.maLichChieu}`
    );
  };
  datVe = (ThongTinDatVe) => {
    return this.post(`/api/QuanLyDatVe/DatVe`, ThongTinDatVe);
  };
  taoLichChieu = (thongTinLichChieu) => {
    return this.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
  };
}
export const quanLyDatVeService = new QuanLyDatVeService();
