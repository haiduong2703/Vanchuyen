import React from "react";

const img1 = require("../assets/image/d1.jpg");
const img2 = require("../assets/image/d2.jpg");
const img3 = require("../assets/image/d3.jpg");
const img4 = require("../assets/image/d4.jpg");

const imageData = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
];
const image_company = () => {
  return (
    <div className="image">
      <div className="image__introduce">
        <div className="image__introduce__title">
          <h2>HÌNH ẢNH CÔNG TY</h2>
          <p>TỔNG CÔNG TY CỔ PHẦN BƯU CHÍNH VIETTEL</p>
        </div>
        <div className="image__introduce__content">
          {imageData.map((item, index) => (
            <div key={index} className="image__introduce__content__item">
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
        <div className="image__introduce__detail">
          <p>
            Miền Bắc Transport là một đơn vị thành viên của Tập đoàn Công nghiệp
            Viễn thông Quân đội Viettel chuyên kinh doanh các dịch vụ Chuyển
            phát nhanh trong nước và quốc tế; Dịch vụ Logistics; Dịch vụ
            Fulfillment; Dịch vụ Thương mại;...
          </p>
        </div>
      </div>
    </div>
  );
};

export default image_company;
