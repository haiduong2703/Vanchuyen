import React from "react";

import img1 from "../assets/image/slide_3.jpg";
import img2 from "../assets/image/slide_2.jpg";
import img3 from "../assets/image/slide_3.jpg";

const SlideNews = () => {
  return (
    <div className="slidenews">
      <div className="container">
        <div className="slidenews__items">
          <div className="slidenews__items__big">
            <h2>Giảm giá 10%</h2>
            <p>DEAL THÁNG 3 SIÊU HOT CHO KHÁCH HÀNG MỚI GIAO HÀNG NHANH</p>
          </div>
          <div className="slidenews__items__small">
            <div className="slidenews__items__small__block">
              <img src={img2} alt="" />
              <p>HƯỚNG DẪN LÊN ĐƠN VỚI TÍNH NĂNG GIAO THẤT BẠI - THU TIỀN</p>
            </div>
            <div className="slidenews__items__small__block">
              <img src={img3} alt="" />
              <p>
                Miền bắc transport giao hàng đồng giá 30K tại 3 địa điểm du lịch
                tâm linh nổi tiếng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideNews;
