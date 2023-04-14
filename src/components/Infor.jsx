import React from "react";
import img1 from "../assets/image/i1.jpg";
import Button from "./Button";
const Infor = () => {
  return (
    <div className="introduce">
      <div className="introduce__content">
        <h3>
          <span>Giới thiệu</span> Miền Bắc Transport
        </h3>
        <div className="introduce__content__container">
          <div className="introduce__content__image">
            <img src={img1} alt="" />
          </div>
          <div className="introduce__content__detail">
            <div className="introduce__content__detail__block1">
              <p>
                Viettel Post – Tổng Công ty Cổ phần Bưu Chính Viettel là đơn vị
                thành viên của Tập đoàn Công nghiệp Viễn thông Quân đội Viettel,
                với 24 năm xây dựng và phát triển cùng nhiều danh hiệu,.....
              </p>
            </div>
            <div className="introduce__content__detail__block1">
              <p>
                Trở thành Công ty Logistics công nghệ cao, nằm trong nhóm 5
                doanh nghiệp hàng đầu tại Việt Nam vào năm 2025.Chiến lược của
                Viettel Post vẫn là phát triển kinh doanh đa dịch vụ, đưa dịch
                vụ đến gần khách hàng đối với cả thị trường trong nước và quốc
                tế, đồng thời luôn khẳng định là một doanh nghiệp hoàn thành tốt
                nghĩa vụ đối với cộng đồng......
              </p>
            </div>
            <div className="introduce__content__detail__block1">
              <p>
                Không ngừng sáng tạo cách thức cung cấp dịch vụ, nâng cao tiêu
                chuẩn chất lượng, khai thác tối đa nguồn lực dựa trên nền tảng
                số đảm bảo cung cấp đầy đủ dịch vụ Logistics với hiệu quả cao
                nhất cho toàn xã hộiSong song với .....
              </p>
            </div>
          </div>
        </div>
        <Button>Xem chi tiết</Button>
      </div>
    </div>
  );
};

export default Infor;
