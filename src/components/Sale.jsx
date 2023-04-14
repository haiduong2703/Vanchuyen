import React from "react";
const img1 = require("../assets/image/n1.jpg");
const img2 = require("../assets/image/n2.jpg");
const img3 = require("../assets/image/n1.jpg");
const dataSale = [
  {
    title: "Viettel Post GIẢM 20% cước phí đối với dịch vụ Chuyển phát Quốc tế",
    detail:
      "VIETTEL POST GIẢM 20% CƯỚC PHÍ VẬN CHUYỂN VỚI DỊCH VỤ CHUYỂN PHÁT QUỐC TẾ Trải qua những nỗ lực và phát triển không ngừng, Viettel Post ngày càng mở...",
    img: img1,
  },
  {
    title: "Viettel Post GIẢM 20% cước phí đối với dịch vụ Chuyển phát Quốc tế",
    detail:
      "VIETTEL POST GIẢM 20% CƯỚC PHÍ VẬN CHUYỂN VỚI DỊCH VỤ CHUYỂN PHÁT QUỐC TẾ Trải qua những nỗ lực và phát triển không ngừng, Viettel Post ngày càng mở...",
    img: img2,
  },
  {
    title: "Viettel Post GIẢM 20% cước phí đối với dịch vụ Chuyển phát Quốc tế",
    detail:
      "VIETTEL POST GIẢM 20% CƯỚC PHÍ VẬN CHUYỂN VỚI DỊCH VỤ CHUYỂN PHÁT QUỐC TẾ Trải qua những nỗ lực và phát triển không ngừng, Viettel Post ngày càng mở...",
    img: img3,
  },
  {
    title: "Viettel Post GIẢM 20% cước phí đối với dịch vụ Chuyển phát Quốc tế",
    detail:
      "VIETTEL POST GIẢM 20% CƯỚC PHÍ VẬN CHUYỂN VỚI DỊCH VỤ CHUYỂN PHÁT QUỐC TẾ Trải qua những nỗ lực và phát triển không ngừng, Viettel Post ngày càng mở...",
    img: img3,
  },
  {
    title: "Viettel Post GIẢM 20% cước phí đối với dịch vụ Chuyển phát Quốc tế",
    detail:
      "VIETTEL POST GIẢM 20% CƯỚC PHÍ VẬN CHUYỂN VỚI DỊCH VỤ CHUYỂN PHÁT QUỐC TẾ Trải qua những nỗ lực và phát triển không ngừng, Viettel Post ngày càng mở...",
    img: img3,
  },
  {
    title: "Viettel Post GIẢM 20% cước phí đối với dịch vụ Chuyển phát Quốc tế",
    detail:
      "VIETTEL POST GIẢM 20% CƯỚC PHÍ VẬN CHUYỂN VỚI DỊCH VỤ CHUYỂN PHÁT QUỐC TẾ Trải qua những nỗ lực và phát triển không ngừng, Viettel Post ngày càng mở...",
    img: img3,
  },
];
const Sale = () => {
  return (
    <div className="sale">
      <div className="sale__title">
        <h3>Tin khuyến mãi</h3>
      </div>
      <div className="sale__content">
        {dataSale.map((item, index) => (
          <div key={index} className="sale__content__item">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
